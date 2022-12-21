import Head from "next/head"
import Image from "next/image"
import ActuslityCard from "../components/ActualityCard"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import styles from "../styles/Home.module.css"
import RegissorCard from "../components/RegissorCard"
import Footer from "../components/Footer"
import SocialSection from "../components/SocialSection"
import MembersSection from "../components/ MembersSection"
import Link from "next/link"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { FiPlay, FiArrowRight } from "react-icons/fi"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation } from "swiper"

export default function Home() {
	return (
		<div
			style={{ maxWidth: "2000px", margin: "0 auto" }}
			className="flex flex-col w-full items-center bg-white"
		>
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
						<ActuslityCard />
						<ActuslityCard />
					</div>
					<button className="py-3 max-w-max px-6 mt-20 border-2 xl:flex text-teal-700 border-teal-600 duration-200 ease-in text-base hover:text-white hover:bg-teal-700 font-medium">
						Toutes les Actualités
					</button>
				</div>
			</section>
			<MembersSection />
			<section className="mt-44 pb-20">
				<div className="hidden lg:flex items-center sm:justify-between px-7 lg:px-20 justify-center xl:pl-10 flex-wrap">
					<h3 className="uppercase relative after:bottom-0 sm:after:-bottom-2 after:-left-3 z-40 text-2xl sm:text-5xl after:content-[''] after:h-4 sm:after:h-7 after:w-44 sm:after:w-80 after:bg-teal-700 after:-z-10 after:absolute font-bold">
						Actualités
					</h3>
					<Link href="/actualites">
						<button className="py-3 max-w-max px-6 border xl:flex text-teal-700 border-teal-700 duration-200 ease-in text-base hover:text-white hover:bg-teal-700 font-light">
							Toutes les Actualités
						</button>
					</Link>
				</div>
				<Swiper
					initialSlide={0}
					breakpoints={{
						576: {
							// width: 576,
							// initialSlide: 0,
							slidesPerView: 2,
						},
						//   768: {
						//     // width: 768,
						//     slidesPerView: 3,
						//   },
						1000: {
							// width: 768,
							slidesPerView: 3,
						},
						1080: {
							// width: 768,
							slidesPerView: 4,
						},
						// 1400: {
						// 	// width: 768,
						// 	slidesPerView: 5,
						// },
					}}
					// onSwiper={setSwiperRef}
					slidesPerView={1}
					// centeredSlides={true}
					spaceBetween={30}
					pagination={{
						dynamicBullets: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="mySwiper mt-10 px-7 flex flex-col items-center"
				>
					<div className="border-0.5 mr-3">
						<SwiperSlide
						// onClick={() => getActuality(actuality.path, actuality.id)}
						>
							<ActuslityCard />
						</SwiperSlide>
					</div>

					<div className="border-0.5 mr-3">
						<SwiperSlide
						// onClick={() => getActuality(actuality.path, actuality.id)}
						>
							<ActuslityCard />
						</SwiperSlide>
					</div>

					<div className="border-0.5 mr-3">
						<SwiperSlide
						// onClick={() => getActuality(actuality.path, actuality.id)}
						>
							<ActuslityCard />
						</SwiperSlide>
					</div>

					<div className="border-0.5 mr-3">
						<SwiperSlide
						// onClick={() => getActuality(actuality.path, actuality.id)}
						>
							<ActuslityCard />
						</SwiperSlide>
					</div>

					<div className="border-0.5 mr-3">
						<SwiperSlide
						// onClick={() => getActuality(actuality.path, actuality.id)}
						>
							<ActuslityCard />
						</SwiperSlide>
					</div>

					<div className="border-0.5 mr-3">
						<SwiperSlide
						// onClick={() => getActuality(actuality.path, actuality.id)}
						>
							<ActuslityCard />
						</SwiperSlide>
					</div>

					<Link href="/actualites">
						<button className="text-teal-700 lg:hidden border-0.5 w-max mt-10 sm:mt-20 font-extralight sm:font-light border-orange-400 text-sm sm:text-base flex items-center px-5 py-2 sm:px-12 sm:py-4">
							Toutes les actualités{" "}
							<BsFillArrowRightCircleFill className="pl-3 text-2xl sm:text-3xl" />
						</button>
					</Link>
				</Swiper>
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
			<SocialSection />
		</div>
	)
}
