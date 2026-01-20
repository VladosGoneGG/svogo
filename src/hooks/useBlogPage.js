import { useQuery } from '@tanstack/react-query'

// Если у тебя на проде nginx проксирует /api -> backend,
// то достаточно '/api'.
// Если нет — подставь VITE_API_URL (например https://v-svo.ru)
const API_BASE =
	(import.meta?.env?.VITE_API_URL ? String(import.meta.env.VITE_API_URL) : '') +
	'/api'

/**
 * Нормализация под твой ответ:
 * 1) /api/blog/all -> { testovyy: { meta, content }, ... }
 * 2) /api/blog/categoryKey=xxx -> может вернуть:
 *    - { xxx: { meta, content } }  (как all, но один ключ)
 *    - или сразу { meta, content } (если вдруг поменяешь бэк)
 */
const normalizeBlogResponse = (raw, requestedKey) => {
	if (!raw || typeof raw !== 'object') return null

	// Вариант: сразу {meta, content}
	if (raw.meta && raw.content) {
		return {
			categoryKey: requestedKey ?? null,
			meta: raw.meta ?? {},
			content: raw.content ?? {},
		}
	}

	// Вариант: { key: { meta, content }, ... }
	const keys = Object.keys(raw)
	if (!keys.length) return null

	const key =
		(requestedKey && raw[requestedKey] ? requestedKey : null) || keys[0]

	const page = raw[key]
	if (!page) return null

	return {
		categoryKey: key,
		meta: page.meta ?? {},
		content: page.content ?? {},
	}
}

const fetchBlogPage = async ({ categoryKey, signal }) => {
	const url = categoryKey
		? `${API_BASE}/blog/categoryKey=${encodeURIComponent(categoryKey)}`
		: `${API_BASE}/blog/all`

	const res = await fetch(url, {
		method: 'GET',
		headers: { Accept: 'application/json' },
		signal, // важное: отмена запроса при смене страницы/категории
	})

	if (res.status === 404) {
		const err = new Error('Not found')
		err.status = 404
		throw err
	}

	if (!res.ok) {
		const err = new Error('Blog fetch failed')
		err.status = res.status
		throw err
	}

	const raw = await res.json()
	const normalized = normalizeBlogResponse(raw, categoryKey)

	if (!normalized) {
		// если сервер вернул пусто/непонятно — трактуем как 404
		const err = new Error('Blog page not found')
		err.status = 404
		throw err
	}

	return normalized
}

/**
 * useBlogPage(categoryKey?)
 * - categoryKey опционален
 * - если нет ключа, берём первую категорию из /all
 */
export const useBlogPage = categoryKey =>
	useQuery({
		queryKey: ['blogPage', categoryKey ?? 'all'],

		// react-query сам прокинет AbortSignal как {signal}
		queryFn: ({ signal }) => fetchBlogPage({ categoryKey, signal }),

		// --- оптимизация ---
		// данные блога не меняются каждую секунду — можно спокойно кешировать
		staleTime: 5 * 60 * 1000, // 5 минут не считаем "устаревшим"
		gcTime: 30 * 60 * 1000, // 30 минут держим в кеше (v5)

		// не долбим сервер при 404
		retry: (failureCount, err) => {
			if (err?.status === 404) return false
			return failureCount < 2
		},

		// приятнее UX при смене categoryKey: не моргать пустотой
		placeholderData: prev => prev, // аналог keepPreviousData для v5

		refetchOnWindowFocus: false,
		refetchOnReconnect: true,
	})
