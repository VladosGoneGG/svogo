import { useRuPhoneInput } from '../../../hooks/useRuPhoneInput'
import AgreeRow from './AgreeRow'
const ContactsForm = ({ register, errors, agree, onToggleAgree, onSubmit }) => {
	const { registerOptions: phoneRules, inputProps: phoneInputProps } =
		useRuPhoneInput()

	return (
		<form
			id='contactsForm'
			onSubmit={onSubmit}
			className='flex flex-col gap-2.5 p-2.5'
		>
			<input
				{...register('fio', {
					required: true,
					validate: v => String(v || '').trim().length >= 2,
				})}
				placeholder='ФИО'
				className={[
					'w-full h-[54px] rounded-[14px] px-4 bg-white font-inter font-semibold text-[14px] text-black outline-none placeholder:text-[14px]  focus:outline-none focus:ring-0 focus:border-transparent cursor-pointer placeholder:opacity-100 transition-[color,opacity] duration-150  hover:placeholder:opacity-50 focus:placeholder:opacity-0',
					errors.fio ? '!bg-[#FFB4B4]' : '',
				].join(' ')}
			/>

			<input
				{...phoneInputProps}
				{...register('phone', phoneRules)}
				placeholder='+7 (000) 000-00-00'
				className={[
					'w-full h-[54px] rounded-[14px] px-4 bg-white font-inter font-semibold text-[14px] text-black outline-none placeholder:text-[14px]  focus:outline-none focus:ring-0 focus:border-transparent cursor-pointer  placeholder:opacity-100 transition-[color,opacity] duration-150  hover:placeholder:opacity-50 focus:placeholder:opacity-0',
					errors.phone ? '!bg-[#FFB4B4]' : '',
				].join(' ')}
			/>

			<AgreeRow agree={agree} onToggle={onToggleAgree} register={register} />
		</form>
	)
}

export default ContactsForm
