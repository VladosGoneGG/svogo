import { motion } from 'motion/react'
import { useController, useForm } from 'react-hook-form'
import Gerbmd from '../../assets/images/gerbmd.webp'
import { usePopupFlow } from '../../hooks/usePopupFlow'
import Fullbleed from '../Fullbleed/Fullbleed'
import Modal from '../Modal/Modal'
import Popupok from '../Popupok/Popupok'

const QUESTIONS = [
	{
		n: 1,
		title: 'В какие части и специализации вы можете\nпоступить',
		sub: '— с учётом вашего опыта и состояния здоровья',
	},
	{
		n: 2,
		title: 'Какие выплаты, льготы и компенсации вам\nположены',
		sub: 'согласно законодательству',
	},
	{
		n: 3,
		title: 'Какие документы необходимо подготовить для\nподписания контракта',
		sub: '',
	},
	{
		n: 4,
		title:
			'Как проходит оформление, ВВК и сколько времени\nзанимает весь процесс',
		sub: '',
	},
]

const Consultation = () => {
	const popup = usePopupFlow()

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
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

	const onSubmit = async data => {
		try {
			console.log('Consultation form submit:', data)

			// ✅ тут твоя реальная отправка
			// await api.sendConsultation(data)

			// ✅ успех -> показываем Popupok в модалке
			popup.open()
			popup.success()

			reset()
		} catch (e) {
			console.error('Consultation submit error:', e)
		}
	}

	return (
		<section className='relative py-2.5  lg:py-[30px] xl:py-[40px]'>
			<Fullbleed className='bg-white' />

			<div className='w-full  px-2.5 min-[1199px]:px-[20px]'>
				<div className='bg-[#c3c6d0] rounded-[30px] px-4 py-5 md:px-6 md:py-6 lg:px-8 lg:py-8'>
					<h2
						className='
              text-[#E05A1A] font-golos font-semibold
              text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px]
            '
					>
						Ответим на Ваши вопросы и поможем разобраться в оформлении контракта
					</h2>

					<div className='mt-5 flex justify-center'>
						<img
							src={Gerbmd}
							alt='Герб'
							className='w-[160px] sm:w-[190px] md:w-[220px] lg:w-[240px] h-auto select-none'
							loading='lazy'
						/>
					</div>

					<div className='mt-5 flex flex-col  md:flex-row gap-5 items-start'>
						{/* левая колонка */}
						<div className='font-golos text-[#1d1e21]'>
							<h3 className='font-semibold text-[18px] sm:text-[22px] md:text-[24px] xl:text-[30px]'>
								На консультации наш специалист ответит на вопросы:
							</h3>

							<ul className='mt-4 flex flex-col gap-5'>
								{QUESTIONS.map(q => (
									<li key={q.n} className='flex items-center gap-4'>
										<div className='w-[24px] h-[24px] md:w-[30px] md:h-[30px] rounded-full bg-white flex items-center justify-center shrink-0'>
											<span className='font-golos font-semibold text-[#1d1e21] text-[14px]'>
												{q.n}
											</span>
										</div>

										<div className='leading-[1.2]'>
											<p className='font-semibold whitespace-pre-line text-[14px] md:text-[16px] lg:text-[21px]'>
												{q.title}
											</p>
											{q.sub ? (
												<p className='mt-1 text-[14px] md:text-[16px] lg:text-[21px] text-[#2b2c30]'>
													{q.sub}
												</p>
											) : null}
										</div>
									</li>
								))}
							</ul>
						</div>

						{/* правая колонка */}
						<div className='w-full max-w-[410px] md:flex md:justify-end'>
							<form
								onSubmit={handleSubmit(onSubmit)}
								className='w-full md:max-w-[460px] md:pt-[45px]'
							>
								<div className='flex flex-col'>
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
										<p className='text-[12px] font-golos text-[#1d1e21]/70 mt-2'>
											{errors.name.message}
										</p>
									) : null}

									<input
										type='tel'
										placeholder='+7 (000) 000-00-00'
										className='
                      w-full rounded-[16px] mt-2.5 bg-[#E6E8ED] 
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

									{/* ✅ ЧЕКБОКС */}
									<motion.div
										className='h-5 mt-5 pl-[8px] inline-flex items-center gap-2.5 select-none'
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

									<button
										type='submit'
										className='
                      mt-2 w-full h-[62px] mt-5 rounded-[15px] cursor-pointer
                      bg-contrast/90 hover:bg-contrast active:bg-contrast/70 shadow-item text-white
                      py-4 font-inter font-bold
                      text-[18px]
                      uppercase
                      active:scale-[0.99]
                    '
									>
										получить консультацию
									</button>

									<p className='mt-5 font-inter font-semibold text-[14px] text-[#797c85]'>
										Консультация бесплатная. Звонок не обязывает вас подписывать
										контракт
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			{/* ✅ Модалка успеха */}
			<Modal isOpen={popup.isOpen} onClose={popup.close}>
				<Popupok onClose={popup.close} />
			</Modal>
		</section>
	)
}

export default Consultation
