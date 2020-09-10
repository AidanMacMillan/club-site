import Navbar from '../components/Navbar'
import Head from 'next/head'
import '../../public/main.css'

export default function App({ Component, pageProps }) {
	return <>
		<Head>
			<link rel="icon" href="/svg/favicon-light.svg" type="image/svg"/>
		</Head>
		<Navbar></Navbar>
		<Component {...pageProps} />
	</>
}