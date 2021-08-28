import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
	const [title, setTitle] = useState("my personal page")

	return (
		<div className="flex justify-center h-screen flex-col">
			<h1 className="text-center text-2xl flex-1">Welcome to {title}</h1>
			<span className="text-center text-xl flex-1">
				<Link href="/">Home</Link>
				/
				<Link href="/portofolio">Portofolio</Link>
				/
				<Link href="/blog">Blog</Link>
				/
				<Link href="/about">About</Link>
			</span>
		</div>
	)
}
