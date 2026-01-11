import Solder from '../../assets/images/solder.webp'
import Solderm from '../../assets/images/soliderm.webp'
const Equipment = () => {
	return (
		<section className='relative py-7.5 lg:py-[40px]  pt-5'>
			<div className='absolute inset-0 -left-[50vw] left-1/2 -translate-x-1/2 w-screen -z-10' />

			<div className='w-full  px-2.5 lg:px-[20px]'>
				<div
					className='
            flex flex-col md:flex-row
            gap-5 md:gap-0
            items-start md:items-stretch
          '
				>
					{/* ЛЕВАЯ КОЛОНКА — ВЕСЬ ТЕКСТ */}
					<div className='flex-1 min-w-0 max-w-[510px] font-golos'>
						<div className='max-w-[355px] sm:max-w-[550px] md:max-w-[900px] lg:max-w-[550px]'>
							<h3 className='font-semibold text-[20px] md:text-[24px] lg:text-[30px] xl:text-[40px]'>
								Получите современную экипировку от Министерства обороны
							</h3>

							<p className='text-[18px] text-contrast md:text-[22px] xl:text-[35px]'>
								— всё необходимое для службы и выполнения задач
							</p>
						</div>

						<div className='flex font-inter flex-col gap-5 mt-5 text-[14px] md:text-[16px] lg:text-[21px] xl:mt-[30px]'>
							{/* списки без изменений */}
							<div>
								<p className='font-semibold'>Одежда и костюмы:</p>
								<ul className='font-golos text-[#797c85] font-normal pl-7 mt-2.5 list-disc'>
									<li>Экипировка по сезону</li>
									<li>Демисезонный тактический костюм</li>
									<li>Тёплая тактическая кофта (флис)</li>
									<li>Термобельё</li>
								</ul>
							</div>
							<div>
								<p className='font-semibold'>Обувь и защита:</p>
								<ul className='font-golos text-[#797c85] font-normal pl-7 mt-2.5 list-disc'>
									<li>Тактические ботинки</li>
									<li>Спецперчатки</li>
									<li>Коврик термоизоляционный</li>
								</ul>
							</div>
							<div>
								<p className='font-semibold'>Спальное снаряжение:</p>
								<ul className='font-golos text-[#797c85] font-normal pl-7 mt-2.5 list-disc'>
									<li>Спальный мешок</li>
									<li>Непромокаемый вещмешок</li>
								</ul>
							</div>
							<div>
								<p className='font-semibold'>Предметы личного пользования:</p>
								<ul className='font-golos text-[#797c85] font-normal pl-7 mt-2.5 list-disc'>
									<li>Набор в подсумке / средства личной гигиены</li>
								</ul>
							</div>
							<div>
								<p className='font-semibold'>Медицинское обеспечение:</p>
								<ul className='font-golos text-[#797c85] font-normal pl-7 mt-2.5 list-disc'>
									<li>Тактическая медицинская аптечка в сборе</li>
								</ul>
							</div>
							<p className='font-golos text-contrast font-semibold'>
								Вся экипировка — новая, соответствует установленным нормам
								обеспечения и предоставляется бесплатно государством
							</p>
						</div>
					</div>

					{/* ПРАВАЯ КОЛОНКА — КАРТИНКА */}
					<div className='flex-1 min-w-0 flex justify-center md:justify-end md:self-stretch '>
						<img
							src={Solder}
							alt='Солдат'
							className='hidden md:block bg-cover bg-center bg-no-repeat w-full h-full object-cover rounded-[30px] '
						/>
						<img
							src={Solderm}
							alt='Солдат'
							className='md:hidden bg-cover bg-center bg-no-repeat w-full h-full object-cover rounded-[30px] '
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Equipment
