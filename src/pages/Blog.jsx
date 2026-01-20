import { Helmet } from '@dr.pogodin/react-helmet'
import { Navigate, useLocation } from 'react-router-dom'
import Answers from '../components/Answers/Answers'
import Blogsection from '../components/Blogsection/Blogsection'
import Consultation from '../components/Consultation/Consultation'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Requirements from '../components/Requirements/Requirements'
import { SITE_CONFIG } from '../config/site'
import { useBlogPage } from '../hooks/useBlogPage'

const clamp = (str, max = 160) => {
	if (!str) return ''
	const s = String(str).replace(/\s+/g, ' ').trim()
	return s.length > max ? s.slice(0, max - 1).trimEnd() + '…' : s
}

const Blog = () => {
	const { data, isLoading, isError, error } = useBlogPage()
	const location = useLocation()

	if (isLoading) return null

	if (isError) {
		if (error?.status === 404) return <Navigate to='/' replace />
	}

	const baseTitle = data?.seo?.title || 'Блог'
	const title = `${baseTitle}${SITE_CONFIG.brandSuffix ?? ''}`.trim()

	const baseDescription =
		data?.seo?.description ||
		data?.hero?.subtitle ||
		(typeof data?.hero?.text === 'string' ? data.hero.text : '') ||
		data?.block1?.text ||
		'Полезные статьи, разборы и рекомендации.'

	const description = clamp(baseDescription)
	const canonicalUrl = `${SITE_CONFIG.domain}${location.pathname}`

	const schemaOrgJson = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${SITE_CONFIG.domain}#organization`,
				name: SITE_CONFIG.organizationName || SITE_CONFIG.brandName,
				url: SITE_CONFIG.domain,
				logo: SITE_CONFIG.logoUrl,
				sameAs: Array.isArray(SITE_CONFIG.sameAs) ? SITE_CONFIG.sameAs : [],
			},
			{
				'@type': 'WebSite',
				'@id': `${SITE_CONFIG.domain}#website`,
				url: SITE_CONFIG.domain,
				name: SITE_CONFIG.brandName,
				publisher: { '@id': `${SITE_CONFIG.domain}#organization` },
				inLanguage: 'ru-RU',
			},
			{
				'@type': 'BreadcrumbList',
				'@id': `${canonicalUrl}#breadcrumbs`,
				itemListElement: [
					{
						'@type': 'ListItem',
						position: 1,
						name: 'Главная',
						item: SITE_CONFIG.domain,
					},
					{
						'@type': 'ListItem',
						position: 2,
						name: 'Блог',
						item: canonicalUrl,
					},
				],
			},
			{
				'@type': 'Blog',
				'@id': `${canonicalUrl}#blog`,
				url: canonicalUrl,
				name: title,
				description: description || undefined,
				isPartOf: { '@id': `${SITE_CONFIG.domain}#website` },
				publisher: { '@id': `${SITE_CONFIG.domain}#organization` },
				inLanguage: 'ru-RU',
			},
			{
				'@type': 'WebPage',
				'@id': `${canonicalUrl}#webpage`,
				url: canonicalUrl,
				name: title,
				description: description || undefined,
				isPartOf: { '@id': `${SITE_CONFIG.domain}#website` },
				about: { '@id': `${SITE_CONFIG.domain}#organization` },
				breadcrumb: { '@id': `${canonicalUrl}#breadcrumbs` },
				inLanguage: 'ru-RU',
				primaryImageOfPage: SITE_CONFIG.logoUrl
					? { '@type': 'ImageObject', url: SITE_CONFIG.logoUrl }
					: undefined,
			},
		],
	}

	return (
		<>
			<Helmet>
				<title>{title}</title>
				{description ? <meta name='description' content={description} /> : null}

				<link rel='canonical' href={canonicalUrl} />

				<meta property='og:type' content='website' />
				<meta property='og:title' content={title} />
				{description ? (
					<meta property='og:description' content={description} />
				) : null}
				<meta property='og:url' content={canonicalUrl} />
				<meta property='og:site_name' content={SITE_CONFIG.brandName} />
				<meta property='og:locale' content={SITE_CONFIG.locale || 'ru_RU'} />

				<script type='application/ld+json'>
					{JSON.stringify(schemaOrgJson)}
				</script>
			</Helmet>

			<div className='min-h-screen flex flex-col w-full max-w-300 min-[1200px]:mx-auto '>
				<Header />

				<main className='flex-1 mt-2.5'>
					{data?.content?.hero ? <Hero {...data.content.hero} /> : <Hero />}

					<>
						<Blogsection data={data?.content?.blog1} />

						<Answers />

						<Blogsection data={data?.content?.blog2} />

						<Requirements
							title={data?.content?.requirements?.title}
							text={data?.content?.requirements?.text}
						/>

						<Blogsection data={data?.content?.blog3} />

						<Consultation />
					</>
				</main>

				<Footer />
			</div>
		</>
	)
}

export default Blog
