const Compensations = () => {
	return (
		<section className='relative flex flex-col items-center pt-5 pb-5 lg:pb-[30px] xl:pb-[40px]'>
			<div className='absolute inset-0 bg-white -left-[50vw] left-1/2 -translate-x-1/2 w-screen -z-10' />

			<div
				className='relative flex flex-col gap-5 w-full px-2.5 min-[1199px]:px-[20px]
				max-[425px]:h-auto'
			>
				<div className='w-full max-w-[405px] max-[766px]:max-w-none  md:max-w-none'>
					<h3 className='w-full max-w-[365px] max-[766px]:max-w-none font-inter font-semibold text-[20px] md:text-[24px]  lg:text-[30px] xl:text-[40px] px-5 md:max-w-none'>
						Выплаты и компенсации по контракту СВО в 2025 году
					</h3>
				</div>

				<div className='w-full'>
					<ul
						className='w-full flex flex-col gap-2.5
						md:grid md:grid-cols-6 md:gap-2.5 md:min-h-[428px] lg:grid-cols-2 lg:min-h-[550px]   min-[1199]:min-h-[652px] '
					>
						{/* 1 */}
						<li
							className='flex items-center shadow-item max-[425px]:items-start
							h-[96px] max-[425px]:h-auto max-[425px]:min-h-[96px]
							md:h-auto md:min-h-0 md:items-start
							w-full rounded-[20px] bg-[#1d1e21] md:col-span-2 lg:col-span-1'
						>
							<div
								className='flex flex-col  justify-center items-start w-full
								h-[66px] max-[425px]:h-auto md:h-auto
								px-[25px] py-[15px] lg:px-[30px] lg:pt-[20px] lg:pb-[28px] xl:px-[40px] xl:py-[30px]'
							>
								<p className='font-inter font-normal text-[14px] lg:text-[21px] text-white'>
									Единовременная выплата
								</p>
								<p className='font-inter lg:text-[24px] xl:text-[30px] font-semibold text-contrast'>
									до 3 000 000 руб.
								</p>
								<p className='font-golos font-medium text-[14px] text-[#797c85]'>
									по региональным и федеральным программам
								</p>
							</div>
						</li>

						{/* 2 */}
						<li
							className='flex items-center shadow-item max-[425px]:items-start
							h-[115px] max-[425px]:h-auto max-[425px]:min-h-[115px]
							md:h-auto md:min-h-0 md:items-start
							w-full rounded-[20px] bg-[#1d1e21] md:col-span-2 lg:col-span-1'
						>
							<div
								className='flex flex-col justify-center items-start w-full
								h-[66px] max-[425px]:h-auto md:h-auto
								px-[25px] py-[15px] lg:px-[30px] lg:pt-[20px] lg:pb-[28px] xl:px-[40px] xl:py-[30px]'
							>
								<p className='font-inter font-normal text-[14px] lg:text-[21px] text-white'>
									Ежемесячная оплата труда
								</p>
								<p className='font-inter font-semibold lg:text-[24px] xl:text-[30px] text-contrast'>
									от 210 000 руб.
								</p>
								<p className='font-golos font-medium text-[14px] text-[#797c85]'>
									с учетом всех надбавок и премий за службу в зоне СВО
								</p>
							</div>
						</li>

						{/* 3 */}
						<li
							className='flex items-center shadow-item max-[425px]:items-start
							h-[96px] max-[425px]:h-auto max-[425px]:min-h-[96px]
							md:h-auto md:min-h-0 md:items-start
							w-full rounded-[20px] bg-[#1d1e21] md:col-span-2 lg:col-span-1'
						>
							<div
								className='flex flex-col justify-center items-start w-full
								h-[66px] max-[425px]:h-auto md:h-auto
								px-[25px] py-[15px] lg:px-[30px] lg:pt-[20px] lg:pb-[28px] xl:px-[40px] xl:py-[30px]'
							>
								<p className='font-inter font-normal text-[14px] lg:text-[21px] text-white'>
									Выплата при ранении
								</p>
								<p className='font-inter font-semibold lg:text-[24px] xl:text-[30px] text-contrast'>
									до 3 000 000 руб.
								</p>
								<p className='font-golos font-medium text-[14px] text-[#797c85]'>
									по степени тяжести
								</p>
							</div>
						</li>

						{/* 4 */}
						<li
							className='flex items-center shadow-item max-[425px]:items-start
							h-[96px] max-[425px]:h-auto max-[425px]:min-h-[96px]
							md:h-auto md:min-h-0 md:items-start
							w-full rounded-[20px] bg-[#1d1e21] md:col-span-2 lg:col-span-1'
						>
							<div
								className='flex flex-col justify-center items-start w-full
								h-[66px] max-[425px]:h-auto md:h-auto
								px-[25px] py-[15px] lg:px-[30px] lg:pt-[20px] lg:pb-[28px] xl:px-[40px] xl:py-[30px]'
							>
								<p className='font-inter font-normal text-[14px] lg:text-[21px] text-white'>
									Страховая выплата семье военнослужащего
								</p>
								<p className='font-inter font-semibold lg:text-[24px] xl:text-[30px] text-contrast'>
									12 400 000 руб.
								</p>
								<p className='font-golos font-medium text-[14px] text-[#797c85]'>
									по федеральному законодательству
								</p>
							</div>
						</li>

						{/* 5 */}
						<li
							className='flex items-center shadow-item max-[425px]:items-start
							h-[96px] max-[425px]:h-auto max-[425px]:min-h-[96px]
							md:h-auto md:min-h-0 md:items-start
							w-full rounded-[20px] bg-[#1d1e21] md:col-span-2 lg:col-span-1'
						>
							<div
								className='flex flex-col justify-center items-start w-full
								h-[66px] max-[425px]:h-auto md:h-auto
								px-[25px] py-[15px] lg:px-[30px] lg:pt-[20px] lg:pb-[28px] xl:px-[40px] xl:py-[30px]'
							>
								<p className='font-inter font-normal text-[14px] lg:text-[21px] text-white'>
									Списание долгов и кредитов
								</p>
								<p className='font-inter font-semibold lg:text-[24px] xl:text-[30px] text-contrast'>
									до 10 000 000 руб.
								</p>
								<p className='font-golos font-medium text-[14px] text-[#797c85]'>
									для участников боевых действий
								</p>
							</div>
						</li>

						{/* 6 */}
						<li
							className='flex items-center shadow-item max-[425px]:items-start
							h-[96px] max-[425px]:h-auto max-[425px]:min-h-[96px]
							md:h-auto md:min-h-0 md:items-start
							w-full rounded-[20px] bg-[#1d1e21] md:col-span-2 lg:col-span-1'
						>
							<div
								className='flex flex-col justify-center items-start w-full
								h-[66px] max-[425px]:h-auto md:h-auto
								px-[25px] py-[15px] lg:px-[30px] lg:pt-[20px] lg:pb-[28px] xl:px-[40px] xl:py-[30px]'
							>
								<p className='font-inter font-normal text-[14px] lg:text-[21px] text-white'>
									Выплата за уничтожение техники противника
								</p>
								<p className='font-inter font-semibold lg:text-[24px] xl:text-[30px] text-contrast'>
									до 500 000 руб.
								</p>
								<p className='font-golos font-medium text-[14px] text-[#797c85]'>
									в зависимости от типа цели
								</p>
							</div>
						</li>

						{/* 7 */}
						<li
							className='flex items-center shadow-item max-[425px]:items-start
							h-[96px] max-[425px]:h-auto max-[425px]:min-h-[96px]
							md:h-auto md:min-h-0 md:items-start
							w-full rounded-[20px] bg-[#1d1e21] md:col-span-3 lg:col-span-1'
						>
							<div
								className='flex flex-col justify-center items-start w-full
								h-[66px] max-[425px]:h-auto md:h-auto
								px-[25px] py-[15px] lg:px-[30px] lg:pt-[20px] lg:pb-[28px] xl:px-[40px] xl:py-[30px]'
							>
								<p className='font-inter font-normal text-[14px] lg:text-[21px] text-white'>
									Доплата за продижение
								</p>
								<p className='font-inter font-semibold lg:text-[24px] xl:text-[30px] text-contrast'>
									50 000 руб.
								</p>
								<p className='font-golos font-medium text-[14px] text-[#797c85]'>
									за каждый километр
								</p>
							</div>
						</li>

						{/* 8 */}
						<li
							className='flex items-center shadow-item max-[425px]:items-start
							h-[115px] max-[425px]:h-auto max-[425px]:min-h-[115px]
							md:h-auto md:min-h-0 md:items-start
							w-full rounded-[20px] bg-[#1d1e21] md:col-span-3 lg:col-span-1'
						>
							<div
								className='flex flex-col justify-center items-start w-full
								h-[66px] max-[425px]:h-auto md:h-auto
								px-[25px] py-[15px] lg:px-[30px] lg:pt-[20px] lg:pb-[28px] xl:px-[40px] xl:py-[30px]'
							>
								<p className='font-inter font-normal text-[14px] lg:text-[21px] text-white'>
									Выплата за захват техники
								</p>
								<p className='font-inter font-semibold lg:text-[24px] xl:text-[30px] text-contrast'>
									1 000 000 руб.
								</p>
								<p className='font-golos font-medium text-[14px] text-[#797c85]'>
									по установленным нормативам Министерства Обороны
								</p>
							</div>
						</li>
					</ul>
				</div>

				<div className='w-full flex justify-center items-center max-w-[405px] max-[766px]:max-w-none max-[425px]:h-auto md:max-w-none'>
					<h3 className='w-full max-w-[365px] px-5 max-[766px]:max-w-none font-inter font-semibold text-[18px] md:text-[22px] lg:text-[24px] xl:text-[30px] text-contrast md:max-w-none'>
						Все выплаты - официальные. Помогаем разобраться в условиях и
						получить положенные суммы
					</h3>
				</div>
			</div>
		</section>
	)
}

export default Compensations
