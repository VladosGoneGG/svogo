import { blogPageMock } from './blogPage.mock'

export const blogVariantsMock = {
	// ✅ “активный” выбирается в админке
	active: 'viplati',

	// ✅ все варианты тут
	variants: {
		// базовый шаблон (можешь хранить как вариант тоже)
		base: blogPageMock,

		viplati: {
			...blogPageMock,
			seo: { title: 'Выплаты', description: '...' },
			hero: { title: 'Выплаты', subtitle: '...', text: '...' },
			// requirements / block1..post3 можно тоже переопределять
		},

		dokumenty: {
			...blogPageMock,
			seo: { title: 'Документы', description: '...' },
			hero: { title: 'Документы', subtitle: '...', text: '...' },
		},
	},
}
