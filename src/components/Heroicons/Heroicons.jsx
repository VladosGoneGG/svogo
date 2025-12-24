import HeroIconOne from '../../assets/svg/hi-1.svg?react'
import HeroIconTwo from '../../assets/svg/hi-2.svg?react'
import HeroIconThree from '../../assets/svg/hi-3.svg?react'
import HeroIconFour from '../../assets/svg/hi-4.svg?react'

const Heroicons = () => {
	return (
		<div className='w-full mx-auto max-w-[505px] md:max-w-none h-[182px] min-[959px]:h-[75px]'>
			<ul
				className='font-golos font-medium text-black text-[14px] 
				grid grid-cols-2 gap-3
				md:grid-cols-4 md:gap-4
				place-items-center
				'
			>
				<li className='flex  items-center justify-center h-[74px] gap-5 w-[202.5px] min-[959px]:w-[289.75px]  '>
					<HeroIconOne />
					<p className='w-[118.5px] min-[959px]:mt-3 min-[959px]:w-[205.75px] h-[34px] '>
						Предоставляем отношение
					</p>
				</li>
				<li className='flex  items-center justify-center gap-5   w-[202.5px]  h-[74px] min-[959px]:w-[289.75px] '>
					<HeroIconTwo className='min-[959px]:mt-2' />
					<p className='w-[118.5px] h-[34px] min-[959px]:w-[205.75px]'>
						Оплатим проезд и проживание
					</p>
				</li>
				<li className='flex  items-center justify-center gap-5   w-[202.5px]  h-[94px] min-[959px]:w-[289.75px] min-[959px]:h-[74px] '>
					<HeroIconThree className='min-[959px]:mt-2' />
					<p className='w-[118.5px] h-[51px] min-[959px]:w-[205.75px] min-[959px]:h-[34px]'>
						Современная экипировка и вооружение
					</p>
				</li>
				<li className='flex  items-center justify-center gap-5   w-[202.5px]  h-[108px] min-[959px]:w-[289.75px] min-[959px]:h-[74px]'>
					<HeroIconFour className='min-[959px]:mt-2' />
					<p className='w-[118.5px] h-[68px] min-[959px]:w-[205.75px] min-[959px]:h-[34px]'>
						Подберём регион с лучшими условиями
					</p>
				</li>
			</ul>
		</div>
	)
}

export default Heroicons
