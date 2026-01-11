import { useEffect, useState } from 'react'
import Logo from '../../assets/svg/Logo.svg?react'
import Tg from '../../assets/svg/telegram.svg?react'
import Burger from '../Burger/Burger'

// ✅ добавь импорты (пути под себя)
import { usePopupFlow } from '../../hooks/usePopupFlow'
import Modal from '../Modal/Modal'
import Popup from '../Popup/Popup'
import Popupok from '../Popupok/Popupok'

const Header = () => {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false)

	// ✅ общий флоу для callback-попапа
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
        max-w-106.25 h-19 min-[426px]:max-w-239.75 min-[960px]:max-w-300
      '
		>
			<div className=' flex items-center justify-between p-2.5 min-[960px]:p-5'>
				<a href='/'>
					<Logo />
				</a>

				<ul className='hidden font-golos font-medium text-[14px] w-123.25 h-6.75 min-[960px]:flex items-center justify-between min-[1200px]:text-[16px] min-[1200px]:w-137.75 min-[1200px]:h-7.25'>
					<li>Выплаты</li>
					<li>Льготы</li>
					<li>Требования</li>
					<li>Документы</li>
					<li>Специализации</li>
					<li>Блог</li>
				</ul>

				<div className='flex xl:gap-[50px] items-center'>
					<div className='hidden min-[426px]:flex items-center gap-2.5 mr-3.75 min-[960px]:mr-0 min-[1200px]:mr-3.75'>
						<a
							href='tel:+79998887766'
							className='font-golos font-medium text-[14px] '
						>
							+7(999)8887766
						</a>
						<a href='/'>
							<Tg />
						</a>
					</div>

					{/* ✅ НЕ ломаю стили — только onClick */}
					<button
						type='button'
						onClick={callPopup.open}
						className='hidden w-38.5 h-9.25 bg-[#D14E15] font-inter text-[14px] font-semibold text-white rounded-[10px] min-[1200px]:flex items-center justify-center cursor-pointer'
					>
						Обратный звонок
					</button>

					<button
						type='button'
						onClick={() => setIsBurgerOpen(true)}
						aria-label='Открыть меню'
						className='w-13.5 h-11 rounded-[10px] bg-[#D14E15] flex flex-col items-center justify-center gap-1.5 cursor-pointer shadow-btn min-[960px]:hidden '
					>
						<span className='w-4.5 h-0.5 bg-white rounded-full'></span>
						<span className='w-4.5 h-0.5 bg-white rounded-full'></span>
						<span className='w-4.5 h-0.5 bg-white rounded-full'></span>
					</button>
				</div>
			</div>

			<Burger open={isBurgerOpen} onClose={() => setIsBurgerOpen(false)} />

			{/* ✅ Модалка “Обратный звонок” */}
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
