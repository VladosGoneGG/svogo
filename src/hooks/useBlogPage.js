import { useQuery } from '@tanstack/react-query'
import { fetchBlogPage } from '../services/blogPage.service'

export const useBlogPage = () =>
	useQuery({
		queryKey: ['blog', 'active'],
		queryFn: fetchBlogPage,
	})
