import Navbar from '../components/Navbar'
import '../../public/main.css'

export default function App({ Component, pageProps }) {
	return <>
		<Navbar></Navbar>
		<Component {...pageProps} />
	</>
}