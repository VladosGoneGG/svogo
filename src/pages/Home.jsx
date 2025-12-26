import Benifits from '../components/Benifits/Benifits'
import Compensations from '../components/Compensations/Compensations'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'

const Home = () => {
	return (
		<div className='min-h-screen flex flex-col w-full max-w-300 min-[1200px]:mx-auto '>
			<Header />

			<main className='flex-1'>
				<Hero />
				<Compensations />
				<Benifits />
			</main>

			<Footer />
		</div>
	)
}

export default Home
