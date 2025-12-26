const Benifits = () => {
	return (
		<section className='flex flex-col items-center mb-5 lg:mb-[30px] xl:mb-[40px] pt-5 '>
			<div className='flex flex-col gap-5 w-full px-2.5  min-[1199px]:px-[20px]'>
				<div className='w-full max-w-[405px] max-[766px]:max-w-none  md:max-w-none'>
					<h3 className='w-full max-w-[365px] max-[766px]:max-w-none font-inter font-semibold text-[20px] md:text-[24px] px-5 lg:text-[30px] xl:text-[40px]  md:max-w-none'>
						Льготы и гарантии участникам СВО от государства
					</h3>
				</div>
				<div className='flex w-full p-2.5 gap-2.5 justify-center items-center border-2 border-dashed border-[#797c85] rounded-[20px]'>
					<button
						className='
    flex-1 min-w-0 h-[37px] lg:h-[49px]
    flex items-center justify-center
    px-7.5
    bg-contrast text-white
    shadow-btn rounded-[10px]
    font-inter font-semibold max-[325px]:text-[12px] text-[14px] lg:text-[16px]
    cursor-pointer
  '
					>
						Военнослужащим
					</button>

					<button
						className='
    flex-1 min-w-0 h-[37px] lg:h-[49px]
    flex items-center justify-center
    px-7.5
    bg-contrast text-white
    shadow-btn rounded-[10px]
    font-inter font-semibold max-[325px]:text-[12px] text-[14px] lg:text-[16px]
    cursor-pointer
  '
					>
						Семьям
					</button>
				</div>
				<div className='w-full h-[1px] rounded-[1px] bg-[#797c85]'></div>
				<ul className='w-full flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-5 md:min-h-[737px] lg:grid-cols-3 lg:min-h-[559px]'>
					<li className='flex gap-5'>
						<div className='flex items-center justify-center   w-[45px] h-[45px]   min-w-[45px]   rounded-full   bg-[#797c85] flex-shrink-0  '>
							<span className='font-inter font-semibold text-[16px] text-white'>
								01
							</span>
						</div>
						<div className='flex flex-col gap-2.5'>
							<p className='font-golos font-semibold text-contrast text-[20px]'>
								Статус ветерана боевых действий
							</p>
							<p className='font-golos font-medium text-black text-[14px]'>
								Предоставляется после выполнения условий участия. Дает
								расширенный перечень льгот, включая надбавки к денежному
								довольствию, налоговые послабления и социальные гарантии
							</p>
						</div>
					</li>
					<li className='flex gap-5'>
						<div className='flex items-center justify-center   w-[45px] h-[45px]   min-w-[45px]   rounded-full   bg-[#797c85] flex-shrink-0  '>
							<span className='font-inter font-semibold text-[16px] text-white'>
								02
							</span>
						</div>
						<div className='flex flex-col gap-2.5'>
							<p className='font-golos font-semibold text-contrast text-[20px]'>
								Отсрочка по аренде жилья и имуществу
							</p>
							<p className='font-golos font-medium text-black text-[14px]'>
								На период службы и дополнительно 90 дней после ее завершения. В
								отдельных случаях срок отсрочки может быть продлен при
								прохождении лечения
							</p>
						</div>
					</li>
					<li className='flex gap-5'>
						<div className='flex items-center justify-center   w-[45px] h-[45px]   min-w-[45px]   rounded-full   bg-[#797c85] flex-shrink-0  '>
							<span className='font-inter font-semibold text-[16px] text-white'>
								03
							</span>
						</div>
						<div className='flex flex-col gap-2.5'>
							<p className='font-golos font-semibold text-contrast text-[20px]'>
								Оплачиваемый отпуск
							</p>
							<p className='font-golos font-medium text-black text-[14px]'>
								Двухнедельный оплачиваемый отпуск не реже одного раза в полгода,
								а также ежегодный дополнительный отпуск 15 суток
							</p>
						</div>
					</li>
					<li className='flex gap-5'>
						<div className='flex items-center justify-center   w-[45px] h-[45px]   min-w-[45px]   rounded-full   bg-[#797c85] flex-shrink-0  '>
							<span className='font-inter font-semibold text-[16px] text-white'>
								04
							</span>
						</div>
						<div className='flex flex-col gap-2.5'>
							<p className='font-golos font-semibold text-contrast text-[20px]'>
								Кредитные и налоговые каникулы
							</p>
							<p className='font-golos font-medium text-black text-[14px]'>
								Предоставляются на срок службы + 30 дней. Включают приостановку
								выплат по кредитам и льготный порядок налогообложения согласно
								федеральным мерам поддержки
							</p>
						</div>
					</li>
					<li className='flex gap-5'>
						<div className='flex items-center justify-center   w-[45px] h-[45px]   min-w-[45px]   rounded-full   bg-[#797c85] flex-shrink-0  '>
							<span className='font-inter font-semibold text-[16px] text-white'>
								05
							</span>
						</div>
						<div className='flex flex-col gap-2.5'>
							<p className='font-golos font-semibold text-contrast text-[20px]'>
								Бесплатное лечение и санаторно-курортная терапия
							</p>
							<p className='font-golos font-medium text-black text-[14px]'>
								Бесплатное обследование, лечение, реабилитация и санаторные
								программы. Для членов семьи — скидка до 50% на путевки
							</p>
						</div>
					</li>
					<li className='flex gap-5'>
						<div className='flex items-center justify-center   w-[45px] h-[45px]   min-w-[45px]   rounded-full   bg-[#797c85] flex-shrink-0  '>
							<span className='font-inter font-semibold text-[16px] text-white'>
								06
							</span>
						</div>
						<div className='flex flex-col gap-2.5'>
							<p className='font-golos font-semibold text-contrast text-[20px]'>
								Военная пенсия с повышающим коэффициентом
							</p>
							<p className='font-golos font-medium text-black text-[14px]'>
								Год службы в зоне СВО засчитывается с коэффициентом 1.5. Боевые
								выплаты и надбавки ускоряют назначение пенсии и увеличивают ее
								размер
							</p>
						</div>
					</li>
					<li className='flex gap-5'>
						<div className='flex items-center justify-center   w-[45px] h-[45px]   min-w-[45px]   rounded-full   bg-[#797c85] flex-shrink-0  '>
							<span className='font-inter font-semibold text-[16px] text-white'>
								07
							</span>
						</div>
						<div className='flex flex-col gap-2.5'>
							<p className='font-golos font-semibold text-contrast text-[20px]'>
								Страхование жизни и здоровья
							</p>
							<p className='font-golos font-medium text-black text-[14px]'>
								Государственное страхование за счет федерального бюджета,
								включая выплаты при травмах, ранениях или иных страховых случаях
							</p>
						</div>
					</li>
					<li className='flex gap-5'>
						<div className='flex items-center justify-center   w-[45px] h-[45px]   min-w-[45px]   rounded-full   bg-[#797c85] flex-shrink-0  '>
							<span className='font-inter font-semibold text-[16px] text-white'>
								08
							</span>
						</div>
						<div className='flex flex-col gap-2.5'>
							<p className='font-golos font-semibold text-contrast text-[20px]'>
								Накопительно-ипотечная система (НИС)
							</p>
							<p className='font-golos font-medium text-black text-[14px]'>
								Возможность приобрести жильё за счёт средств Минобороны через
								НИС после трёх лет службы
							</p>
						</div>
					</li>
					<li className='flex gap-5 md:col-span-2 lg:col-span-1'>
						<div className='flex items-center justify-center   w-[45px] h-[45px]   min-w-[45px]   rounded-full   bg-[#797c85] flex-shrink-0  '>
							<span className='font-inter font-semibold text-[16px] text-white'>
								09
							</span>
						</div>
						<div className='flex flex-col gap-2.5'>
							<p className='font-golos font-semibold text-contrast text-[20px]'>
								Психологическая поддержка
							</p>
							<p className='font-golos font-medium text-black text-[14px]'>
								Бесплатная квалифицированная помощь для восстановления
								эмоционального состояния во время службы и после возвращения
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Benifits
