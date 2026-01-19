const DEFAULTS = {
	title:
		'Контрактная служба СВО по специальностям — возможность выбрать направление и получить обучение',
	subtitle:
		'Контрактная служба позволяет добровольцам поступить в выбранные подразделения и работать по специальности.',
	text: 'Кандидату предоставляется обучение, экипировка, денежное довольствие и возможность служить в тех войсках, где его навыки наиболее востребованы: РЭБ, артиллерия, ВДВ, Африканский корпус, ракетные войска, морская пехота, мотострелковые части, водители категорий C/D/E, операторы БПЛА и другие направления',
}

const Specialties = ({ title, subtitle, text }) => {
	const finalTitle = title ?? DEFAULTS.title
	const finalSubtitle = subtitle ?? DEFAULTS.subtitle
	const finalText = text ?? DEFAULTS.text

	return (
		<section className='py-5 lg:py-[30px] xl:py-[40px]  '>
			<div className='w-full flex flex-col gap-5 px-2.5 min-[1199px]:px-[20px]'>
				<h2
					className='
								w-full font-golos font-semibold
								text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px]
								text-contrast
							'
				>
					{finalTitle}
				</h2>

				<div className='w-full flex flex-col gap-5 font-golos'>
					<p className='text-[16px] lg:text-[21px] font-normal'>
						{finalSubtitle}
					</p>

					<p className='text-[16px] lg:text-[21px] font-normal text-[#797c85]'>
						{finalText}
					</p>

					<div>
						<p className='text-[16px] lg:text-[21px] font-semibold'>
							Кого приглашают на службу:
						</p>
						<ul className='font-golos text-[16px]  lg:text-[21px] text-[#797c85] font-normal pl-7 mt-2.5 list-disc'>
							<li>Набор ведётся для граждан из всех регионов России</li>
							<li>
								Кандидатам доступны направления как с опытом службы, так и с
								нулевой подготовкой — предусмотрено обучение под руководством
								опытных инструкторов
							</li>
						</ul>
					</div>

					<div>
						<p className='text-[16px] lg:text-[21px] font-semibold'>
							Что получает контрактник:
						</p>
						<ul className='font-golos text-[16px] lg:text-[21px] text-[#797c85] font-normal pl-7 mt-2.5 list-disc'>
							<li>Полный комплект современной экипировки и снаряжения</li>
							<li>Обучение от инструкторов, имеющих боевой опыт</li>
							<li>
								Денежное довольствие от 210 000 ₽ + дополнительные выплаты
							</li>
							<li>
								Возможность поступить в конкретное подразделение при
								соответствии требованиям
							</li>
							<li>Официальное оформление, сопровождение, поддержка</li>
						</ul>
					</div>

					<div className='flex flex-col gap-2.5'>
						<p className='text-[16px] lg:text-[21px] font-semibold'>
							Выплаты и поддержка
						</p>
						<p className='text-[16px] lg:text-[21px] text-contrast'>
							По региональным и федеральным программам предусмотрены
							единовременные выплаты, ежемесячное довольствие, компенсации, а
							также социальная и медицинская поддержка
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Specialties
