import { usePopupFlow } from '../../hooks/usePopupFlow'

import { useCallback } from 'react'
import Telega from '../../assets/images/telegrami.png'
import Logo from '../../assets/svg/Logo.svg?react'

import Modal from '../Modal/Modal'
import Popup from '../Popup/Popup'
import Popupok from '../Popupok/Popupok'

const Footer = () => {
	const callPopup = usePopupFlow()

	const handleNavClick = useCallback(href => {
		const el = document.querySelector(href)
		if (!el) return
		el.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}, [])

	return (
		<footer className='relative w-full'>
			<div className='absolute inset-0 left-1/2 -translate-x-1/2 w-screen bg-[#1d1e21] -z-10' />

			<div
				className='
          w-full mx-auto
          max-w-106.25 min-[426px]:max-w-239.75 min-[960px]:max-w-300
          px-2.5 pt-2.5 pb-5
          lg:pt-7.5 lg:pb-10 xl:pb-12.5
          min-[960px]:px-5
          flex flex-col gap-5
          text-white
        '
			>
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
								className='flex items-center justify-center shrink-0 w-7.5 h-7.5 rounded-[10px] cursor-pointer hover:opacity-90 active:opacity-70'
							>
								<img src={Telega} alt='Телеграм' />
							</a>
						</div>

						<button
							type='button'
							onClick={callPopup.open}
							className='w-full max-w-[250px] h-[49px] rounded-[10px] text-white bg-contrast/90 hover:bg-contrast active:bg-contrast/70 font-inter font-bold text-[18px] cursor-pointer shadow-btn'
						>
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
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Оператор БПЛА
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										РЭБ
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Водитель
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Артиллерия
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Штурмовик
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Врач
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Повар
									</li>
								</ul>
							</div>

							<div>
								<h4 className='font-inter font-semibold text-[14px] min-[569px]:text-[18px] mb-2'>
									Войска
								</h4>
								<ul className='flex flex-col gap-1.5 font-golos font-medium text-[12px] min-[569px]:text-[14px]'>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Африканский корпус
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										ВДВ
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Морская пехота
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Мотострелковый полк
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Ракетные войска
									</li>
								</ul>
							</div>

							<div className='col-span-2 h-px bg-white rounded min-[960px]:hidden' />

							<div>
								<h4 className='font-inter font-semibold text-[14px] min-[569px]:text-[18px] mb-2'>
									Города
								</h4>
								<ul className='flex flex-col gap-1.5 font-golos font-medium text-[12px] min-[569px]:text-[14px]'>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Москва
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Санкт-Петербург
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Казань
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Самара
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Нижний Новгород
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Ульяновск
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Уфа
									</li>
								</ul>
							</div>

							<div>
								<h4 className='font-inter font-semibold text-[14px] min-[569px]:text-[18px] mb-2'>
									Меню
								</h4>
								<ul className='flex flex-col gap-1.5 font-golos font-medium text-[12px] min-[569px]:text-[14px] '>
									<li>
										<a
											href='/'
											className='cursor-pointer hover:text-contrast active:text-contrast/70'
										>
											Главная
										</a>
									</li>
									<li>
										<a
											className='cursor-pointer hover:text-contrast active:text-contrast/70'
											onClick={e => {
												e.preventDefault()
												handleNavClick('#payments')
											}}
										>
											Выплаты
										</a>
									</li>
									<li>
										<a
											className='cursor-pointer hover:text-contrast active:text-contrast/70'
											onClick={e => {
												e.preventDefault()
												handleNavClick('#benefits')
											}}
										>
											Льготы
										</a>
									</li>
									<li>
										<a
											className='cursor-pointer hover:text-contrast active:text-contrast/70'
											onClick={e => {
												e.preventDefault()
												handleNavClick('#requirements')
											}}
										>
											Требования
										</a>
									</li>
									<li>
										<a
											className='cursor-pointer hover:text-contrast active:text-contrast/70'
											onClick={e => {
												e.preventDefault()
												handleNavClick('#documents')
											}}
										>
											Документы
										</a>
									</li>
									<li>
										<a
											className='cursor-pointer hover:text-contrast active:text-contrast/70'
											onClick={e => {
												e.preventDefault()
												handleNavClick('#foreigners')
											}}
										>
											Мигрантам
										</a>
									</li>
									<li className='cursor-pointer hover:text-contrast active:text-contrast/70'>
										Сотрудничество
									</li>
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

			<Modal isOpen={callPopup.isOpen} onClose={callPopup.close}>
				{callPopup.isSuccess ? (
					<Popupok onClose={callPopup.close} />
				) : (
					<Popup onSuccess={callPopup.success} />
				)}
			</Modal>
		</footer>
	)
}

export default Footer
