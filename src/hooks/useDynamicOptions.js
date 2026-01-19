// src/hooks/useDynamicOptions.js
import { useQuery } from '@tanstack/react-query'
import { fetchDynamicIndex } from '../api/dynamicPages'

export function useDynamicOptions(pageType) {
	return useQuery({
		queryKey: ['dynamicIndex', pageType],
		queryFn: ({ signal }) => fetchDynamicIndex(pageType, { signal }),
		enabled: Boolean(pageType),
		select: index =>
			Object.entries(index ?? {}).map(([slug, item]) => ({
				slug,
				name: item?.meta?.name ?? slug,
			})),
	})
}
