const clamp = (n, min, max) => Math.min(Math.max(n, min), max)

const daysInMonth = (year, month) => new Date(year, month, 0).getDate()

const formatDateInstantDots = raw => {
	const digits = raw.replace(/\D/g, '').slice(0, 8)

	let d = digits.slice(0, 2)
	let m = digits.slice(2, 4)
	let y = digits.slice(4, 8)

	// мягкое ограничение
	if (d.length === 2) {
		d = String(clamp(parseInt(d, 10) || 1, 1, 31)).padStart(2, '0')
	}

	if (m.length === 2) {
		m = String(clamp(parseInt(m, 10) || 1, 1, 12)).padStart(2, '0')
	}

	let out = ''

	if (d) {
		out += d
		if (d.length === 2) out += '.'
	}

	if (m) {
		out += m
		if (m.length === 2) out += '.'
	}

	if (y) {
		out += y
	}

	return out
}

const startOfDay = d => new Date(d.getFullYear(), d.getMonth(), d.getDate())

const calcAge = (birth, today) => {
	let age = today.getFullYear() - birth.getFullYear()
	const m = today.getMonth() - birth.getMonth()
	if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--
	return age
}

const validateBirthDate = value => {
	if (!/^\d{2}\.\d{2}\.\d{4}$/.test(value)) return false

	const [ddS, mmS, yyyyS] = value.split('.')
	const d = parseInt(ddS, 10)
	const m = parseInt(mmS, 10)
	const y = parseInt(yyyyS, 10)

	if (Number.isNaN(d) || Number.isNaN(m) || Number.isNaN(y)) return false
	if (y < 1900 || y > 2100) return false
	if (m < 1 || m > 12) return false

	const dim = daysInMonth(y, m)
	if (d < 1 || d > dim) return false

	const birth = new Date(y, m - 1, d)
	const today = startOfDay(new Date())

	if (startOfDay(birth) > today) return false

	const age = calcAge(birth, today)
	if (age < 18 || age > 80) return false

	return true
}

const BirthDateField = ({ register, error }) => {
	return (
		<input
			{...register('birthDate', {
				required: true,
				onChange: e => {
					e.target.value = formatDateInstantDots(e.target.value)
				},
				validate: validateBirthDate,
			})}
			placeholder='Дата рождения'
			inputMode='numeric'
			maxLength={10}
			className={[
				'w-full h-[54px] rounded-[14px] px-4 bg-white font-inter font-semibold text-[14px] outline-none cursor-pointer placeholder:opacity-100 transition-[color,opacity] duration-150 hover:placeholder:opacity-50',
				error ? '!bg-[#ffe5e5]' : '',
			].join(' ')}
		/>
	)
}

export default BirthDateField
