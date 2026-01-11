import Gerb from '../../assets/images/gerb.png'
import Fullbleed from '../Fullbleed/Fullbleed'

const Requirements = () => {
	return (
		<section
			id='requirements'
			className='relative flex flex-col justify-center items-start pb-5 lg:py-[30px] xl:py-[40px] pt-5 scroll-mt-20 '
		>
			{/* БЕЛЫЙ ФОН НА ВСЮ ШИРИНУ ЭКРАНА */}
			<Fullbleed className='bg-white' />

			<div className='flex flex-col gap-5 justify-center items-start md:items-center px-2.5 lg:px-5 md:flex-row w-full md:gap-10 '>
				{/* ЛЕВАЯ КОЛОНКА */}
				<div className='flex w-full md:h-[580px] flex-col justify-start gap-5 md:justify-between  md:max-w-[350px] lg:max-w-[400px] xl:max-w-[580px] '>
					<h2 className='w-full font-golos text-contrast font-semibold text-[20px] md:text-[24px]  lg:text-[30px] xl:text-[40px] xl:max-w-[508px]'>
						Требования и условия для службы по контракту
					</h2>

					<p className='w-full font-golos font-normal text-[14px] md:text-[16px] lg:text-[21px] xl:max-w-[508px]'>
						Мы заранее проверим вашу годность, условия ВВК и подскажем, какие
						документы нужны для допуска к контракту. Консультация бесплатная
					</p>

					<div className='w-full  flex flex-col gap-5 md:items-end'>
						<div className='flex w-full flex-row  lg:min-h-[133px] justify-between items-start  xl:justify-end bg-[#ebebeb] rounded-t-[10px] rounded-bl-[10px] xl:max-w-[470px] xl:min-h-[115px]'>
							<div className='flex w-full  flex-col py-2.5 pl-[15px] mb-2.5 pr-2.5 gap-2.5'>
								<p className='font-golos font-semibold text-[22px]'>Артем</p>
								<p className='font-golos font-normal text-[16px]'>
									Оставьте заявку для консультации о вашей годности к
									контрактной службе
								</p>
							</div>

							<div
								className='w-[95px] h-[95px] mt-2.5 mr-2.5 bg-white rounded-[10px] flex items-center justify-center shrink-0'
								aria-label='Герб'
							>
								<img src={Gerb} alt='Герб' />
							</div>
						</div>

						<button className='w-full md:max-w-[350px] xl:max-w-[310px] h-[62px] flex items-center justify-center px-7.5 bg-contrast text-white shadow-btn rounded-[15px] font-inter font-semibold text-[18px] cursor-pointer xl:ml-auto'>
							Задать вопрос
						</button>
					</div>
				</div>

				{/* ПРАВАЯ КОЛОНКА */}

				<div className='flex flex-col gap-7.5 md:justify-between h-full md:h-[570px] xl:max-h-[580px] '>
					{/* 01 */}
					<div className='flex items-start gap-4'>
						<div className='w-[44px] h-[44px] rounded-full bg-[#6f7176] flex items-center justify-center shrink-0'>
							<span className='font-inter font-semibold text-white text-[14px]'>
								01
							</span>
						</div>
						<div className='flex w-full max-w-[320px] sm:max-w-[500px] lg:max-w-[615px] flex-col gap-2.5'>
							<p className='font-golos font-semibold text-[20px] text-contrast'>
								Возраст
							</p>
							<p className='font-golos font-medium text-[14px] text-[#222] leading-5'>
								От 18 до 63 лет включительно. Образование — не ниже 9 класса.
								Преимущество имеют кандидаты с опытом службы или профильной
								подготовкой
							</p>
						</div>
					</div>

					{/* 02 */}
					<div className='flex items-start gap-4'>
						<div className='w-[44px] h-[44px] rounded-full bg-[#6f7176] flex items-center justify-center shrink-0'>
							<span className='font-inter font-semibold text-white text-[14px]'>
								02
							</span>
						</div>
						<div className='flex w-full max-w-[320px] sm:max-w-[500px] md:max-w-none flex-col gap-2.5'>
							<p className='font-golos font-semibold text-[20px] text-contrast'>
								Гражданство
							</p>
							<p className='font-golos font-medium text-[14px] text-[#222] leading-5'>
								Граждане Российской Федерации, а также иностранные граждане,
								<br />
								имеющие необходимые документы
							</p>
						</div>
					</div>

					{/* 03 */}
					<div className='flex items-start gap-4'>
						<div className='w-[44px] h-[44px] rounded-full bg-[#6f7176] flex items-center justify-center shrink-0'>
							<span className='font-inter font-semibold text-white text-[14px]'>
								03
							</span>
						</div>
						<div className='flex w-full max-w-[320px] sm:max-w-[500px] md:max-w-none flex-col gap-2.5'>
							<p className='font-golos font-semibold text-[20px] text-contrast'>
								Отсутствие судимости по статьям
							</p>
							<p className='font-golos font-medium text-[14px] text-[#222] leading-5'>
								Кандидат не должен иметь непогашенной судимости по тяжким и
								<br />
								особо тяжким статьям. Проверка проводится официально по базам
								МВД
							</p>
						</div>
					</div>

					{/* 04 */}
					<div className='flex items-start gap-4'>
						<div className='w-[44px] h-[44px] rounded-full bg-[#6f7176] flex items-center justify-center shrink-0'>
							<span className='font-inter font-semibold text-white text-[14px]'>
								04
							</span>
						</div>
						<div className='flex w-full max-w-[320px] sm:max-w-[500px] md:max-w-none flex-col gap-2.5'>
							<p className='font-golos font-semibold text-[20px] text-contrast'>
								Категория здоровья
							</p>
							<p className='font-golos font-medium text-[14px] text-[#222] leading-5'>
								Категория годности A, Б или В по итогам военно-врачебной
								комиссии. Отсутствие противопоказаний, препятствующих службе
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Requirements
