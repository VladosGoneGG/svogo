import { useQuery } from '@tanstack/react-query'

const ENDPOINTS = {
	city: '/api/noteData/city',
	specialization: '/api/noteData/specialization',
	profession: '/api/noteData/profession',
	unit: '/api/noteData/unit',
	blogAll: '/api/blog/all', // лучше заменить на /api/blog/index
}

function getLabel(slug, page) {
	return page?.meta?.name || page?.content?.hero?.title || slug
}

// быстрее чем localeCompare в sort
const collator = new Intl.Collator('ru', { sensitivity: 'base' })
const byLabel = (a, b) => collator.compare(a.label || '', b.label || '')

async function apiGet(url, { signal } = {}) {
	const res = await fetch(url, {
		method: 'GET',
		headers: { Accept: 'application/json' },
		signal,
	})

	if (!res.ok) {
		const text = await res.text().catch(() => '')
		const err = new Error(text || `HTTP ${res.status}`)
		err.status = res.status
		throw err
	}

	return res.json()
}

const VISIBLE_LIMIT = 12

const topSorted = (arr, limit = VISIBLE_LIMIT) => {
	const copy = arr.slice()
	copy.sort(byLabel)
	return copy.slice(0, limit)
}

async function fetchFooterLinks({ signal } = {}) {
	const [
		cityIndex,
		specializationIndex,
		professionIndex,
		unitIndex,
		blogIndex,
	] = await Promise.all([
		apiGet(ENDPOINTS.city, { signal }),
		apiGet(ENDPOINTS.specialization, { signal }),
		apiGet(ENDPOINTS.profession, { signal }),
		apiGet(ENDPOINTS.unit, { signal }),
		apiGet(ENDPOINTS.blogAll, { signal }),
	])

	const citiesAll = Object.entries(cityIndex ?? {}).map(([slug, page]) => ({
		slug,
		type: 'city',
		label: getLabel(slug, page),
	}))

	const specializationsAll = Object.entries(specializationIndex ?? {}).map(
		([slug, page]) => ({
			slug,
			type: 'specialization',
			label: getLabel(slug, page),
		}),
	)

	const professionsAll = Object.entries(professionIndex ?? {}).map(
		([slug, page]) => ({
			slug,
			type: 'profession',
			label: getLabel(slug, page),
		}),
	)

	const unitsAll = Object.entries(unitIndex ?? {}).map(([slug, page]) => ({
		slug,
		type: 'unit',
		label: getLabel(slug, page),
	}))

	const blogsAll = Object.entries(blogIndex ?? {}).map(
		([categoryKey, page]) => ({
			slug: categoryKey,
			type: 'blog',
			label: page?.meta?.name || categoryKey,
		}),
	)

	// UI: только топ-12 отсортированных
	const cities = topSorted(citiesAll)
	const units = topSorted(unitsAll)
	const specAndProf = topSorted([...specializationsAll, ...professionsAll])

	// SEO: полный список (без сортировки — быстрее)
	return {
		cities,
		units,
		specAndProf,

		blogs: topSorted(blogsAll), // если блоги тоже показываешь где-то — оставь topSorted
		seo: {
			citiesAll,
			unitsAll,
			specAndProfAll: [...specializationsAll, ...professionsAll],
			blogsAll,
		},
	}
}

export function useFooterLinks() {
	return useQuery({
		queryKey: ['footerLinks'],
		queryFn: ({ signal }) => fetchFooterLinks({ signal }),

		staleTime: 1000 * 60 * 30,
		gcTime: 1000 * 60 * 120,

		refetchOnWindowFocus: false,
		refetchOnReconnect: true,

		retry: (count, err) => {
			if (err?.status === 404) return false
			return count < 2
		},
	})
}
