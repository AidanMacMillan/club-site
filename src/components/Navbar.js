import styles from './Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
	return <nav className={styles.navbar}>
		<div className={styles.container}>
			<div className={styles.logo}>
				<Link href="/">
					<a><img src="/svg/logo.svg" alt="Carleton Web Development Club Logo" height="30px"/></a>
				</Link>
			</div>
			<ul className={styles.navlinks}>
				<li className={styles.navlink}>
					<Link href="/hackathons">
						<a>Hackathons</a>
					</Link>
				</li>
				<li className={styles.navlink}>
					<Link href="/members">
						<a>Members</a>
					</Link>
				</li>
			</ul>
		</div>
	</nav>
}