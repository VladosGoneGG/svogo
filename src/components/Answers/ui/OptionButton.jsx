import { AnimatePresence, motion } from 'framer-motion'

const EASE = [0.42, 0, 0.58, 1]
const DURATION = 0.3

const OptionButton = ({ opt, checked, onPick, animateLabel = false }) => {
	return (
		<motion.button
			type='button'
			onClick={() => onPick(opt.id)}
			className='group w-full bg-[#d1d3d8] rounded-[14px] p-4 flex gap-2.5 cursor-pointer will-change-transform'
			layout
			animate={{
				backgroundColor: checked ? '#ffffff' : '#d1d3d8',
			}}
			whileHover={{
				backgroundColor: '#ffffff',
				y: -1,
			}}
			whileTap={{ scale: 0.98 }}
			transition={{ duration: DURATION, ease: EASE }}
		>
			<span className='w-5 h-5 relative shrink-0 cursor-pointer'>
				<span className='absolute inset-0 rounded-full border border-middle-grey' />

				<span
					className={[
						'absolute left-[4px] top-[4px] w-3 h-3 rounded-full',
						'transition-all duration-300 ease-[cubic-bezier(0.42,0,0.58,1)]',
						checked
							? 'bg-contrast opacity-100 scale-100 group-hover:!bg-[#e8612b82] group-hover:scale-[1.12]'
							: 'bg-contrast opacity-0 scale-[0.85] group-hover:!opacity-50 group-hover:scale-[0.95]',
					].join(' ')}
				/>
			</span>

			{animateLabel ? (
				<span className='font-inter font-semibold text-[14px] text-[#1d1e21] cursor-pointer relative'>
					<AnimatePresence mode='wait' initial={false}>
						<motion.span
							key={opt.label}
							initial={{ opacity: 0, y: 6 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -6 }}
							transition={{ duration: DURATION, ease: EASE }}
							className='inline-block'
						>
							{opt.label}
						</motion.span>
					</AnimatePresence>
				</span>
			) : (
				<span className='font-inter font-semibold text-[14px] text-[#1d1e21] cursor-pointer'>
					{opt.label}
				</span>
			)}
		</motion.button>
	)
}

export default OptionButton
