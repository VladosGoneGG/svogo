import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { usePopupFlow } from '../../hooks/usePopupFlow'
import { STEPS } from './steps'
import { makeOptionsLabelMap } from './utils'
import { isValidBirthDate, isValidRuPhone } from './validators'

import { Header, LeftColumn, RightColumn } from './ui'

// добавь импорты (пути под себя)
import Modal from '../Modal/Modal'
import Popupok from '../Popupok/Popupok'

const Answers = () => {
	const [step, setStep] = useState(1)
	const [isContacts, setIsContacts] = useState(false)

	// состояние для модалки успеха
	const okPopup = usePopupFlow()

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		getValues,
		trigger,
		reset, // опционально
		formState: { errors, isSubmitting },
	} = useForm({
		mode: 'onChange',
		reValidateMode: 'onChange',
		defaultValues: {
			military: '',
			birthDate: '',
			health: '',
			spec: '',
			interest: '',
			priority: '',
			fio: '',
			phone: '',
			agree: false,
		},
	})

	const borderProps = {
		strokeWidth: 2,
		dashArray: '2.5 2.5',
		radius: 4,
	}

	const currentStep = useMemo(() => STEPS.find(s => s.id === step), [step])

	const meta = useMemo(() => {
		if (isContacts) {
			return {
				counter: '',
				title: 'Оставьте контакты, что бы специалист связался с вами',
				artemText:
					'Спасибо! На основании ваших ответов мы подготовим для вас индивидуальные условия',
			}
		}
		return currentStep
	}, [isContacts, currentStep])

	const optionsLabelMap = useMemo(() => makeOptionsLabelMap(STEPS), [])

	// watch
	const birthDate = watch('birthDate')
	const fio = watch('fio')
	const phone = watch('phone')
	const agree = watch('agree')
	const pickedValue = watch(currentStep?.field || '')

	const canNextQuiz = useMemo(() => {
		if (!currentStep) return false

		if (currentStep.id === 2) {
			return Boolean(pickedValue) && isValidBirthDate(birthDate)
		}

		return Boolean(pickedValue)
	}, [currentStep, birthDate, pickedValue])

	const canSubmit = useMemo(() => {
		return (
			Boolean((fio || '').trim()) && isValidRuPhone(phone) && Boolean(agree)
		)
	}, [fio, phone, agree])

	const goNext = async () => {
		if (isContacts) return

		if (step < 5) {
			if (step === 2) {
				const ok = await trigger('birthDate')
				if (!ok) return
			}

			if (canNextQuiz) setStep(s => s + 1)
			return
		}

		if (canNextQuiz) setIsContacts(true)
	}

	const goBack = () => {
		if (isContacts) {
			setIsContacts(false)
			return
		}
		if (step > 1) setStep(s => s - 1)
	}

	const pickOption = id => {
		const field = currentStep.field
		setValue(field, id, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		})
	}

	const toggleAgree = async () => {
		const next = !getValues('agree')
		setValue('agree', next, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		})
		await trigger('agree')
	}

	// ✅ сабмит контактов (и всего квиза), после успеха показываем Popupok
	const onSubmit = async raw => {
		const data = {
			...raw,
			military: optionsLabelMap.military?.[raw.military] || raw.military,
			health: optionsLabelMap.health?.[raw.health] || raw.health,
			spec: optionsLabelMap.spec?.[raw.spec] || raw.spec,
			interest: optionsLabelMap.interest?.[raw.interest] || raw.interest,
			priority: optionsLabelMap.priority?.[raw.priority] || raw.priority,
		}

		try {
			// тут твоя реальная отправка
			// await api.sendQuiz(data)

			console.log('FORM DATA:', data)

			okPopup.open()
			okPopup.success()

			reset()
			setStep(1)
			setIsContacts(false)
		} catch (e) {
			console.error('Submit error:', e)
			// тут можно показать ошибку/тост
		}
	}

	const closeOk = () => setIsOkOpen(false)

	return (
		<section className='relative pb-5 pt-5 lg:py-[30px] xl:pb-[40px]'>
			<div className='absolute inset-0 left-1/2 -translate-x-1/2 w-screen bg-[#1d1e21] -z-10' />

			<div className='w-full flex flex-col gap-5 lg:gap-7.5 px-2.5 lg:px-5'>
				<Header />

				<div className='flex flex-col md:flex-row gap-5'>
					<RightColumn
						artemText={meta.artemText}
						step={step}
						isContacts={isContacts}
						canNextQuiz={canNextQuiz}
						canSubmit={canSubmit}
						isSubmitting={isSubmitting}
						onBack={goBack}
						onNext={goNext}
					/>

					<LeftColumn
						borderProps={borderProps}
						meta={meta}
						isContacts={isContacts}
						currentStep={currentStep}
						pickedValue={pickedValue}
						onPick={pickOption}
						register={register}
						errors={errors}
						agree={agree}
						onToggleAgree={toggleAgree}
						onContactsSubmit={handleSubmit(onSubmit)}
						birthDateValidate={isValidBirthDate}
						phoneValidate={isValidRuPhone}
					/>
				</div>
			</div>

			<Modal isOpen={okPopup.isOpen} onClose={okPopup.close}>
				<Popupok onClose={okPopup.close} />
			</Modal>
		</section>
	)
}

export default Answers
