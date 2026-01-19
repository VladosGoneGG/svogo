import { HelmetProvider } from '@dr.pogodin/react-helmet'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './index.css'
import Blog from './pages/Blog'
import DynamicPage from './pages/DynamicPage'
import Home from './pages/Home'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 1,
			refetchOnWindowFocus: false,
			staleTime: 60_000, // 1 минута
		},
	},
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter basename={import.meta.env.BASE_URL}>
					<ScrollToTop />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/blog' element={<Blog />} />

						<Route
							path='/city/:slug'
							element={<DynamicPage pageType='city' />}
						/>
						<Route
							path='/specialization/:slug'
							element={<DynamicPage pageType='specialization' />}
						/>
						<Route
							path='/profession/:slug'
							element={<DynamicPage pageType='profession' />}
						/>
						<Route
							path='/unit/:slug'
							element={<DynamicPage pageType='unit' />}
						/>
						<Route path='*' element={<Navigate to='/' replace />} />
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</HelmetProvider>
	</React.StrictMode>,
)
