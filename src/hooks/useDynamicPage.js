// src/hooks/useDynamicPage.js
import { useQuery } from '@tanstack/react-query'
import { fetchDynamicIndex } from '../api/dynamicPages'

export function useDynamicPage(pageType, slug) {
	const indexQuery = useQuery({
		queryKey: ['dynamicIndex', pageType],
		queryFn: ({ signal }) => fetchDynamicIndex(pageType, { signal }),
		enabled: Boolean(pageType),
	})

	const data = indexQuery.data?.[slug]
		? {
				meta: indexQuery.data[slug].meta ?? {},
				content: indexQuery.data[slug].content ?? {},
				seo: indexQuery.data[slug].seo ?? undefined,
			}
		: undefined

	// если index уже загрузился, а slug нет — это 404
	const error =
		!indexQuery.isLoading && indexQuery.data && !indexQuery.data?.[slug]
			? Object.assign(new Error('Not found'), { status: 404 })
			: indexQuery.error

	return {
		data,
		error,
		isError: Boolean(error),
		isLoading: indexQuery.isLoading,
		isFetching: indexQuery.isFetching,
	}
}
