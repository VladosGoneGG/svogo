import { AnimatePresence, motion } from 'motion/react'
import { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Telega from '../../assets/images/telegrami.png'
import Logo from '../../assets/svg/Logo.svg?react'
import { useGoHome } from '../../hooks/useGoHome'
import { usePopupFlow } from '../../hooks/usePopupFlow'
// import { useScrollNav } from '../../hooks/useScrollNav' // ❌ больше не нужен

import Modal from '../Modal/Modal'
import Popup from '../Popup/Popup'
import Popupok from '../Popupok/Popupok'

const NAV = [
	{ label: 'Выплаты', href: '#payments', type: 'hash' },
	{ label: 'Льготы', href: '#benefits', type: 'hash' },
	{ label: 'Требования', href: '#requirements', type: 'hash' },
	{ label: 'Документы', href: '#documents', type: 'hash' },
	{ label: 'Специализации', href: '#specializations', type: 'hash' },
	{ label: 'Блог', href: '/blog', type: 'route' },
]

const Burger = ({ open, onClose }) => {
	const callPopup = usePopupFlow()
	// const scrollNav = useScrollNav() // ❌ убрали
	const goHome = useGoHome()
	const navigate = useNavigate()

	const handleHashClick = useCallback(
		hash => {
			onClose?.()

			// чуть ждём анимацию закрытия, чтобы не дёргалось
			setTimeout(() => {
				const el = document.querySelector(hash)

				// ✅ если секция есть на текущей странице — скроллим тут (как в Header)
				if (el) {
					el.scrollIntoView({ behavior: 'smooth', block: 'start' })
					return
				}

				// ❗ если секции нет — идём на главную с hash
				navigate(`/${hash}`)
			}, 220)
		},
		[onClose, navigate],
	)

	const handleGoHome = useCallback(() => {
		onClose?.()
		setTimeout(() => {
			goHome()
		}, 220)
	}, [onClose, goHome])

	// открытие модалки из бургер-меню
	const handleCallClick = useCallback(() => {
		onClose?.()
		setTimeout(() => {
			callPopup.open()
		}, 220)
	}, [onClose, callPopup])

	return (
		<>
			<AnimatePresence>
				{open && (
					<motion.div
						className='fixed inset-0 z-50'
						initial='hidden'
						animate='show'
						exit='hidden'
					>
						{/* BACKDROP */}
						<motion.button
							type='button'
							aria-label='Закрыть меню'
							onClick={onClose}
							className='absolute inset-0 bg-[#ECECEC]'
							variants={{
								hidden: { opacity: 0 },
								show: { opacity: 1 },
							}}
							transition={{ duration: 0.18, ease: 'easeOut' }}
						/>

						{/* PANEL */}
						<motion.div
							className='relative w-full min-h-dvh flex flex-col px-5'
							variants={{
								hidden: { opacity: 0, y: 10 },
								show: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.22, ease: 'easeOut' }}
						>
							{/* TOP */}
							<div className='flex items-start justify-between'>
								<a
									href='/'
									onClick={e => {
										e.preventDefault()
										handleGoHome()
									}}
									aria-label='На главную'
								>
									<Logo />
								</a>

								<button
									type='button'
									onClick={onClose}
									aria-label='Закрыть меню'
									className='w-10 h-10 flex items-center justify-center cursor-pointer'
								>
									<span className='text-[34px] leading-none text-black'>×</span>
								</button>
							</div>

							{/* MIDDLE */}
							<div className='flex-1 flex flex-col gap-5'>
								<nav className='mt-5'>
									<ul
										className='flex flex-col
                      gap-2.5
                      font-golos font-medium
                      text-[14px] min-[500px]:text-[20px] min-[600px]:text-[26px]
                      text-black'
									>
										{NAV.map(item => (
											<li key={item.label}>
												{item.type === 'hash' ? (
													<a
														href={item.href} // "#payments"
														onClick={e => {
															e.preventDefault()
															handleHashClick(item.href)
														}}
														className='inline-block'
													>
														{item.label}
													</a>
												) : (
													<Link
														to={item.href}
														onClick={onClose}
														className='inline-block'
													>
														{item.label}
													</Link>
												)}
											</li>
										))}
									</ul>
								</nav>

								{/* CONTACT */}
								<div className='flex items-center gap-5'>
									<a
										href='tel:+79998887766'
										className='font-golos font-medium text-[14px] min-[500px]:text-[20px] min-[600px]:text-[26px] text-black'
									>
										+7 (999) 888-77-66
									</a>

									<a
										href='/'
										className='flex items-center justify-center shrink-0 w-7.5 h-7.5 rounded-[10px] cursor-pointer hover:opacity-90 active:opacity-70 '
										aria-label='Telegram'
									>
										<img src={Telega} alt='Телеграм' />
									</a>
								</div>

								{/* BOTTOM */}
								<div className='w-full flex flex-col items-center gap-2.5  mt-[75px]'>
									<button
										type='button'
										onClick={handleCallClick}
										className='w-full max-w-[250px] h-[49px]
                      bg-contrast/90 hover:bg-contrast active:bg-contrast/70 font-inter
                      text-[14px] min-[500px]:text-[20px] min-[500px]:max-w-[350px] min-[500px]:h-[62px]
                      font-semibold text-white
                      rounded-[10px] flex items-center justify-center cursor-pointer shadow-btn'
									>
										Обратный звонок
									</button>

									<div className=' flex flex-col items-center gap-2'>
										<a
											href='/'
											className='font-golos text-[14px] min-[500px]:text-[18px] text-black underline underline-offset-4'
										>
											Политика конфиденциальности
										</a>

										<p className='font-golos text-[14px] min-[500px]:text-[18px] text-black'>
											2022 - 2025 г.
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<Modal isOpen={callPopup.isOpen} onClose={callPopup.close}>
				{callPopup.isSuccess ? (
					<Popupok onClose={callPopup.close} />
				) : (
					<Popup onSuccess={callPopup.success} />
				)}
			</Modal>
		</>
	)
}

export default Burger
