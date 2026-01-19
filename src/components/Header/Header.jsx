import { motion } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../assets/svg/Logo.svg?react'
import Tg from '../../assets/svg/telegram.svg?react'
import { usePopupFlow } from '../../hooks/usePopupFlow'
import Burger from '../Burger/Burger'
import Modal from '../Modal/Modal'
import Popup from '../Popup/Popup'
import Popupok from '../Popupok/Popupok'

const Header = () => {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false)

	const location = useLocation()
	const navigate = useNavigate()

	const toHashHref = hash => hash

	const handleNavClick = useCallback(
		hash => {
			const el = document.querySelector(hash)

			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' })
				setIsBurgerOpen(false)
				return true
			}

			navigate(`/${hash}`)
			setIsBurgerOpen(false)
			return false
		},
		[navigate],
	)
	const callPopup = usePopupFlow()

	useEffect(() => {
		if (!isBurgerOpen) return
		const onKeyDown = e => {
			if (e.key === 'Escape') setIsBurgerOpen(false)
		}
		window.addEventListener('keydown', onKeyDown)
		return () => window.removeEventListener('keydown', onKeyDown)
	}, [isBurgerOpen])

	useEffect(() => {
		document.body.style.overflow = isBurgerOpen ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [isBurgerOpen])

	return (
		<header
			className='
        sticky top-0 z-40
        min-[960px]:static
        bg-[#eee]
        max-w-106.25 h-[76px] min-[426px]:max-w-239.75 min-[960px]:max-w-300
      '
		>
			<div className=' flex items-center justify-between px-2.5 py-[5px] lg:px-5 lg:py-[10px]'>
				<Link to='/' aria-label='На главную'>
					<Logo />
				</Link>

				<ul className='hidden font-golos font-medium text-[14px] w-123.25 h-6.75 min-[960px]:flex items-center justify-between min-[1200px]:text-[16px] min-[1200px]:w-137.75 min-[1200px]:h-7.25 '>
					<li>
						<a
							href={toHashHref('#payments')}
							className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
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
							href={toHashHref('#benefits')}
							className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
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
							href={toHashHref('#requirements')}
							className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
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
							href={toHashHref('#documents')}
							className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
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
							href={toHashHref('#specializations')}
							className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
							onClick={e => {
								e.preventDefault()
								handleNavClick('#specializations')
							}}
						>
							Специализации
						</a>
					</li>

					<li>
						<Link
							to='/blog'
							className='cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
							onClick={() => setIsBurgerOpen(false)}
						>
							Блог
						</Link>
					</li>
				</ul>

				<div className='flex xl:gap-[50px] items-center'>
					<div className='hidden min-[426px]:flex items-center gap-2.5 mr-3.75 min-[960px]:mr-0 min-[1200px]:mr-3.75'>
						<a
							href='tel:+79334380810'
							className='font-golos font-medium text-[14px] cursor-pointer hover:text-contrast active:text-contrast/70 transition-colors duration-150 ease-in-out'
						>
							+7 (933) 438-08-10
						</a>
						<a
							href='https://t.me/+79334380810'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Telegram'
						>
							<Tg className='cursor-pointer hover:opacity-90 active:opacity-70' />
						</a>
					</div>

					<motion.button
						type='button'
						onClick={callPopup.open}
						className='hidden w-38.5 h-9.25 bg-contrast/90 hover:bg-contrast active:bg-contrast/70 font-inter text-[14px] font-semibold text-white shadow-btn rounded-[10px] min-[1200px]:flex items-center justify-center cursor-pointer transition-colors duration-150 ease-in-out'
						whileTap={{ scale: 0.97, y: 1 }}
						transition={{ duration: 0.15, ease: 'easeInOut' }}
					>
						Обратный звонок
					</motion.button>

					<button
						type='button'
						onClick={() => setIsBurgerOpen(true)}
						aria-label='Открыть меню'
						className='w-13.5 h-11 rounded-[10px] bg-contrast/90 hover:bg-contrast active:bg-contrast/70  flex flex-col items-center justify-center gap-1.5 cursor-pointer shadow-btn min-[960px]:hidden '
					>
						<span className='w-4.5 h-0.5 bg-white rounded-full'></span>
						<span className='w-4.5 h-0.5 bg-white rounded-full'></span>
						<span className='w-4.5 h-0.5 bg-white rounded-full'></span>
					</button>
				</div>
			</div>

			<Burger open={isBurgerOpen} onClose={() => setIsBurgerOpen(false)} />

			<Modal isOpen={callPopup.isOpen} onClose={callPopup.close}>
				{callPopup.isSuccess ? (
					<Popupok onClose={callPopup.close} />
				) : (
					<Popup onSuccess={callPopup.success} />
				)}
			</Modal>
		</header>
	)
}

export default Header
