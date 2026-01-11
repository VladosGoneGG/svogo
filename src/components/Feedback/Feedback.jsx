import Fours from '../../assets/svg/4star.svg?react'
import Fives from '../../assets/svg/5star.svg?react'
import Fullbleed from '../Fullbleed/Fullbleed'

const Feedback = () => {
	return (
		<section className='relative py-5 lg:py-[30px] xl:py-[40px]'>
			{/* ФОН */}
			<Fullbleed className='bg-white' />

			{/* КОНТЕНТ */}
			<div className='relative z-10 flex flex-col items-center gap-5 md:gap-7.5 w-full px-2.5 min-[1199px]:px-[20px]'>
				<h2
					className='
						w-full text-contrast font-inter font-semibold
						text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px]
						px-5
					'
				>
					Отзывы людей, которым мы помогли
				</h2>

				<ul className='grid grid-cols-1 md:grid-cols-2 gap-2.5 w-full font-golos'>
					<li className='flex flex-col py-5 px-7.5 gap-2.5 bg-[#ebebeb] rounded-[20px]'>
						<p className='font-semibold text-[20px]'>Семен Тимофеев</p>
						<p className='text-[14px] font-medium'>
							Обращался за помощью в подборе части по своей специальности.
							Получил консультацию, объяснили все условия и помогли пройти
							оформление. В итоге служу в артиллерии — всё прошло организованно
							и без лишних вопросов
						</p>
						<Fives />
					</li>

					<li className='flex flex-col py-5 px-7.5 gap-2.5 bg-[#ebebeb] rounded-[20px]'>
						<p className='font-semibold text-[20px]'>Евгений Павлов</p>
						<p className='text-[14px] font-medium'>
							Нужна была консультация по документам и порядку оформления.
							Разъяснили нюансы, помогли подготовиться и пройти все этапы.
							Сейчас служу по контракту, доволен сопровождением
						</p>
						<Fours />
					</li>
					<li className='flex flex-col py-5 px-7.5 gap-2.5 bg-[#ebebeb] rounded-[20px]'>
						<p className='font-semibold text-[20px]'>Марат Власов</p>
						<p className='text-[14px] font-medium'>
							Хотел попасть в морскую пехоту, но сомневался, что подойду по
							требованиям. Кураторы всё проверили заранее, подсказали по
							подготовке и помогли оформить контракт. Спасибо за поддержку
						</p>
						<Fives />
					</li>
					<li className='flex flex-col py-5 px-7.5 gap-2.5 bg-[#ebebeb] rounded-[20px]'>
						<p className='font-semibold text-[20px]'>Петр Тереньтев</p>
						<p className='text-[14px] font-medium'>
							Рассматривал несколько вариантов службы. Специалисты объяснили,
							какие части подходят моему опыту и где условия лучше. Помогли
							организовать оформление и решить вопросы с документами
						</p>
						<Fives />
					</li>
					<li className='flex flex-col py-5 px-7.5 gap-2.5 bg-[#ebebeb] rounded-[20px]'>
						<p className='font-semibold text-[20px]'>Евгений Большаков</p>
						<p className='text-[14px] font-medium'>
							Не служил срочную, переживал из-за ВВК и требований. Получил
							подробную консультацию, подсказали по подготовке и сопровождали на
							всех этапах. В итоге всё прошло спокойно
						</p>
						<Fours />
					</li>
					<li className='flex flex-col py-5 px-7.5 gap-2.5 bg-[#ebebeb] rounded-[20px]'>
						<p className='font-semibold text-[20px]'>Ярослав Горшков</p>
						<p className='text-[14px] font-medium'>
							Искал надежную организацию для консультации и подбора части.
							Помогли с выбором подходящего направления и прохождением
							оформления. Профессиональный подход, всё прозрачно
						</p>
						<Fives />
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Feedback
