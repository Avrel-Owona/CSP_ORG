import Head from "next/head"
import Image from "next/image"
import ActuslityCard from "../components/ActualityCard"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import { TfiYoutube } from "react-icons/tfi"
import styles from "../styles/Home.module.css"
import RegissorCard from "../components/RegissorCard"
import Footer from "../components/Footer"

export default function Home() {
	return (
		<div
			style={{ maxWidth: "2000px", margin: "0 auto" }}
			className="flex flex-col w-full items-center"
		>
			<Navbar />
			<Slider />
			<section className="w-full flex flex-col px-5 sm:px-7 pt-16 bg-gray-100 pb-20">
				<h3 className="uppercase ml-10 relative after:bottom-0 sm:after:-bottom-2 after:-left-3 z-40 text-2xl sm:text-5xl after:content-[''] after:h-4 sm:after:h-7 after:w-44 sm:after:w-80 after:bg-teal-700 after:-z-10 after:absolute font-bold">
					Actualités
				</h3>
				<div className="flex flex-col items-center">
					<div className="flex flex-wrap justify-center px-2 sm:px-3 sm:mt-20 w-full">
						<ActuslityCard />
						<ActuslityCard />
						<ActuslityCard />
						<ActuslityCard />
						<ActuslityCard />
						<ActuslityCard />
					</div>
					<button className="py-3 max-w-max px-6 mt-20 border xl:flex text-teal-700 border-teal-700 duration-200 ease-in text-base hover:text-white hover:bg-teal-700 font-light">
						Toutes les Actualités
					</button>
				</div>
			</section>
			<section className="bg-teal-700 w-full py-10 sm:py-16 xl:py-24 flex flex-wrap justify-start sm:justify-around items-center px-5 sm:px-7">
				<h3 className="uppercase relative after:-bottom-3 after:-left-3 z-40 text-2xl sm:text-4xl xl:text-5xl after:content-[''] after:h-7 after:w-60 sm:after:w-80 after:bg-black text-white after:-z-10 after:absolute font-bold">
					Contactez-nous
				</h3>
				<div className="flex gap-x-8 mt-8 xl:mt-0">
					<a
						href="#"
						target={"_blank"}
						className="border-4 border-black rounded-full flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 text-2xl sm:text-4xl hover:text-white duration-200 ease-in hover:border-white"
					>
						<TfiYoutube />
					</a>
					<a
						href="#"
						target={"_blank"}
						className="border-4 border-black rounded-full flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 text-2xl sm:text-4xl hover:text-white duration-200 ease-in hover:border-white"
					>
						<TfiYoutube />
					</a>
					<a
						href="#"
						target={"_blank"}
						className="border-4 border-black rounded-full flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 text-2xl sm:text-4xl hover:text-white duration-200 ease-in hover:border-white"
					>
						<TfiYoutube />
					</a>
					<a
						href="#"
						target={"_blank"}
						className="border-4 border-black rounded-full flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 text-2xl sm:text-4xl hover:text-white duration-200 ease-in hover:border-white"
					>
						<TfiYoutube />
					</a>
					<a
						href="#"
						target={"_blank"}
						className="border-4 border-black rounded-full flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 text-2xl sm:text-4xl hover:text-white duration-200 ease-in hover:border-white"
					>
						<TfiYoutube />
					</a>
				</div>
			</section>
			<section>
				<h3 className="uppercase relative after:bottom-0 sm:after:-bottom-2 after:-left-3 z-40 text-2xl sm:text-5xl after:content-[''] after:h-4 sm:after:h-7 after:w-44 sm:after:w-80 after:bg-teal-700 after:-z-10 after:absolute font-bold pt-20">
					Regisseurs
				</h3>
				<div className="flex flex-wrap justify-center pt-10 px-5 sm:px-7 pb-20">
					<RegissorCard />
					<RegissorCard />
					<RegissorCard />
				</div>
			</section>
			<Footer />
		</div>
	)
}
