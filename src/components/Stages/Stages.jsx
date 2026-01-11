import StIcon1 from '../../assets/svg/st-1.svg?react'
import StIcon2 from '../../assets/svg/st-2.svg?react'
import StIcon3 from '../../assets/svg/st-3.svg?react'
import StIcon4 from '../../assets/svg/st-4.svg?react'
import StIcon5 from '../../assets/svg/st-5.svg?react'
import DashedBorder from '../DashedBorder/DashedBorder'
import Fullbleed from '../Fullbleed/Fullbleed'

const Stages = () => {
	// общий класс для пунктирных карточек (твои стили не ломаю)
	const dashedCard =
		'relative overflow-hidden flex gap-2.5 bg-white rounded-[20px] pl-7.5 p-5'

	// настройки твоего кастомного бордера (как было в figma-подобном стиле)
	const borderProps = {
		stroke: 'rgba(121,124,133,0.6)',
		strokeWidth: 2,
		dashArray: '10 10',
		radius: 20,
	}

	return (
		<section className='relative flex flex-col justify-center items-start py-5 lg:py-[30px] xl:py-[40px]  px-2.5 min-[1199px]:px-[20px]'>
			<Fullbleed className='bg-white' />

			<div className='w-full  max-w-[405px] max-[766px]:max-w-none md:max-w-none'>
				<div className='w-full max-w-[405px] max-[766px]:max-w-none md:max-w-none'>
					<h2 className='w-full text-contrast max-w-[365px] max-[766px]:max-w-none font-inter font-semibold text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px] md:max-w-none'>
						Этапы заключения контракта
					</h2>
				</div>

				<div className='w-full flex justify-center items-center mt-5 lg:mt-7.5'>
					<ul className='flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-x-5 md:gap-y-2.5 lg:grid-cols-3 font-golos xl:min-h-[491px]'>
						{/* 1 */}
						<li className={dashedCard}>
							<DashedBorder {...borderProps} />

							<div className='relative z-10 flex w-full min-[425px]:max-w-[414px] min-[525px]:max-w-[600px] flex-col gap-2.5'>
								<p className='text-[20px] text-contrast font-semibold'>
									Оставьте заявку
								</p>
								<p className='text-[14px] font-medium'>
									Оставьте заявку заранее, чтобы мы проверили вашу годность,
									подготовили необходимые документы и предоставили актуальную
									информацию о службе по контракту
								</p>
							</div>

							<div className='relative z-10 flex w-[45px] h-[90px] mt-2.5 justify-center items-center flex-col gap-5'>
								<StIcon1 className='[&_*]:!fill-[#797c85]' />
								<p className='text-[18px] text-contrast font-semibold'>01</p>
							</div>
						</li>

						{/* 2 */}
						<li className={dashedCard}>
							<DashedBorder {...borderProps} />

							<div className='relative z-10 flex w-full min-[425px]:max-w-[414px] min-[525px]:max-w-[600px] flex-col gap-2.5'>
								<p className='text-[20px] text-contrast font-semibold'>
									Консультация
								</p>
								<p className='text-[14px] font-medium'>
									Куратор ответит на ваши вопросы, разъяснит условия службы,
									выплаты, требования ВВК и поможет выбрать подходящее
									направление. С этого момента вы будете сопровождаться на
									каждом этапе оформления
								</p>
							</div>

							<div className='relative z-10 flex w-[45px] h-[90px] mt-2.5 justify-center items-center flex-col gap-5'>
								<StIcon2 className='[&_*]:!fill-[#797c85]' />
								<p className='text-[18px] text-contrast font-semibold'>02</p>
							</div>
						</li>

						{/* 3 */}
						<li className={`${dashedCard} lg:col-start-1 lg:row-start-2`}>
							<DashedBorder {...borderProps} />

							<div className='relative z-10 flex w-full min-[425px]:max-w-[414px] min-[525px]:max-w-[600px] flex-col gap-2.5'>
								<p className='text-[20px] text-contrast font-semibold'>
									Подготовка и выезд
								</p>
								<p className='text-[14px] font-medium'>
									Мы согласуем удобную дату прибытия, проконсультируем по
									билетам и маршруту, а также поможем с организационными
									вопросами для приезжих. На месте вас встретят и проведут к
									пункту оформления
								</p>
							</div>

							<div className='relative z-10 flex w-[45px] h-[90px] mt-2.5 justify-center items-center flex-col gap-5'>
								<StIcon3 className='[&_*]:!fill-[#797c85]' />
								<p className='text-[18px] text-contrast font-semibold'>03</p>
							</div>
						</li>

						{/* 4 */}
						<li className={`${dashedCard} lg:col-start-2 lg:row-start-2`}>
							<DashedBorder {...borderProps} />

							<div className='relative z-10 flex w-full min-[425px]:max-w-[414px] min-[525px]:max-w-[600px] flex-col gap-2.5'>
								<p className='text-[20px] text-contrast font-semibold'>
									Оформление и подписание контракта
								</p>
								<p className='text-[14px] font-medium'>
									В течение 1–2 дней вы пройдете оформление документов, ВВК (при
									необходимости) и подпишете контракт с Министерством обороны
									РФ. После подписания вы получаете право на все предусмотренные
									выплаты и льготы
								</p>
							</div>

							<div className='relative z-10 flex w-[45px] h-[90px] mt-2.5 justify-center items-center flex-col gap-5'>
								<StIcon4 className='[&_*]:!fill-[#797c85]' />
								<p className='text-[18px] text-contrast font-semibold'>04</p>
							</div>
						</li>

						{/* правая колонка (lg): 5 + 6 */}
						<li className='hidden lg:block lg:col-start-3 lg:row-start-1 lg:row-span-2 '>
							<div className='flex flex-col gap-2.5 h-full'>
								{/* 5 */}
								<div className={`${dashedCard} lg:min-h-[312px]`}>
									<DashedBorder {...borderProps} />

									<div className='relative z-10 flex w-full flex-col gap-2.5'>
										<p className='text-[20px] text-contrast font-semibold'>
											Начало службы
										</p>
										<p className='text-[14px] font-medium'>
											После оформления вам выдадут{' '}
											<br className='hidden xl:block' /> экипировку, проведут
											обучение и <br className='hidden xl:block' /> направят в
											выбранную часть. <br className='hidden xl:block' />{' '}
											Сопровождение сохраняется на всех{' '}
											<br className='hidden xl:block' /> этапах, включая период
											адаптации
										</p>
									</div>

									<div className='relative z-10 flex w-[45px] h-[90px] mt-2.5 justify-center items-center flex-col gap-5'>
										<StIcon5 className='[&_*]:!fill-[#797c85]' />
										<p className='text-[18px] text-contrast font-semibold'>
											05
										</p>
									</div>
								</div>

								{/* 6 */}
								<div className='flex p-2.5 md:p-5 md:pl-7.5 gap-2.5 bg-black rounded-[20px] shadow-item'>
									<div className='flex w-full flex-col gap-2.5'>
										<p className='text-[20px] text-white font-semibold'>
											Мы сопровождаем кандидата от первого обращения до начала{' '}
											<br className='hidden xl:block' />
											службы
										</p>
										<p className='text-[14px] font-medium text-white'>
											— разъясняем требования, помогаем подготовиться и
											контролируем все этапы оформления
										</p>
									</div>
								</div>
							</div>
						</li>

						{/* 5 и 6 для md / sm */}
						<li className={`${dashedCard} lg:hidden`}>
							<DashedBorder {...borderProps} />

							<div className='relative z-10 flex gap-2.5 rounded-[20px] w-full'>
								<div className='flex w-full flex-col gap-2.5'>
									<p className='text-[20px] text-contrast font-semibold'>
										Начало службы
									</p>
									<p className='text-[14px] font-medium'>
										После оформления вам выдадут экипировку, проведут обучение и
										направят в выбранную часть. Сопровождение сохраняется на
										всех этапах, включая период адаптации
									</p>
								</div>
								<div className='flex w-[45px] h-[90px] mt-2.5 justify-center items-center flex-col gap-5'>
									<StIcon5 className='[&_*]:!fill-[#797c85]' />
									<p className='text-[18px] text-contrast font-semibold'>05</p>
								</div>
							</div>
						</li>

						<li className='flex w-full  pl-7.5 p-5 gap-2.5 bg-black rounded-[20px] shadow-item lg:hidden'>
							<div className='flex gap-2.5 rounded-[20px] w-full'>
								<div className='flex w-full flex-col gap-2.5'>
									<p className='text-[20px] text-white font-semibold'>
										Мы сопровождаем кандидата от первого обращения до начала
										службы
									</p>
									<p className='text-[14px] text-white font-medium'>
										— разъясняем требования, помогаем подготовиться и
										контролируем все этапы оформления
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Stages
