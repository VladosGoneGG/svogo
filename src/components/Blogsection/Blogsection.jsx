import Fullbleed from '../Fullbleed/Fullbleed'

const getPostIndex = key => {
	const m = String(key).match(/^post(\d+)$/)
	return m ? Number(m[1]) : null
}

const Blogsection = ({ data, bgClassName = 'bg-white' }) => {
	if (!data || typeof data !== 'object') return null

	// Собираем все postN, сортируем по N
	const posts = Object.entries(data)
		.map(([key, value]) => ({ key, value, n: getPostIndex(key) }))
		.filter(x => x.n !== null && x.value)
		.sort((a, b) => a.n - b.n)
		.map(x => x.value)

	// На случай если вдруг прилетит одиночный пост формата {title,text,note}
	const looksLikeSinglePost =
		('title' in data || 'text' in data) && posts.length === 0

	const finalPosts = looksLikeSinglePost ? [data] : posts

	if (!finalPosts.length) return null

	return (
		<>
			{finalPosts.map((post, idx) => {
				const { title, text, note } = post ?? {}

				// каждый второй — серый
				const sectionBg = idx % 2 === 1 ? 'bg-[#F9F9F9]' : bgClassName

				return (
					<section
						key={`${title ?? 'post'}-${idx}`}
						className='relative py-5 lg:py-[30px] xl:py-[40px]'
					>
						<Fullbleed className={sectionBg} />

						<div className='w-full flex flex-col gap-5 lg:gap-7.5 px-2.5 min-[1199px]:px-[20px]'>
							{title ? (
								<h2 className='w-full font-golos font-semibold text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px] text-contrast'>
									{title}
								</h2>
							) : null}

							<div className='w-full flex flex-col gap-5 font-golos'>
								{text ? (
									<p className='text-[16px] lg:text-[21px] font-normal'>
										{text}
									</p>
								) : null}

								{note ? (
									<div className='flex flex-col'>
										<p className='text-[16px] lg:text-[21px] text-[#797c85]'>
											{note}
										</p>
									</div>
								) : null}
							</div>
						</div>
					</section>
				)
			})}
		</>
	)
}

export default Blogsection
