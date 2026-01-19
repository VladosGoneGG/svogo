import { motion } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'
import Telega from '../../assets/images/telegrami.png'
import Logo from '../../assets/svg/Logo.svg?react'
import { useFooterLinks } from '../../hooks/useFooterLinks'
import { useGoHome } from '../../hooks/useGoHome'
import { usePopupFlow } from '../../hooks/usePopupFlow'
import Modal from '../Modal/Modal'
import Popup from '../Popup/Popup'
import Popupok from '../Popupok/Popupok'

const Footer = () => {
	const callPopup = usePopupFlow()
	const goHome = useGoHome()
	const location = useLocation()

	const { data } = useFooterLinks()

	const specAndProf = data?.specAndProf ?? []
	const units = data?.units ?? []
	const cities = data?.cities ?? []

	// делает "нормальный" href для якорей, чтобы боты видели ссылки
	const toHashHref = hash => `/${hash}` // '#payments' -> '/#payments'

	// универсальный обработчик для пунктов меню-якорей:
	// - если секция есть на текущей странице -> скроллим тут
	// - если секции нет -> даём браузеру перейти на "/#секция"
	const onHashClick = (e, hash) => {
		const el = document.querySelector(hash)

		if (el) {
			e.preventDefault()
			el.scrollIntoView({ behavior: 'smooth', block: 'start' })
			return
		}

		// если элемента нет — НЕ preventDefault, пусть уйдёт на "/#..."
	}

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
						<Logo
							onClick={e => {
								e.preventDefault()
								goHome()
							}}
							className='cursor-pointer'
						/>

						<div className='flex items-center gap-2.5'>
							<a
								href='tel:+79998887766'
								className='font-golos font-medium text-[14px] hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
							>
								+7 (933) 438-08-10
							</a>

							<a
								href='https://t.me/+79334380810'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Telegram'
								className='flex items-center justify-center shrink-0 w-7.5 h-7.5 rounded-[10px] cursor-pointer hover:opacity-90 active:opacity-70'
							>
								<img src={Telega} alt='Телеграм' />
							</a>
						</div>

						<motion.button
							type='button'
							onClick={callPopup.open}
							className='w-full max-w-[250px] h-[49px] rounded-[10px] text-white bg-contrast/90 hover:bg-contrast active:bg-contrast/70 font-inter font-bold text-[18px] cursor-pointer shadow-btn transition-colors duration-150 ease-in-out'
							whileTap={{ scale: 0.97, y: 1 }}
							transition={{ duration: 0.15, ease: 'easeInOut' }}
						>
							Обратный звонок
						</motion.button>
					</div>

					<div className='w-full min-w-0 flex justify-start min-[426px]:justify-center'>
						<div className='grid w-full max-w-86.25 grid-cols-2 gap-6 min-[960px]:max-w-209.75 min-[960px]:flex min-[960px]:justify-evenly'>
							{/* Специализации / Профессии */}
							<div>
								<h4 className='font-inter font-semibold text-[14px] min-[569px]:text-[18px] mb-2'>
									Специализации
								</h4>

								<ul className='flex flex-col gap-1.5 font-golos font-medium text-[12px] min-[569px]:text-[14px]'>
									{specAndProf.map(item => {
										const to =
											item.type === 'profession'
												? `/profession/${item.slug}`
												: `/specialization/${item.slug}`

										return (
											<li key={`${item.type}-${item.slug}`}>
												<Link
													to={to}
													className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
												>
													{item.label}
												</Link>
											</li>
										)
									})}
								</ul>
							</div>

							{/* Войска */}
							<div>
								<h4 className='font-inter font-semibold text-[14px] min-[569px]:text-[18px] mb-2'>
									Войска
								</h4>

								<ul className='flex flex-col gap-1.5 font-golos font-medium text-[12px] min-[569px]:text-[14px]'>
									{units.map(item => (
										<li key={`unit-${item.slug}`}>
											<Link
												to={`/unit/${item.slug}`}
												className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							</div>

							<div className='col-span-2 h-px bg-white rounded min-[960px]:hidden' />

							{/* Города */}
							<div>
								<h4 className='font-inter font-semibold text-[14px] min-[569px]:text-[18px] mb-2'>
									Города
								</h4>

								<ul className='flex flex-col gap-1.5 font-golos font-medium text-[12px] min-[569px]:text-[14px]'>
									{cities.map(item => (
										<li key={`city-${item.slug}`}>
											<Link
												to={`/city/${item.slug}`}
												className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							</div>

							{/* Меню */}
							<div>
								<h4 className='font-inter font-semibold text-[14px] min-[569px]:text-[18px] mb-2'>
									Меню
								</h4>

								<ul className='flex flex-col gap-1.5 font-golos font-medium text-[12px] min-[569px]:text-[14px] '>
									<li>
										<a
											href='/'
											className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
											onClick={e => {
												e.preventDefault()
												goHome()
											}}
										>
											Главная
										</a>
									</li>

									<li>
										<a
											href={toHashHref('#payments')}
											className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
											onClick={e => onHashClick(e, '#payments')}
										>
											Выплаты
										</a>
									</li>

									<li>
										<a
											href={toHashHref('#benefits')}
											className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
											onClick={e => onHashClick(e, '#benefits')}
										>
											Льготы
										</a>
									</li>

									<li>
										<a
											href={toHashHref('#requirements')}
											className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
											onClick={e => onHashClick(e, '#requirements')}
										>
											Требования
										</a>
									</li>

									<li>
										<a
											href={toHashHref('#documents')}
											className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
											onClick={e => onHashClick(e, '#documents')}
										>
											Документы
										</a>
									</li>

									<li>
										<a
											href={toHashHref('#foreigners')}
											className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
											onClick={e => onHashClick(e, '#foreigners')}
										>
											Мигрантам
										</a>
									</li>

									<li>
										<Link
											to='/blog'
											className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
										>
											Блог
										</Link>
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
