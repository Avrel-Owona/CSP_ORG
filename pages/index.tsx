import Head from "next/head"
import Image from "next/image"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import styles from "../styles/Home.module.css"

export default function Home() {
	return (
		<div
			style={{ maxWidth: "2000px", margin: "0 auto" }}
			className="flex flex-col w-full items-center"
		>
			<Navbar />
			<Slider />
		</div>
	)
}
