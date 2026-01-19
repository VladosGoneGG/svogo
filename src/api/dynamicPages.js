// src/api/dynamicPages.js
const ENDPOINTS = {
	city: '/api/noteData/city',
	specialization: '/api/noteData/specialization',
	profession: '/api/noteData/profession',
	unit: '/api/noteData/unit',
}

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

export async function fetchDynamicIndex(pageType, { signal } = {}) {
	const url = ENDPOINTS[pageType]
	if (!url) {
		const err = new Error(`Unknown pageType: ${pageType}`)
		err.status = 400
		throw err
	}
	return apiGet(url, { signal })
}

export async function fetchDynamicPage(pageType, slug, { signal } = {}) {
	const index = await fetchDynamicIndex(pageType, { signal })
	const page = index?.[slug]

	if (!page) {
		const err = new Error('Not found')
		err.status = 404
		throw err
	}

	return {
		meta: page.meta ?? {},
		content: page.content ?? {},
		seo: page.seo ?? undefined,
	}
}
