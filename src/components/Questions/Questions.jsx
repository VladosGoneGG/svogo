import { useId, useState } from 'react'

const DATA = [
	{
		q: 'Какие юридические гарантии мне предоставляются?',
		a: 'Ваши права и обязанности определяются Федеральным законом № 53-ФЗ “О воинской обязанности и военной службе” и контрактом, который подписывается с Министерством обороны РФ. Все выплаты, льготы и социальные гарантии закреплены в законодательстве и предоставляются государством',
	},
	{
		q: 'Смогу ли я поддерживать связь с близкими?',
		a: 'Да. Возможность связи зависит от конкретного места службы, но личные телефоны разрешены, если это не противоречит требованиям безопасности. Связь можно поддерживать через мобильные сети, мессенджеры и почтовую службу части',
	},
	{
		q: 'Когда лучше заключить контракт на СВО?',
		a: 'Контракт можно заключить в любое время. Оптимальный период — когда у вас есть полный комплект документов и понимание, какую специальность и часть вы хотите выбрать. Мы помогаем оценить требования и подобрать подходящий вариант',
	},
	{
		q: 'Может ли осужденный подписать контракт?',
		a: 'Решение зависит от категории и срока погашения судимости. Мы можем помочь предварительно оценить вашу ситуацию и подсказать, возможна ли подача документов',
	},
	{
		q: 'Какие реальные условия службы?',
		a: 'Условия службы зависят от выбранной части, специальности и региона. Мы заранее разъясняем порядок службы, требования, бытовые условия, порядок обеспечения и предоставляем актуальную информацию.',
	},
	{
		q: 'На какой срок можно заключить контракт?',
		a: 'Минимальный срок — 1 год, далее возможны продления на 3, 5 лет и более. Срок зависит от условий конкретного предложения и вашей специализации',
	},
	{
		q: 'Предусмотрен ли отпуск для добровольцев?',
		a: 'Да. Ежегодный оплачиваемый отпуск, а также дополнительные отпуска предоставляются в соответствии с законодательством РФ и условиями военной службы',
	},
	{
		q: 'Будут ли выплаты осуществляться вовремя?',
		a: 'Выплаты осуществляются Министерством обороны РФ по установленному графику. Размеры выплат, надбавки и компенсации определяются федеральными нормативными актами. Мы заранее объясняем порядок выплат и помогаем подготовить документы для их получения',
	},
	{
		q: 'Что делать если я потерял один из документов для подписания контракта?',
		a: 'Мы подскажем порядок восстановления — паспорт, СНИЛС, ИНН, военный билет и другие документы можно восстановить через МФЦ, МВД или военкомат. В большинстве случаев восстановление занимает от 1 до 7 рабочих дней',
	},
	{
		q: 'Можно ли заключить контракт на СВО без военного билета?',
		a: 'Да, возможно подписать контракт при наличии удостоверения личности и прохождении ВВК. Военный билет можно восстановить или оформить при сопровождении специалистов',
	},
	{
		q: 'Что будет с моей семьей, если со мной что-то случится?',
		a: 'Членам семьи предусмотрены выплаты, компенсации и социальная поддержка в соответствии с законами РФ. Подробный перечень зависит от конкретных обстоятельств и статуса военнослужащего',
	},
	{
		q: 'Что делать, если я не проходил срочную службу?',
		a: 'Это не препятствует подписанию контракта. Контракт принимают и тех, кто не служил ранее, — при условии прохождения ВВК и соответствия требованиям',
	},
	{
		q: 'Как проходит распределение контрактников?',
		a: 'Распределение зависит от ваших навыков, состояния здоровья, опыта и требований конкретных частей. Мы помогаем подобрать варианты и объясняем, на что вы можете рассчитывать.',
	},
	{
		q: 'Кто получает выплаты при гибели участника СВО?',
		a: 'Выплаты предоставляются членам семьи или законным наследникам в соответствии с нормативными актами РФ. Мы объясняем порядок оформления и какие документы нужны для получения компенсаций',
	},
]

function IconToggle({ open }) {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 18 18'
			fill='none'
			aria-hidden='true'
			className={[
				'origin-center transition-transform duration-300 ease-in-out',
				open ? 'rotate-45' : 'rotate-0',
			].join(' ')}
		>
			<path
				d='M9 3.25v11.5'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
			/>
			<path
				d='M3.25 9h11.5'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
			/>
		</svg>
	)
}

