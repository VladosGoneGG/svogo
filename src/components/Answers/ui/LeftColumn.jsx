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

	// отдельный ключ только для "ветки", чтобы не было пустого состояния, но framer понимал смену высоты
	const bodyKey = isContacts ? 'contacts' : `step-${currentStep?.id || 0}`

	return (
		<div className='order-2 md:order-1 relative flex flex-col w-full  md:min-w-[414px]'>
			<div className='absolute -inset-[0px] pointer-events-none'>
				<DashedBorder strokeWidth={2} dashArray='10 10' radius={20} />
			</div>

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

			{/* ✅ Этот контейнер всегда один: он анимирует ТОЛЬКО размер (высоту/ширину) */}
			<motion.div
				layout='size'
				transition={{ duration: DURATION, ease: EASE }}
				className='relative overflow-hidden'
			>
				{/* ✅ Внутри меняем ветки/шаги. popLayout помогает без "пустоты" */}
				<AnimatePresence mode='popLayout' initial={false}>
					<motion.div
						key={bodyKey}
						layout='position'
						variants={fadeSwap}
						initial='initial'
						animate='animate'
						exit='exit'
						transition={{ duration: DURATION, ease: EASE }}
					>
						{isContacts ? (
							<ContactsForm
								register={register}
								errors={errors}
								agree={agree}
								onToggleAgree={onToggleAgree}
								onSubmit={onContactsSubmit}
								phoneValidate={phoneValidate}
							/>
						) : (
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
						)}
					</motion.div>
				</AnimatePresence>
			</motion.div>
		</div>
	)
}

export default LeftColumn
