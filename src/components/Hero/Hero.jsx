import heroImg from '../../assets/images/hero.webp'
import heroImgSm from '../../assets/images/herosm.webp'
import Heroicons from '../Heroicons/Heroicons'

const styles = {
	wrap:
		'relative mx-auto w-full max-w-106.25 h-[400px] overflow-hidden ' +
		'min-[426px]:max-w-234.75 ' +
		'min-[768px]:h-[450px] ' +
		'min-[959px]:h-[470px] min-[960px]:max-w-289.75 ' +
		'min-[1199px]:max-w-300 min-[1199px]:h-[642px]',

	imgMobile:
		'absolute inset-0 w-full h-full bg-contain bg-no-repeat min-[436px]:hidden',
	imgDesktop:
		'absolute inset-0 w-full h-full object-fill  hidden min-[436px]:block',

	content:
		'relative pl-1 mt-[29px] min-[800px]:mt-0 min-[959px]:mt-7 max-w-[400px] ' +
		'min-[430px]:max-w-[430px] min-[768px]:max-w-[677px] ' +
		'flex flex-col justify-evenly font-inter text-white h-[370px] ' +
		'min-[800px]:h-[415px] min-[959px]:pl-2.5 ' +
		'min-[1199px]:h-[700px] min-[1199px]:justify-start min-[1199px]:pl-8',

	h1: 'font-golos ml-7 max-[360px]:ml-3 min-[959px]:mt-2.5 min-[1199px]:w-[570px]',
	title:
		'font-medium  text-[18px] min-[768px]:text-[24px] min-[1024px]:text-[35px] min-[1199px]:text-[40px]',
	subtitle:
		'font-normal text-[16px] min-[768px]:text-[20px]  min-[1199px]:text-[35px]',

	list:
		'font-normal font-golos text-[12px] min-[425px]:text-[14px] mt-2.5 mr-0.5 gap-3 ' +
		'pl-3 min-[360px]:pl-7 flex flex-col justify-between w-full max-w-[310px] ' +
		'min-[425px]:max-w-[425px] min-[959px]:mt-[15px] min-[768px]:max-w-[590px] ' +
		'min-[959px]:max-w-[620px] min-[959px]:text-[16px]' +
		'min-[1199px]:h-[600px] min-[1199px]:text-[21px] min-[1199px]:gap-4 min-[1199px]:mt-1.5',

	btn:
		'w-full max-w-[280px] h-[37px] min-[415px]:max-w-[350px] min-[425px]:max-w-[365px] ' +
		' ml-7 max-[360px]:ml-3 cursor-pointer rounded-[10px] shadow-btn text-[14px] ' +
		'max-[360px]:text-[12px] bg-[#D14E15] min-[959px]:max-w-[450px] min-[768px]:h-[62px] min-[768px]:text-[18px] min-[1199px]:mt-10 ',
}

const Hero = () => {
	return (
		<section className='mt-4  '>
			<div className={styles.wrap}>
				{/* мобилка <=425 */}
				<img src={heroImgSm} alt='hero' className={styles.imgMobile} />

				{/* >=426 */}
				<img src={heroImg} alt='hero' className={styles.imgDesktop} />

				<div className={styles.content}>
					<header className={styles.h1}>
						<span className={styles.title}>Оформление контракта на СВО</span>
						<br />
						<span className={styles.subtitle}>
							официальное сопровождение и <br className='min-[768px]:hidden' />{' '}
							выплаты до 7 000 000{' '}
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
