import styles from "./Layout.module.css"
import Head from "next/head"

export default function Layout({ children, ...props }) {
	return <>
		<Head>
			<title>{props.title}</title>
		</Head>
		<div className={styles.layout}>
			{children}
		</div>
	</>
}