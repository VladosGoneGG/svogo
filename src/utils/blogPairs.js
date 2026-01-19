export const buildBlogPairs = data => {
	if (!data) return []

	// найдём все номера, которые есть у blockN или postN
	const nums = new Set()

	Object.keys(data).forEach(key => {
		const m = key.match(/^(block|post)(\d+)$/)
		if (m) nums.add(Number(m[2]))
	})

	const sortedNums = Array.from(nums).sort((a, b) => a - b)

	// собираем пары в порядке 1,2,3...
	return sortedNums.map(n => ({
		n,
		block: data[`block${n}`] ?? null,
		post: data[`post${n}`] ?? null,
	}))
}
