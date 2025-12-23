import Logo from '../../assets/svg/Logo.svg?react'

const Footer = () => {
	return (
		<footer className='w-full mx-auto mb-10 max-w-106.25 min-[426px]:max-w-239.75 min-[960px]:max-w-300 px-2.5 min-[960px]:px-5 flex flex-col gap-5'>
			<div className='flex flex-col items-center gap-6 min-[426px]:flex-row min-[426px]:items-start min-[426px]:justify-between'>
				<div className='flex flex-col items-center gap-2.5 w-full min-[426px]:max-w-75 min-w-0 min-[426px]:items-start'>
					<Logo />
					<button className='w-full h-15.5 rounded-[15px] text-white bg-[#D14E15] font-inter font-bold text-[18px] cursor-pointer shadow-btn'>
						Обратный звонок
					</button>
				</div>

				<div className='w-full min-w-0 flex justify-center min-[426px]:justify-center'>
					<div className='grid w-full max-w-86.25 grid-cols-2 min-[960px]:max-w-209.75 min-[960px]:flex justify-evenly gap-6'>
						<div>
							<h4 className='font-inter font-semibold text-[18px] text-black mb-2'>
								Специализации
							</h4>
							<ul className='flex flex-col gap-1.5 font-golos font-medium text-[14px]'>
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
							<h4 className='font-inter font-semibold text-[18px] text-black mb-2'>
								Войска
							</h4>
							<ul className='flex flex-col gap-1.5 font-golos font-medium text-[14px]'>
								<li>Африканский корпус</li>
								<li>ВДВ</li>
								<li>Морская пехота</li>
								<li>Мотострелковый полк</li>
								<li>Ракетные войска</li>
							</ul>
						</div>

						<div>
							<h4 className='font-inter font-semibold text-[18px] text-black mb-2'>
								Города
							</h4>
							<ul className='flex flex-col gap-1.5 font-golos font-medium text-[14px]'>
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
							<h4 className='font-inter font-semibold text-[18px] text-black mb-2'>
								Меню
							</h4>
							<ul className='flex flex-col gap-1.5 font-golos font-medium text-[14px]'>
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
		</footer>
	)
}

export default Footer
