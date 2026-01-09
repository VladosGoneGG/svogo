import Telega from '../../assets/images/telegrami.png'
import Logo from '../../assets/svg/Logo.svg?react'

const Footer = () => {
	return (
		<footer className='relative w-full'>
			<div className='absolute inset-0 left-1/2 -translate-x-1/2 w-screen bg-[#1d1e21] -z-10' />

			<div className='w-full mx-auto max-w-106.25 min-[426px]:max-w-239.75 min-[960px]:max-w-300 px-2.5 pt-2.5 min-[960px]:px-5 flex flex-col gap-5 text-white'>
				<div className='flex flex-col pl-10 items-center gap-5 min-[426px]:flex-row min-[426px]:items-start min-[426px]:justify-between'>
					<div className='flex flex-col items-start gap-2.5 w-full min-[426px]:max-w-75 min-[1200px]:gap-5'>
						<Logo />

						<div className='flex items-center gap-2.5'>
							<a
								href='tel:+79998887766'
								className='font-golos font-medium text-[14px]'
							>
								+7(999)8887766
							</a>

							<a
								href='/'
								className='flex items-center justify-center shrink-0 w-7.5 h-7.5 rounded-[10px]'
							>
								<img src={Telega} alt='Телеграм' />
							</a>
						</div>

						<button className='w-full max-w-[250px] h-15.5 rounded-[15px] text-white bg-[#D14E15] font-inter font-bold text-[18px] cursor-pointer shadow-btn'>
							Обратный звонок
						</button>
					</div>

					<div className='w-full min-w-0 flex justify-start min-[426px]:justify-center'>
						<div className='grid w-full max-w-86.25 grid-cols-2 gap-6 min-[960px]:max-w-209.75 min-[960px]:flex min-[960px]:justify-evenly'>
							<div>
								<h4 className='font-inter font-semibold text-[14px] min-[569px]:text-[18px] mb-2'>
									Специализации
								</h4>
								<ul className='flex flex-col gap-1.5 font-golos font-medium text-[12px] min-[569px]:text-[14px]'>
									<li>Оператор БПЛА</li>
									<li>РЭБ</li>
									<li>Водитель</li>
									<li>Артиллерия</li>
									<li>Штурмовик</li>
									<li>Врач</li>
									<li>Повар</li>
								</ul>
							</div>

							<div>
								<h4 className='font-inter font-semibold text-[14px] min-[569px]:text-[18px] mb-2'>
									Войска
								</h4>
								<ul className='flex flex-col gap-1.5 font-golos font-medium text-[12px] min-[569px]:text-[14px]'>
									<li>Африканский корпус</li>
									<li>ВДВ</li>
									<li>Морская пехота</li>
									<li>Мотострелковый полк</li>
									<li>Ракетные войска</li>
								</ul>
							</div>

							{/* ЛИНИЯ — ТОЛЬКО КОГДА GRID (КОЛОНКИ) */}
							<div className='col-span-2 h-px bg-white rounded min-[960px]:hidden' />

							<div>
								<h4 className='font-inter font-semibold text-[14px] min-[569px]:text-[18px] mb-2'>
									Города
								</h4>
								<ul className='flex flex-col gap-1.5 font-golos font-medium text-[12px] min-[569px]:text-[14px]'>
									<li>Москва</li>
									<li>Санкт-Петербург</li>
									<li>Казань</li>
									<li>Самара</li>
									<li>Нижний Новгород</li>
									<li>Ульяновск</li>
									<li>Уфа</li>
								</ul>
							</div>

							<div>
								<h4 className='font-inter font-semibold text-[14px] min-[569px]:text-[18px] mb-2'>
									Меню
								</h4>
								<ul className='flex flex-col gap-1.5 font-golos font-medium text-[12px] min-[569px]:text-[14px]'>
									<li>Главная</li>
									<li>Выплаты</li>
									<li>Льготы</li>
									<li>Требования</li>
									<li>Документы</li>
									<li>Мигрантам</li>
									<li>Сотрудничество</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className='w-full flex justify-center'>
					<div className='w-54.5 font-inter font-normal text-[14px] text-center'>
						<p className='underline underline-offset-3 cursor-pointer'>
							Политика конфиденциальности
						</p>
						<p>2022 – 2025 г.</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
