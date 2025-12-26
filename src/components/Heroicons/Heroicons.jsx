import HeroIconOne from '../../assets/svg/hi-1.svg?react'
import HeroIconTwo from '../../assets/svg/hi-2.svg?react'
import HeroIconThree from '../../assets/svg/hi-3.svg?react'
import HeroIconFour from '../../assets/svg/hi-4.svg?react'

const Heroicons = () => {
	return (
		<div
			className='w-full mx-auto px-2 mb-2
			max-w-[505px] md:max-w-none
			h-auto min-[959px]:min-h-[75px]'
		>
			<ul
				className='font-golos font-medium text-black max-[330px]:text-[12px] text-[14px]
				grid grid-cols-2 gap-5
				md:grid-cols-4 md:gap-2'
			>
				<li
					className='flex items-center gap-4
					w-full max-[360px]:justify-start
					h-[74px]
					min-[959px]:h-[74px] min-[959px]:max-w-[289.75px]'
				>
					<HeroIconOne />
					<p className='w-full max-w-[205.75px] h-auto'>
						Предоставляем <br className='block min-[765px]:hidden' /> отношение
					</p>
				</li>

				<li
					className='flex items-center gap-4
					w-full max-[360px]:justify-start
					h-[74px]
					min-[959px]:h-[74px] min-[959px]:max-w-[289.75px]'
				>
					<HeroIconTwo />
					<p className='w-full max-w-[205.75px] h-auto'>
						Оплатим проезд и проживание
					</p>
				</li>

				<li
					className='flex items-center gap-4
					w-full max-[360px]:justify-start
					h-auto min-[959px]:h-[74px]
					min-[959px]:max-w-[289.75px]'
				>
					<HeroIconThree />
					<p className='w-full max-w-[205.75px] h-auto'>
						Современная экипировка и вооружение
					</p>
				</li>

				<li
					className='flex items-center gap-4
					w-full max-[360px]:justify-start
					h-auto min-[959px]:h-[74px]
					min-[959px]:max-w-[289.75px]'
				>
					<HeroIconFour />
					<p className='w-full max-w-[205.75px] h-auto'>
						Подберём регион с лучшими условиями
					</p>
				</li>
			</ul>
		</div>
	)
}

export default Heroicons
