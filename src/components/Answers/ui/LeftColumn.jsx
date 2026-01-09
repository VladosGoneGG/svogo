import { AnimatePresence, motion } from 'framer-motion'
import DashedBorder from '../../DashedBorder/DashedBorder'
import ContactsForm from './ContactsForm'
import LeftHeader from './LeftHeader'
import QuizContent from './QuizContent'

const EASE = [0.42, 0, 0.58, 1]
const DURATION = 0.3

const fadeSwap = {
	initial: { opacity: 0, y: 6 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -6 },
}

const LeftColumn = ({
	meta,
	isContacts,
	currentStep,
	pickedValue,
	onPick,
	register,
	errors,
	agree,
	onToggleAgree,
	onContactsSubmit,
	birthDateValidate,
	phoneValidate,
}) => {
	const headerKey = `${isContacts ? 'contacts' : 'step'}-${
		currentStep?.id || 0
	}`

	return (
		<div className='order-2 md:order-1 relative flex flex-col w-full  md:min-w-[414px]'>
			<div className='absolute -inset-[0px] pointer-events-none'>
				<DashedBorder strokeWidth={2} dashArray='10 10' radius={20} />
			</div>

			{/* Header можно анимировать сменой */}
			<AnimatePresence mode='wait'>
				<motion.div
					key={headerKey}
					variants={fadeSwap}
					initial='initial'
					animate='animate'
					exit='exit'
					transition={{ duration: DURATION, ease: EASE }}
				>
					<LeftHeader counter={meta.counter} title={meta.title} />
				</motion.div>
			</AnimatePresence>

			{/* ✅ Один постоянный контейнер: именно он держит плавную высоту */}
			<motion.div
				layout
				transition={{ duration: DURATION, ease: EASE }}
				className='relative'
			>
				{/* ✅ Контент меняем без mode="wait", чтобы не было "пустого" состояния */}
				<AnimatePresence mode='popLayout' initial={false}>
					{isContacts ? (
						<motion.div
							key='contacts'
							layout
							variants={fadeSwap}
							initial='initial'
							animate='animate'
							exit='exit'
							transition={{ duration: DURATION, ease: EASE }}
						>
							<ContactsForm
								register={register}
								errors={errors}
								agree={agree}
								onToggleAgree={onToggleAgree}
								onSubmit={onContactsSubmit}
								phoneValidate={phoneValidate}
							/>
						</motion.div>
					) : (
						<motion.div
							/* ✅ ВАЖНО: НЕ key-им по step! */
							key='quiz'
							layout
							variants={fadeSwap}
							initial='initial'
							animate='animate'
							exit='exit'
							transition={{ duration: DURATION, ease: EASE }}
						>
							<QuizContent
								currentStep={currentStep}
								pickedValue={pickedValue}
								onPick={onPick}
								register={register}
								errors={errors}
								birthDateValidate={birthDateValidate}
								birthDatePlacement={
									currentStep?.id === 2
										? 'top'
										: currentStep?.id === 3
										? 'bottom'
										: 'none'
								}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	)
}

export default LeftColumn
