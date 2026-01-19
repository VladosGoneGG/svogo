import { useQuery } from '@tanstack/react-query'

const ENDPOINTS = {
	city: '/api/noteData/city',
	specialization: '/api/noteData/specialization',
	profession: '/api/noteData/profession',
	unit: '/api/noteData/unit',
}

function getLabel(slug, page) {
	return (
		page?.meta?.name || // админка задаёт русское название
		page?.content?.hero?.title || // fallback (иногда ок)
		slug // последний fallback
	)
}

const byLabel = (a, b) => (a.label || '').localeCompare(b.label || '', 'ru')

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

async function fetchFooterLinks({ signal } = {}) {
	const [cityIndex, specializationIndex, professionIndex, unitIndex] =
		await Promise.all([
			apiGet(ENDPOINTS.city, { signal }),
			apiGet(ENDPOINTS.specialization, { signal }),
			apiGet(ENDPOINTS.profession, { signal }),
			apiGet(ENDPOINTS.unit, { signal }),
		])

	const cities = Object.entries(cityIndex ?? {}).map(([slug, page]) => ({
		slug,
		type: 'city',
		label: getLabel(slug, page),
	}))

	const specializations = Object.entries(specializationIndex ?? {}).map(
		([slug, page]) => ({
			slug,
			type: 'specialization',
			label: getLabel(slug, page),
		}),
	)

	const professions = Object.entries(professionIndex ?? {}).map(
		([slug, page]) => ({
			slug,
			type: 'profession',
			label: getLabel(slug, page),
		}),
	)

	const units = Object.entries(unitIndex ?? {}).map(([slug, page]) => ({
		slug,
		type: 'unit',
		label: getLabel(slug, page),
	}))

	return {
		cities: cities.sort(byLabel),
		specAndProf: [...specializations, ...professions].sort(byLabel),
		units: units.sort(byLabel),
	}
}

export function useFooterLinks() {
	return useQuery({
		queryKey: ['footerLinks'],
		queryFn: ({ signal }) => fetchFooterLinks({ signal }),
		staleTime: 1000 * 60 * 10,
		refetchOnWindowFocus: false,
	})
}
