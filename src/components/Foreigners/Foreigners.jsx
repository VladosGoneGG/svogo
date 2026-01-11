const Foreigners = () => {
	return (
		<section className='py-5 lg:py-[30px] xl:py-[40px]'>
			<div className='w-full flex flex-col gap-5 lg:gap-7.5 px-2.5 min-[1199px]:px-[20px]'>
				<h2
					className='
								w-full font-golos font-semibold
								text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px]
								text-contrast
							'
				>
					Приём иностранных граждан на службу по контракту
				</h2>
				<div className='w-full flex flex-col gap-5 font-golos'>
					<p className='text-[16px] lg:text-[21px] font-normal'>
						В Российской Федерации действует установленный порядок, позволяющий
						иностранным гражданам заключить контракт о прохождении военной
						службы. Набор ведётся в определённые воинские части, при соблюдении
						установленных требований и наличии законного статуса пребывания в РФ
					</p>

					<div>
						<p className='text-contrast text-[16px] lg:text-[21px] font-semibold'>
							Требования к иностранным гражданнам:
						</p>
						<ul className='font-golos  text-[16px]  lg:text-[21px]  font-normal pl-7 mt-2.5 list-disc'>
							<li>
								Вы гражданин одной из стран СНГ либо иного государства, законно
								находящийся на территории России
							</li>
							<li>У вас есть действующий паспорт</li>
							<li>
								У вас есть миграционная карта (исключение граждане Республики
								Беларусь)
							</li>
						</ul>
					</div>
					<div>
						<p className='text-contrast text-[16px] lg:text-[21px] font-semibold'>
							Документы, которые ускоряют оформление контракта:
						</p>
						<ul className='font-golos  text-[16px]  lg:text-[21px]  font-normal pl-7 mt-2.5 list-disc'>
							<li>Разрешение на временное проживание (РВП)</li>
							<li>Вид на жительство (ВНЖ)</li>
							<li>Наличие СНИЛС</li>
							<li>Наличие ИНН</li>
							<li>Временная регистрация по месту пребывания</li>
						</ul>
					</div>
					<div className='flex flex-col '>
						<p className='text-[16px] lg:text-[21px] text-[#797c85]'>
							Если каких-то документов нет, утеряны или требуют перевода — мы
							подскажем, что необходимо восстановить или оформить, и поможем
							пройти все этапы без задержек
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Foreigners
