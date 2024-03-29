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
import ActuslityCard from "../components/ActualityCard"
import PageHeader from "../components/PageHeader"
import SocialSection from "../components/SocialSection"

const Csp = () => {
	return (
		<>
			<section className="bg-gray-100">
				<PageHeader title="Qui nous sommes" />
				<section className="flex px-5 sm:px-7 mt-20">
					<div className="w-3/6 relative">
						<img
							src="cover.jpg"
							className="top-32 sticky w-full object-cover after:content-[''] after:absolute after:-left-4 after:h-20 after:w-20 after:bg-teal-700"
						/>
					</div>
					<div className="flex w-3/6 flex-col pl-5">
						<h3 className="font-bold text-5xl">En bref sur la CSP</h3>
						<h2 className="italic text-3xl font-medium mt-8">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Inventore, sunt atque nemo et harum dolorum aspernatur!
						</h2>
						<p className="mt-5 text-base text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
							qui veniam, natus commodi non necessitatibus quis deserunt ipsum
							magnam libero sapiente obcaecati, dolor quasi explicabo alias nemo
							doloremque velit aspernatur. Lorem ipsum, dolor sit amet
							consectetur adipisicing elit. Veniam, commodi qui. Reprehenderit
							voluptatibus ratione cum nisi. Quia quisquam quas dolorum
							voluptate a voluptatum, iusto nisi reiciendis, assumenda officiis
							enim? Laboriosam! Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Quas veniam dolorem laboriosam velit
							necessitatibus. Facilis impedit repellendus officiis sapiente
							magnam sint facere, distinctio optio suscipit quisquam laborum
							maiores. Iure, quam!
						</p>
						<p className="mt-5 border-l-8 border-teal-700 pl-8">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
							optio? Harum error molestiae a cum tempore doloribus repellat, rem
							consequatur, vero natus laboriosam, at totam suscipit minus neque
							reiciendis possimus? Lorem ipsum, dolor sit amet consectetur
							adipisicing elit. Aperiam eos dolore laboriosam reiciendis
							exercitationem? Delectus ipsa, dignissimos incidunt illo
							perspiciatis provident dicta distinctio aperiam, voluptatibus,
							suscipit et placeat nulla. Tempora!
						</p>
						<p className="mt-5 text-base text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
							qui veniam, natus commodi non necessitatibus quis deserunt ipsum
							magnam libero sapiente obcaecati, dolor quasi explicabo alias nemo
							doloremque velit aspernatur. Lorem ipsum, dolor sit amet
							consectetur adipisicing elit. Veniam, commodi qui. Reprehenderit
							voluptatibus ratione cum nisi. Quia quisquam quas dolorum
							voluptate a voluptatum, iusto nisi reiciendis, assumenda officiis
							enim? Laboriosam! Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Quas veniam dolorem laboriosam velit
							necessitatibus. Facilis impedit repellendus officiis sapiente
							magnam sint facere, distinctio optio suscipit quisquam laborum
							maiores. Iure, quam!
						</p>
					</div>
				</section>
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
				<SocialSection />
			</section>
		</>
	)
}

export default Csp
