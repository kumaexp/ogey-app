import Link from "next/link";
import styles from '../styles/Sidebar.module.css'

export default function Sidebar({ title }) {

	return (
		<div className="bg-gray-700 text-white h-full p-4">
			<p className="text-xl">{title}</p>
			<ul className={`mt-8 ${styles.nav}`}>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/portofolio">Portofolio</Link>
				</li>
				<li>
					<Link href="/blog">Blog</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
			</ul>
		</div>
	)

}