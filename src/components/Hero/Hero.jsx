import Heroicons from '../Heroicons/Heroicons'
import stylesCss from './Hero.module.css'

const styles = {
	wrap:
		'relative mx-auto w-full max-w-106.25 ' +
		'min-h-[400px] ' +
		'min-[768px]:h-[clamp(435px,40vw,602px)] ' +
		'min-[426px]:max-w-234.75 ' +
		'min-[959px]:max-w-289.75 ' +
		'min-[1199px]:max-w-300 min-[1199px]:h-[600px]',

	// ✅ ключевой фикс: убрал mt-10/mt-7 и сделал стабильный padding сверху/снизу
	content:
		'relative max-w-[400px] max-[325px]:min-h-[380px]  max-[325px]:max-w-[290px] min-[430px]:max-w-[500px] md:max-w-[550px] lg:max-w-[640px] ' +
		'flex flex-col justify-center min-[400px]:justify-between font-inter text-white ' +
		'px-0 pl-1 min-[959px]:pl-2.5 min-[1199px]:pl-8 ' +
		'pt-[60px] min-[425px]:pt-[50px] pb-[10px] min-[525px]:pt-[50px] ' + // ← вместо mt прыжков
		'min-[768px]:pt-[36px] min-[768px]:pb-[24px] ' +
		'min-[959px]:pt-[28px] min-[959px]:pb-[24px] ' +
		'min-[1199px]:pt-[36px] min-[1199px]:pb-[28px] ' +
		'min-h-[340px] min-[360px]:min-h-[390px] ' +
		'min-[768px]:min-h-[435px] ' +
		'min-[1199px]:min-h-[500px]',

	// ✅ заголовок: оставил твои отступы, но чуть стабилизировал
	h1:
		'font-golos ml-2 max-[360px]:ml-1 min-[768px]:ml-7 ' +
		'min-[959px]:mt-0 min-[1199px]:w-[570px]', // ← убрал лишний mt на 959

	title:
		'font-medium text-[24px] min-[768px]:text-[28px] min-[1024px]:text-[35px] min-[1199px]:text-[40px]',
	subtitle:
		'font-normal text-[16px] min-[768px]:text-[16px] min-[1199px]:text-[35px]',

	// ✅ list: оставил твой ритм, но убрал лишние смещения на 959
	list:
		'font-normal font-golos text-[12px] min-[425px]:text-[14px] mt-5 mr-0.5 gap-3 ' +
		'pl-1 md:pl-7 min-[360px]:pl-2.5 flex flex-col w-full max-w-[310px] ' +
		'min-[425px]:max-w-[590px] ' +
		'min-[959px]:max-w-[620px] min-[959px]:text-[16px] ' +
		'min-[1199px]:text-[21px] min-[1199px]:gap-4 min-[1199px]:mt-1.5',

	// ✅ кнопка: убрал зависимость от "ml" (она и давала ощущение, что кнопка не там)
	btn:
		'w-full max-w-[280px] mt-6 h-[37px] min-[415px]:max-w-[350px] min-[425px]:max-w-[365px] ' +
		'ml-2 md:ml-7 max-[360px]:ml-1 cursor-pointer rounded-[10px] shadow-btn text-[14px] ' +
		'max-[360px]:text-[12px] bg-[#D14E15] min-[959px]:max-w-[450px] ' +
		'min-[525px]:h-[62px] min-[525px]:mt-0 min-[525px]:text-[18px] min-[525px]:mt-10 ' +
		'min-[800px]:mt-[20px] ' +
		'min-[768px]:h-[62px] min-[768px]:text-[18px] ' +
		'min-[1199px]:h-[62px] min-[1199px]:max-w-[450px]',
}

const Hero = () => {
	return (
		<section className='mt-4 px-[10px] min-[1199px]:px-[20px]'>
			{/* ✅ heroBg только тут, один раз */}
			<div className={`${styles.wrap} ${stylesCss.heroBg}`}>
				<div className={styles.content}>
					<header className={styles.h1}>
						<span className={styles.title}>Оформление контракта на СВО</span>
						<br />
						<span className={styles.subtitle}>
							официальное сопровождение и выплаты до 7 000 000{' '}
							<br className='hidden min-[768px]:block min-[1199px]:hidden' />{' '}
							руб.
						</span>
					</header>

					<ul className={styles.list}>
						<li>
							Поможем пройти ВВК, подготовим документы и сопроводим до пункта
							подписания.
						</li>
						<li>
							Единовременная выплата до 3 000 000 руб. и ежемесячное довольствие
							от 210 000 руб.
						</li>
						<li>
							Работаем официально. Все условия - по приказам и постановлениям
							Минобороны РФ
						</li>
					</ul>

					<button className={styles.btn}>
						Записаться на оформление контракта
					</button>
				</div>
			</div>

			<Heroicons />
		</section>
	)
}

export default Hero
