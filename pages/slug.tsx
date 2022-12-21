import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper"
import Link from "next/link"
import { FaCalendarAlt } from "react-icons/fa"
import PageHeader from "../components/PageHeader"
import SocialSection from "../components/SocialSection"

const Slug = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	return (
		<div className="flex flex-col">
			<div className="bg-gray-100 sm:px-10 flex pt-10 pb-20">
				<div className="flex flex-col w-4/6 pr-5">
					<div className="" style={{ maxHeight: "38rem" }}>
						<Swiper
							loop={true}
							spaceBetween={10}
							navigation={true}
							thumbs={{ swiper: thumbsSwiper }}
							modules={[FreeMode, Navigation, Thumbs]}
							className="mySwiper2 pt-5"
						>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpgg" />
							</SwiperSlide>
						</Swiper>
						<Swiper
							// onSwiper={setThumbsSwiper}
							loop={true}
							spaceBetween={10}
							slidesPerView={4}
							freeMode={true}
							watchSlidesProgress={true}
							modules={[FreeMode, Navigation, Thumbs]}
							className="mySwiper"
						>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpg" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="cover.jpgg" />
							</SwiperSlide>
						</Swiper>
					</div>
					<div className="mt-8">
						<h3 className="font-bold text-4xl">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</h3>
						<p className="mt-5 text-gray-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
							corporis magni exercitationem magnam non tenetur harum. Odio
							minima dolores mollitia et inventore ipsa esse? Officia eveniet ex
							illo laudantium sint.
						</p>
						<p className="mt-5 border-l-8 border-teal-700 pl-8">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
							optio? Harum error molestiae a cum tempore doloribus repellat, rem
							consequatur, vero natus laboriosam, at totam suscipit minus neque
							reiciendis possimus? Lorem ipsum, dolor sit amet consectetur
							adipisicing elit. Aperiam eos dolore laboriosam reiciendis
							exercitationem? Delectus ipsa, dignissimos incidunt illo
							perspiciatis provident dicta distinctio aperiam, voluptatibus,
							suscipit et placeat nulla. Tempora! Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Quae, optio? Harum error molestiae a
							cum tempore doloribus repellat, rem consequatur, vero natus
							laboriosam, at totam suscipit minus neque reiciendis possimus?
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
							eos dolore laboriosam reiciendis exercitationem? Delectus ipsa,
							dignissimos incidunt illo perspiciatis provident dicta distinctio
							aperiam, voluptatibus, suscipit et placeat nulla. Tempora!
						</p>
					</div>
				</div>

				<div className="bg-white w-full h-max px-10 pb-10 pt-8 flex flex-col">
					<h3 className="font-bold text-3xl">Dernières nouvelles</h3>
					<Link href={"#"} className="flex mt-8">
						<div className="overflow-hidden w-3/6">
							<img src="cover.jpg" />
						</div>
						<div className="w-3/6 px-5">
							<h4 className="text-teal-700 font-bold flex items-center">
								<FaCalendarAlt className="mr-1" />
								21 Sept 22
							</h4>
							<p className="text-base font-bold">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							</p>
						</div>
					</Link>
				</div>
			</div>
			<SocialSection />
		</div>
	)
}

export default Slug
