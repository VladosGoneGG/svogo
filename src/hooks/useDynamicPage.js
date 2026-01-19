import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchDynamicIndex } from '../api/dynamicPages'

export function useDynamicPage(pageType, slug) {
	const qc = useQueryClient()

	// 1) индекс (словарь)
	const indexQuery = useQuery({
		queryKey: ['dynamicIndex', pageType],
		queryFn: ({ signal }) => fetchDynamicIndex(pageType, { signal }),
		enabled: Boolean(pageType),
		staleTime: 5 * 60_000,
	})

	// 2) страница (зависит от slug) — берём из кэша индекса
	const pageQuery = useQuery({
		queryKey: ['dynamicPage', pageType, slug],
		enabled: Boolean(pageType && slug) && !!indexQuery.data,
		queryFn: async () => {
			const index =
				qc.getQueryData(['dynamicIndex', pageType]) || indexQuery.data
			const page = index?.[slug]
			if (!page) throw Object.assign(new Error('Not found'), { status: 404 })
			return {
				meta: page.meta ?? {},
				content: page.content ?? {},
				seo: page.seo ?? undefined,
			}
		},
		placeholderData: prev => prev, // держим предыдущую страницу при переходах
	})

	return {
		data: pageQuery.data,
		error: pageQuery.error || indexQuery.error,
		isError: pageQuery.isError || indexQuery.isError,
		isLoading: indexQuery.isLoading || pageQuery.isLoading,
		isFetching: indexQuery.isFetching || pageQuery.isFetching,
	}
}
