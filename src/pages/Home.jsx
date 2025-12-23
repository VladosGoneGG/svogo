import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Home = () => {
	return (
		<div className='min-h-screen flex flex-col max-w-300 min-[1200px]:mx-auto'>
			<Header />

			<main className='flex-1'>Hello world</main>

			<Footer />
		</div>
	)
}

export default Home
