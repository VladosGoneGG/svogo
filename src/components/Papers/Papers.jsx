import Bilet from '../../assets/images/bilet.webp'
import Inn from '../../assets/images/inn.webp'
import Passport from '../../assets/images/passport.webp'
import Snils from '../../assets/images/snils.webp'
import DashedBorder from '../DashedBorder/DashedBorder'
import Fullbleed from '../Fullbleed/Fullbleed'
const DEFAULT_TITLE = 'Необходимые документы для службы по контракту'
const Papers = ({ title }) => {
	const finalTitle = title ?? DEFAULT_TITLE
	return (
		<section
			id='documents'
			className='relative py-5 lg:py-[30px] xl:py-[40px] scroll-mt-20'
		>
			<Fullbleed className='bg-white' />
			{/* КОНТЕНТ */}
			<div className='flex flex-col font-golos items-start gap-5 w-full px-2.5 min-[1199px]:px-[20px]'>
				<div className='flex flex-col gap-5 px-2.5 md:px-5'>
					<h2
						className='
							w-full text-contrast font-inter font-semibold
							text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px]
							
						'
					>
						{finalTitle}
					</h2>
					<div className='flex flex-col gap-2.5 text-[16px] lg:text-[21px]'>
						<p>
							Для оформления контракта требуется подготовить стандартный
							комплект документов
						</p>
						<p>
							Если какой-то документ утерян — мы поможем восстановить или
							оформить недостающие бумаги
						</p>
					</div>
				</div>
				<div className='w-full flex flex-col gap-5 lg:gap-7.5 '>
					<ul className='w-full grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-5'>
						<li className='h-full  relative overflow-hidden rounded-[10px] bg-white'>
							{/* рамка (слоем) */}
							<DashedBorder
								radius={20}
								dashArray='10 10'
								stroke='#D14E15'
								strokeWidth={2}
							/>
							{/* контент */}
							<div className='relative z-10 flex items-start justify-between py-5 px-7.5'>
								<div className='flex flex-col gap-1.5'>
									<p className='font-semibold text-[18px] min-[811px]:text-[20px] text-black'>
										Паспорт гражданина РФ
									</p>
									<p className='text-[14px] min-[425px]:text-[16px] font-medium'>
										Оригинал + копия. Нужен для установления личности
									</p>
								</div>

								<img
									src={Passport}
									alt='Паспорт'
									className='w-[100px] h-[100px] object-contain'
								/>
							</div>
						</li>
						<li className='h-full   relative overflow-hidden rounded-[10px] bg-white'>
							{/* рамка (слоем) */}
							<DashedBorder
								radius={20}
								dashArray='10 10'
								stroke='#D14E15'
								strokeWidth={2}
							/>

							{/* контент */}
							<div className='relative z-10 flex items-start  justify-between py-5 px-7.5'>
								<div className='flex flex-col gap-1.5'>
									<p className='font-semibold text-[18px] min-[811px]:text-[20px] text-black'>
										СНИЛС
									</p>
									<p className='text-[14px] min-[425px]:text-[16px]  font-medium'>
										Копия. Используется для оформления выплат и учёта
									</p>
								</div>

								<img
									src={Snils}
									alt='Паспорт'
									className='w-[100px] h-[100px] object-contain'
								/>
							</div>
						</li>
						<li className='h-full relative overflow-hidden rounded-[10px] bg-white'>
							{/* рамка (слоем) */}
							<DashedBorder
								radius={20}
								dashArray='10 10'
								stroke='#D14E15'
								strokeWidth={2}
							/>

							{/* контент */}
							<div className='relative z-10 flex items-start  justify-between py-5 px-7.5'>
								<div className='flex flex-col gap-1.5'>
									<p className='font-semibold text-[18px] min-[811px]:text-[20px] text-black'>
										ИНН
									</p>
									<p className='text-[14px] min-[425px]:text-[16px]  font-medium'>
										Копия. Требуется для начисления денежного довольствия
									</p>
								</div>

								<img
									src={Inn}
									alt='Паспорт'
									className='w-[100px] h-[100px] object-contain'
								/>
							</div>
						</li>
						<li className='h-full   relative overflow-hidden rounded-[10px] bg-white'>
							{/* рамка (слоем) */}
							<DashedBorder
								radius={20}
								dashArray='10 10'
								stroke='#D14E15'
								strokeWidth={2}
							/>
							{/* контент */}
							<div className='relative z-10 flex items-start  justify-between py-5 px-7.5'>
								<div className='flex flex-col gap-1.5'>
									<p className='font-semibold text-[18px] min-[811px]:text-[20px] text-black'>
										Военный билет или удостоверение призывника
									</p>
									<p className='text-[14px] min-[425px]:text-[16px]  font-medium'>
										Для определения категории годности и учёта службы
									</p>
								</div>

								<img
									src={Bilet}
									alt='Паспорт'
									className='w-[100px] h-[100px] object-contain'
								/>
							</div>
						</li>
					</ul>
					<div>
						<p className='text-contrast text-[16px] lg:text-[21px] font-semibold'>
							Для иностранных граждан:
						</p>
						<ul className='font-golos flex flex-col gap-2.5  text-[16px]  lg:text-[21px]  font-normal pl-7 mt-2.5 list-disc'>
							<li>Паспорт иностранного гражданина</li>
							<li>Миграционная карта</li>
							<li>Документ о праве пребывания в РФ</li>
							<li>Перевод всех документов на русский язык</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Papers
