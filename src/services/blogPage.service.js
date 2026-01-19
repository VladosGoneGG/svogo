import { blogVariantsMock } from '../mocks/blogVariants.mock'

export async function fetchBlogPage() {
	await new Promise(r => setTimeout(r, 50))

	const activeKey = blogVariantsMock.active
	const page = blogVariantsMock.variants[activeKey]

	if (!page) {
		const err = new Error('Not Found')
		err.status = 404
		throw err
	}

	return page
}
