import { AnimatePresence, motion } from 'motion/react'
import Telega from '../../assets/images/telegrami.png'
import Logo from '../../assets/svg/Logo.svg?react'

const NAV = [
	{ label: 'Выплаты', href: '#payments' },
	{ label: 'Льготы', href: '#benefits' },
	{ label: 'Требования', href: '#requirements' },
	{ label: 'Документы', href: '#documents' },
	{ label: 'Специализации', href: '#specializations' },
	{ label: 'Блог', href: '#blog' },
]

const Burger = ({ open, onClose }) => {
	const handleNavClick = href => {
		onClose?.()
		// optional scroll:
		// const el = document.querySelector(href)
		// if (el) el.scrollIntoView({ behavior: 'smooth' })
	}

	return (
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

					{/* PANEL (вся высота, без пустот снизу) */}
					<motion.div
						className='relative w-full min-h-dvh flex flex-col
						px-5'
						variants={{
							hidden: { opacity: 0, y: 10 },
							show: { opacity: 1, y: 0 },
						}}
						transition={{ duration: 0.22, ease: 'easeOut' }}
					>
						{/* TOP */}
						<div className='flex items-start justify-between'>
							<a href='/' onClick={onClose} aria-label='На главную'>
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

						{/* MIDDLE (занимает остаток высоты) */}
						<div className='flex-1 flex flex-col gap-5'>
							{/* NAV */}
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
											<a
												href={item.href}
												onClick={() => handleNavClick(item.href)}
												className='inline-block'
											>
												{item.label}
											</a>
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
									className='flex items-center justify-center shrink-0 w-7.5 h-7.5 rounded-[10px] '
									aria-label='Telegram'
								>
									<img src={Telega} alt='Телеграм' />
								</a>
							</div>

							{/* BOTTOM (прилип к низу) */}
							<div className='w-full flex flex-col items-center gap-2.5  mt-[75px]'>
								<button
									type='button'
									className='w-full max-w-[250px] h-[49px]
		bg-contrast font-inter
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
	)
}

export default Burger
