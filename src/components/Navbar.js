import styles from './Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
	return <nav className={styles.navbar}>
		<div className="container">
			<div className={styles.logo}>
				<Link href="/">
					<a>C WEB DEV</a>
				</Link>
			</div>
			<ul className={styles.navlinks}>
				<li className={styles.navlink}>
					<Link href="/events">
						<a>Events</a>
					</Link>
				</li>
				<li className={styles.navlink}>
					<Link href="/blog">
						<a>Blog</a>
					</Link>
				</li>
				<li className={styles.navlink}>
					<Link href="/projects">
						<a>Projects</a>
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