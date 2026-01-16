import { Helmet } from '@dr.pogodin/react-helmet'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_CONFIG } from '../config/site'

import Answers from '../components/Answers/Answers'
import Benifits from '../components/Benifits/Benifits'
import Compensations from '../components/Compensations/Compensations'
import Consultation from '../components/Consultation/Consultation'
import Equipment from '../components/Equipment/Equipment'
import Feedback from '../components/Feedback/Feedback'
import Footer from '../components/Footer/Footer'
import Foreigners from '../components/Foreigners/Foreigners'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Papers from '../components/Papers/Papers'
import Possibilities from '../components/Possibilities/Possibilities'
import Questions from '../components/Questions/Questions'
import Requirements from '../components/Requirements/Requirements'
import Specialties from '../components/Specialties/Specialties'
import Stages from '../components/Stages/Stages'
import Vacansies from '../components/Vacansies/Vacansies'

const clamp = (str, max = 160) => {
	if (!str) return ''
	const s = String(str).replace(/\s+/g, ' ').trim()
	return s.length > max ? s.slice(0, max - 1).trimEnd() + '…' : s
}

const Home = () => {
	const { hash } = useLocation()

	useEffect(() => {
		if (!hash) return
		const el = document.querySelector(hash)
		if (!el) return
		setTimeout(() => {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}, 0)
	}, [hash])

	// === SEO ===
	const canonicalUrl = SITE_CONFIG.domain
	const title = `Контрактная служба — ${SITE_CONFIG.brandName}`
	const description = clamp(
		'Оформление контракта на службу. Выплаты, требования, вакансии, помощь с документами и ВВК.'
	)

	// === schema.org (JSON-LD) ===
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
				'@type': 'WebPage',
				'@id': `${SITE_CONFIG.domain}#webpage`,
				url: canonicalUrl,
				name: title,
				description,
				isPartOf: { '@id': `${SITE_CONFIG.domain}#website` },
				about: { '@id': `${SITE_CONFIG.domain}#organization` },
				inLanguage: 'ru-RU',
			},
		],
	}

	return (
		<>
			<Helmet>
				{/* BASIC */}
				<title>{title}</title>
				<meta name='description' content={description} />
				<link rel='canonical' href={canonicalUrl} />

				{/* OPEN GRAPH */}
				<meta property='og:type' content='website' />
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta property='og:url' content={canonicalUrl} />
				<meta property='og:site_name' content={SITE_CONFIG.brandName} />
				<meta property='og:locale' content={SITE_CONFIG.locale || 'ru_RU'} />

				{/* schema.org JSON-LD */}
				<script type='application/ld+json'>
					{JSON.stringify(schemaOrgJson)}
				</script>
			</Helmet>

			<div className='min-h-screen flex flex-col w-full max-w-300 min-[1200px]:mx-auto '>
				<Header />

				<main className='flex-1 lg:mt-2.5'>
					<Hero />
					<Compensations />
					<Benifits />
					<Vacansies />
					<Answers />
					<Equipment />
					<Requirements />
					<Specialties />
					<Stages />
					<Possibilities />
					<Papers />
					<Foreigners />
					<Feedback />
					<Questions />
					<Consultation />
				</main>

				<Footer />
			</div>
		</>
	)
}

export default Home
