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

const Slug = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	return (
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
							<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-9.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-10.jpg" />
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
							<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-9.jpg" />
						</SwiperSlide>
						<SwiperSlide>
							<img src="https://swiperjs.com/demos/images/nature-10.jpg" />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="mt-8">
					<h3 className="font-bold text-4xl">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					</h3>
					<p className="mt-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corporis
						magni exercitationem magnam non tenetur harum. Odio minima dolores
						mollitia et inventore ipsa esse? Officia eveniet ex illo laudantium
						sint.
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
	)
}

export default Slug
