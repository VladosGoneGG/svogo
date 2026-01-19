import Dronm from '../../assets/images/dronm.webp'
import Drons from '../../assets/images/drons.webp'

const DEFAULTS = {
	title: 'Лучшие возможности по выбору части',
	text: 'Мы помогаем кандидатам выбрать подходящую воинскую часть и специальность с учетом навыков, опыта и желаемых условий службы',
}

const Possibilities = ({ title, text }) => {
	const finalTitle = title ?? DEFAULTS.title
	const finalText = text ?? DEFAULTS.text

	return (
		<section className='relative pb-5 lg:py-[30px] xl:py-[40px] py-5'>
			{/* ФОН */}
			<div className='absolute inset-0 left-1/2 -translate-x-1/2 w-screen  -z-10' />

			<div className='w-full px-2.5 min-[1199px]:px-[20px]'>
				{/* ВЕРХ: текст + картинка */}
				<div
					className='
						flex flex-col md:flex-row
						gap-5 md:gap-5
						items-start md:items-stretch
					'
				>
					{/* ЛЕВО: текст */}
					<div className='flex-1 min-w-0 font-golos'>
						<h2
							className='
								w-full font-golos font-semibold
								text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px]
								text-contrast
							'
						>
							{finalTitle}
						</h2>

						<div className='mt-5 max-w-[560px]'>
							<p className='font-golos font-normal text-[16px] lg:text-[21px] '>
								{finalText}
							</p>

							<p className='mt-2.5 text-[16px] lg:text-[21px] text-contrast font-semibold'>
								Наша задача — обеспечить вам прозрачность, актуальную информацию
								и профессиональное сопровождение на всех этапах
							</p>

							<ul className='mt-2.5 flex flex-col gap-2.5 text-[14px]'>
								<li className='relative flex gap-2'>
									<span className='absolute mt-[7px] h-[5px] w-[5px] rounded-full bg-black shrink-0 top-[4px] left-[10px]' />
									<div>
										<p className='font-golos pl-6 text-[16px] lg:text-[21px] font-semibold text-black'>
											Подбор оптимального варианта
										</p>
										<p className='font-inter font-normal text-[14px] lg:text-[21px] text-[#797c85]'>
											Расскажем, где предусмотрены более высокие выплаты, какие
											части принимают быстрее и какие требования предъявляются к
											кандидатам
										</p>
									</div>
								</li>

								<li className='relative flex gap-2'>
									<span className='absolute mt-[7px] h-[5px] w-[5px] rounded-full bg-black shrink-0 top-[4px] left-[10px]' />
									<div>
										<p className='font-golos pl-6 text-[16px] lg:text-[21px] font-semibold text-black'>
											Профессиональное сопровождение
										</p>
										<p className='font-inter font-normal text-[14px] lg:text-[21px] text-[#797c85]'>
											Кураторы с опытом работы в подборе контрактников объяснят
											условия службы, подготовят документы и помогут пройти
											оформление
										</p>
									</div>
								</li>

								<li className='relative flex gap-2'>
									<span className='absolute mt-[7px] h-[5px] w-[5px] rounded-full bg-black shrink-0 top-[4px] left-[10px]' />
									<div>
										<p className='font-golos pl-6 text-[16px] lg:text-[21px] font-semibold text-black'>
											Организация выезда и прибытия
										</p>
										<p className='font-inter font-normal text-[14px] lg:text-[21px] text-[#797c85]'>
											Мы подскажем по билетам, маршрутам, подготовке к поездке и
											обеспечим поддержку на месте оформления
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>

					{/* ПРАВО: картинка */}
					<div className='flex-1 min-w-0 w-full md:flex md:justify-end'>
						<img
							src={Dronm}
							alt='Дрон'
							className='hidden md:block w-full h-full object-cover rounded-[30px]'
						/>
						<img
							src={Drons}
							alt='Дрон'
							className='md:hidden w-full object-cover rounded-[30px]'
						/>
					</div>
				</div>

				{/* НИЗ: статистика */}
				<div className='mt-5 lg:mt-10 bg-white rounded-[20px] p-5 shadow-item'>
					<ul
						className='
							grid grid-cols-1
							md:grid-cols-5
							gap-5
							lg:gap-13
							font-golos
						'
					>
						<li className='w-full md:max-w-[130px] lg:max-w-[190px] flex flex-col gap-2.5'>
							<p className='text-contrast font-semibold text-[20px] leading-none'>
								2022
							</p>
							<p className='text-[14px] text-black font-medium'>
								Начало работы организации
							</p>
						</li>

						<li className='w-full md:max-w-[130px] lg:max-w-[190px] flex flex-col gap-2.5'>
							<p className='text-contrast font-semibold text-[20px] leading-none'>
								11
							</p>
							<p className='text-[14px] text-black font-medium'>
								Городов, с которыми мы сотрудничаем напрямую
							</p>
						</li>

						<li className='w-full md:max-w-[130px] lg:max-w-[190px] flex flex-col gap-2.5'>
							<p className='text-contrast font-semibold text-[20px] leading-none'>
								2500+
							</p>
							<p className='text-[14px] text-black font-medium'>
								Кандидатов выбрали части с нашей помощью
							</p>
						</li>

						<li className='w-full md:max-w-[130px] lg:max-w-[190px] flex flex-col gap-2.5'>
							<p className='text-contrast font-semibold text-[20px] leading-none'>
								15+
							</p>
							<p className='text-[14px] text-black font-medium'>
								Направлений и войск, куда проходит набор
							</p>
						</li>

						<li className='w-full md:max-w-[130px] lg:max-w-[190px] flex flex-col gap-2.5'>
							<p className='text-contrast font-semibold text-[20px] leading-none'>
								99%
							</p>
							<p className='text-[14px] text-black font-medium'>
								Кандидатов рекомендуют нас после оформления
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Possibilities
