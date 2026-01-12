import { AnimatePresence, motion } from 'motion/react'
import { usePopupFlow } from '../../hooks/usePopupFlow'
import Heroicons from '../Heroicons/Heroicons'
import Modal from '../Modal/Modal'
import Popup from '../Popup/Popup'
import Popupok from '../Popupok/Popupok'
import stylesCss from './Hero.module.css'

const Hero = () => {
	const popup = usePopupFlow()

	return (
		<section className='mt-4 px-2.5 lg:px-5'>
			<div
				className={[
					stylesCss.heroBg,
					'relative mx-auto w-full overflow-hidden rounded-[30px]',
					'w-full  md:max-w-[1200px]',
					'min-h-[clamp(420px,55vw,620px)]',
					'flex',
					'px-[clamp(20px,3vw,44px)] py-[clamp(20px,3.2vw,48px)]',
					'text-white',
				].join(' ')}
			>
				<div className='relative z-10 flex w-full'>
					<div className='flex w-full  items-end md:items-center'>
						<div className='w-full max-w-[350px] min-[550px]:max-w-[500px] md:max-w-[550px] xl:max-w-[650px] flex flex-col '>
							<div className='font-golos pb-[15px] min-[425px]:pb-[10px] xl:pb-[25px] min-[559px]:pb-[50px] '>
								<h1 className='font-semibold  text-[20px]  md:text-[24px] lg:text-[30px] xl:text-[45px] '>
									Оформление контракта на СВО
								</h1>

								<p className='mt-[clamp(6px,1vw,10px)] font-normal text-[18px] md:text-[22px] lg:text-[26px] xl:text-[35px] '>
									официальное сопровождение и выплаты до 7 000 000 руб.
								</p>
							</div>

							<div className='flex flex-col gap-2.5 min-[375px]:gap-5 font-golos  text-[14px] md:text-[16px] min-[426px]:mb-2.5 lg:text-[21px]'>
								<p>
									Поможем пройти ВВК, подготовим документы и сопроводим до
									пункта подписания.
								</p>
								<p>
									Единовременная выплата до 3 000 000 руб. и ежемесячное
									довольствие от 210 000 руб.
								</p>
								<p>
									Работаем официально. Все условия - по приказам и
									постановлениям Минобороны РФ
								</p>
							</div>

							<button
								onClick={popup.open}
								className={[
									'w-full',
									'md:max-w-[450px]',
									'h-[37px] md:h-[62px]',
									'rounded-[10px]',
									'bg-contrast/90 shadow-btn hover:bg-contrast active:bg-contrast/70',
									'text-[14px] md:text-[18px] font-inter font-semibold',
									'cursor-pointer',
									'mt-[clamp(20px,1.2vw,14px)] min-[960px]:mt-[50px]',
									'px-4 sm:px-6 xl:mt-[20px]',
								].join(' ')}
							>
								Записаться на оформление контракта
							</button>
						</div>
					</div>
				</div>
			</div>

			<Heroicons />

			{/* Модалка */}
			<Modal isOpen={popup.isOpen} onClose={popup.close}>
				<AnimatePresence mode='wait'>
					{popup.isSuccess ? (
						<motion.div
							key='success'
							initial={{ opacity: 0, y: 10, scale: 0.99 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -8, scale: 0.99 }}
							transition={{ duration: 0.18 }}
						>
							<Popupok onClose={popup.close} />
						</motion.div>
					) : (
						<motion.div
							key='form'
							initial={{ opacity: 0, y: 10, scale: 0.99 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -8, scale: 0.99 }}
							transition={{ duration: 0.18 }}
						>
							<Popup onSuccess={popup.success} />
						</motion.div>
					)}
				</AnimatePresence>
			</Modal>
		</section>
	)
}

export default Hero
