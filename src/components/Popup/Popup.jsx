import { motion } from 'motion/react'
import { useController, useForm } from 'react-hook-form'

const Popup = ({ onSuccess }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm({
		defaultValues: {
			name: '',
			phone: '',
			agree: false,
		},
		mode: 'onSubmit',
	})

	const { field: agreeField } = useController({
		name: 'agree',
		control,
		rules: { required: true },
	})

	const onSubmit = data => {
		console.log('Consultation form submit:', data)

		// Тут обычно отправка на сервер.
		// После успешной отправки:
		onSuccess?.()
	}

	return (
		<div className='w-full flex flex-col justify-center items-center gap-[15px] max-w-[700px]  bg-[#F9F9F9] rounded-[30px] p-5 md:px-15 md:py-10 xl:px-20 md:gap-[25px]'>
			<div className='flex flex-col gap-5 justify-center items-center font-golos'>
				<p className=' font-semibold text-contrast text-[24px] md:text-[30px] lg:text-[40px] '>
					Заявка на консультацию
				</p>
				<p className='font-normal text-[16px] lg:text-[21px] text-center'>
					Оставьте заявку ниже и в течение 10 минут с вами свяжется наш
					специалист и ответит на все вопросы
				</p>
			</div>

			<div className='w-full  md:flex md:justify-end'>
				<form onSubmit={handleSubmit(onSubmit)} className='w-full'>
					<div className='flex flex-col justify-center gap-[15px]'>
						<input
							type='text'
							placeholder='Ваше имя'
							className='
                w-full rounded-[16px] bg-[#E6E8ED] 
                px-[15px] py-[15px] font-golos
                text-[#1d1e21]
                placeholder:text-[#9aa0ab] placeholder:text-[16px] placeholder:font-semibold
                outline-none
                ring-1 ring-transparent focus:ring-2 focus:ring-[#E05A1A]/60
              '
							{...register('name', { required: 'Введите имя' })}
						/>
						{errors.name ? (
							<p className='text-[12px] font-golos text-[#1d1e21]/70 '>
								{errors.name.message}
							</p>
						) : null}

						<input
							type='tel'
							placeholder='+7 (000) 000-00-00'
							className='
                w-full rounded-[16px]  bg-[#E6E8ED] 
                px-[15px] py-[15px] font-golos
                text-[#1d1e21]
                placeholder:text-[#9aa0ab] placeholder:text-[16px] placeholder:font-semibold
                outline-none
                ring-1 ring-transparent focus:ring-2 focus:ring-[#E05A1A]/60
              '
							{...register('phone', { required: 'Введите телефон' })}
						/>
						{errors.phone ? (
							<p className='text-[12px] font-golos text-[#1d1e21]/70 mt-2'>
								{errors.phone.message}
							</p>
						) : null}

						<button
							type='submit'
							className='
                mt-2 w-full h-[49px] rounded-[15px] cursor-pointer
                bg-contrast shadow-item text-white
                font-inter font-bold
                text-[18px]
                uppercase
                active:scale-[0.99]
              '
						>
							получить консультацию
						</button>

						<motion.div
							className='h-5  pl-[8px] inline-flex justify-center items-center gap-2.5 select-none'
							whileHover={{ y: -1 }}
							whileTap={{ scale: 0.99, y: 0 }}
							transition={{
								type: 'spring',
								stiffness: 260,
								damping: 20,
								mass: 0.6,
							}}
						>
							<button
								type='button'
								className='inline-flex items-center gap-2.5 cursor-pointer group select-none'
								onClick={e => {
									e.preventDefault()
									agreeField.onChange(!agreeField.value)
								}}
							>
								<input
									type='checkbox'
									className='peer sr-only'
									checked={!!agreeField.value}
									readOnly
									name={agreeField.name}
									ref={agreeField.ref}
								/>

								<span className='inline-flex items-center gap-2.5 peer-checked:[&_.dot]:opacity-100 group-hover:[&_.dot]:!opacity-50'>
									<span className='w-5 h-5 relative'>
										<span className='absolute inset-0 rounded-full border border-middle-grey' />
										<span className='dot absolute left-[4px] top-[4px] w-3 h-3 rounded-full bg-contrast opacity-0 transition-opacity' />
									</span>

									<span className='font-inter font-semibold text-[12px] min-[770px]:text-[14px]  text-[#1d1e21] leading-5'>
										Я принимаю
									</span>
								</span>
							</button>

							<a
								href='#'
								className='font-inter font-semibold text-[12px] text-[#1d1e21] min-[770px]:text-[14px] leading-5 underline'
							>
								Условия передачи информации
							</a>
						</motion.div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Popup
