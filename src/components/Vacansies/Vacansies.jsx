import Fullbleed from '../Fullbleed/Fullbleed'
import VacancyRow from '../VacancyRow/VacancyRow'
import Parad from './../../assets/images/garant.webp'

const VACANCIES = [
	{ title: 'Артиллерия', tags: ['Спецподготовка', 'Отношение'] },
	{ title: 'Подразделение РЭБ', tags: ['Спецподготовка', 'Отношение'] },
	{
		title: 'Африканский корпус',
		tags: ['Спецподготовка', 'Отношение', 'Возможность распределения'],
	},
	{
		title: 'ВДВ',
		tags: [
			'Спецподготовка',
			'Отношение',
			'Возможность гарантированного распределения',
		],
	},
	{
		title: 'Ракетные войска',
		tags: ['Спецподготовка', 'Отношение', 'Приоритетное поступление'],
	},
	{
		title: 'Водитель категории C, D, E',
		tags: ['Спецподготовка', 'Отношение', 'Высокий спрос'],
	},
	{
		title: 'Оператор БПЛА',
		tags: [
			'Спецподготовка',
			'Отношение',
			'Возможность гарантированного распределения',
		],
	},
	{
		title: 'Морская пехота (810 бригада)',
		tags: ['Спецподготовка', 'Отношение'],
	},
	{
		title: 'Мотострелковый полк',
		tags: [
			'Спецподготовка',
			'Отношение',
			'Возможность распределения',
			'Высокий спрос',
		],
	},
]

const Vacansies = () => {
	return (
		<section className='relative flex flex-col items-center pb-5 lg:pb-[30px] xl:pb-[40px] pt-5'>
			{/* фон на всю ширину */}
			<Fullbleed className='bg-white' />

			{/* контент */}
			<div className='flex flex-col items-center gap-5 w-full px-2.5 min-[1199px]:px-[20px]'>
				<div className='w-full '>
					<h3
						className='
							w-full text-contrast min-[766px]:max-w-none font-inter font-semibold text-[20px] md:text-[24px] px-5 lg:text-[30px] xl:text-[40px]  md:max-w-none
						'
					>
						Гарантированная помощь в поступлении в желаемые войска
					</h3>
				</div>

				<div className='w-full flex flex-col gap-2.5 md:flex-row sm:items-stretch'>
					{/* ЛЕВЫЙ */}
					<div className='flex-1 min-w-0 '>
						<div className='    sm:p-2.5'>
							<img
								src={Parad}
								alt='Парад'
								className='bg-cover bg-center bg-no-repeat'
							/>
						</div>

						<div className='flex flex-col p-5 gap-2.5 text-black'>
							<p className='font-golos text-contrast font-medium text-[18px] md:text-[22px] lg:text-[24px] xl:text-[30px]'>
								Помогаем поступить в выбранные войска по вашей специализации
							</p>

							<p className='font-golos text-gray-500 font-medium text-[14px] '>
								Мы оформляем отношение в воинскую часть и сопровождаем на всех
								этапах распределения. В ряде подразделений возможно
								гарантированное поступление при выполнении требований.
							</p>

							<p className='font-golos font-semibold text-contrast text-[16px] lg:text-[21px]'>
								Отношение — это официальный документ о готовности части принять
								кандидата.
							</p>

							<p className='font-golos font-medium text-[14px]'>
								Условия поступления:
							</p>

							<ul className='font-golos font-medium text-[14px] list-disc pl-6 flex flex-col gap-2.5'>
								<li>Подтверждённое здоровье и отсутствие противопоказаний</li>
								<li>
									Достаточный уровень физподготовки (зависит от рода войск)
								</li>
								<li>
									Опыт не обязателен — в большинстве специальностей
									предусмотрено обучение
								</li>
								<li>Готовность пройти ВВК и установленные проверки</li>
							</ul>
						</div>
					</div>

					{/* ПРАВЫЙ */}
					<div className='flex-1 min-w-0 border-x-[1px] border-solid border-[#ebebeb] rounded-[30px] bg-white p-5'>
						<p className='font-inter font-medium text-[18px] md:text-[22px] lg:text-[24px] xl:text-[30px]'>
							Активные вакансии:
						</p>

						<div className='mt-4 flex flex-col gap-2.5'>
							{VACANCIES.map(v => (
								<VacancyRow key={v.title} title={v.title} tags={v.tags} />
							))}
						</div>
					</div>
				</div>

				<button
					className='
     w-full sm:w-[350px] h-[62px]
    flex items-center justify-center
    px-7.5
    bg-contrast text-white
    shadow-btn rounded-[15px]
    font-inter font-semibold text-[18px]
    cursor-pointer
  '
				>
					Все вакансии на СВО
				</button>
			</div>
		</section>
	)
}

export default Vacansies