function AccordionItem({ q, a, isOpen, onToggle, btnId, panelId }) {
	return (
		<div className='relative'>
			<div
				className={[
					'pointer-events-none absolute left-0 right-0 top-0 h-px bg-[#c3c6d0]',
					'transition-opacity duration-300 ease-in-out',
					isOpen ? 'opacity-100' : 'opacity-0',
				].join(' ')}
			/>
			<div
				className={[
					'pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-[#c3c6d0]',
					'transition-opacity duration-300 ease-in-out',
					isOpen ? 'opacity-100' : 'opacity-0',
				].join(' ')}
			/>

			<div
				className={[
					'pointer-events-none absolute left-0 top-0 bottom-0 w-px bg-[#c3c6d0]',
					'transition-opacity duration-300 ease-in-out',
					isOpen ? 'opacity-0' : 'opacity-100',
				].join(' ')}
			/>

			<div className='flex flex-col  pl-[20px]'>
				<button
					type='button'
					onClick={onToggle}
					aria-expanded={isOpen}
					aria-controls={panelId}
					id={btnId}
					className='w-full text-left'
				>
					<div className='flex items-start justify-between gap-5 pt-3 min-h-[74px]'>
						<span
							className={[
								'font-golos font-semibold text-[18px]',
								'transition-colors duration-300 ease-in-out',
								isOpen ? 'text-contrast' : 'text-[#1D1E21]',
							].join(' ')}
						>
							{q}
						</span>

						<span
							className={[
								'shrink-0 grid place-items-center rounded-full',
								'w-[39px] h-[39px]',
								'text-[#1D1E21]',
								'transition-[background-color,transform] duration-300 ease-in-out',
								isOpen
									? 'bg-[#E6E8EE] translate-y-[2px]'
									: 'bg-white translate-y-0',
							].join(' ')}
						>
							<IconToggle open={isOpen} />
						</span>
					</div>
				</button>

				<div
					id={panelId}
					role='region'
					aria-labelledby={btnId}
					className={[
						'grid transition-[grid-template-rows,opacity] duration-300 ease-in-out',
						isOpen
							? 'grid-rows-[1fr] opacity-100'
							: 'grid-rows-[0fr] opacity-0',
					].join(' ')}
				>
					<div className='overflow-hidden'>
						{/* сохраняем твой gap-5 и pb-5, но делаем плавный “заезд” текста */}
						<div
							className={[
								'flex flex-col gap-5 pb-5',
								'transition-[transform,opacity] duration-300 ease-in-out will-change-transform',
								isOpen
									? 'opacity-100 translate-y-0'
									: 'opacity-0 -translate-y-1',
							].join(' ')}
						>
							<p className='font-golos font-medium text-[14px]  text-black max-w-[365px]'>
								{a}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
const Questions = () => {
	const uid = useId()
	const [openIndexes, setOpenIndexes] = useState(() => new Set())

	const mid = Math.ceil(DATA.length / 2)
	const left = DATA.slice(0, mid)
	const right = DATA.slice(mid)

	const toggle = idx => {
		setOpenIndexes(prev => {
			const next = new Set(prev)
			if (next.has(idx)) next.delete(idx)
			else next.add(idx)
			return next
		})
	}

	return (
		<section className='py-10 md:py-12'>
			<div className='mx-auto w-full max-w-[1200px] px-2.5 lg:px-5'>
				<h2 className='font-inter font-bold text-[#D85A1A] text-[20px] md:text-[36px] lg:text-[44px] '>
					Отвечаем на часто задаваемые вопросы
				</h2>

				<div className='mt-8 md:mt-10'>
					<div className='md:hidden'>
						<div className='flex flex-col gap-2.5'>
							{DATA.map((item, idx) => (
								<AccordionItem
									key={item.q}
									q={item.q}
									a={item.a}
									isOpen={openIndexes.has(idx)}
									onToggle={() => toggle(idx)}
									btnId={`${uid}-btn-${idx}`}
									panelId={`${uid}-panel-${idx}`}
								/>
							))}
						</div>
					</div>

					<div className='hidden md:min-h-[558px] md:grid md:grid-cols-2 md:gap-5 relative'>
						{/* ЛЕВАЯ КОЛОНКА */}
						<div className='grid auto-rows-max gap-5'>
							{left.map((item, i) => {
								const idx = i
								return (
									<AccordionItem
										key={item.q}
										q={item.q}
										a={item.a}
										isOpen={openIndexes.has(idx)}
										onToggle={() => toggle(idx)}
										btnId={`${uid}-btn-${idx}`}
										panelId={`${uid}-panel-${idx}`}
									/>
								)
							})}
						</div>

						{/* ПРАВАЯ КОЛОНКА */}
						<div className='grid auto-rows-max gap-5'>
							{right.map((item, i) => {
								const idx = mid + i
								return (
									<AccordionItem
										key={item.q}
										q={item.q}
										a={item.a}
										isOpen={openIndexes.has(idx)}
										onToggle={() => toggle(idx)}
										btnId={`${uid}-btn-${idx}`}
										panelId={`${uid}-panel-${idx}`}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Questions
