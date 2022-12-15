import { useEffect, useState } from "react"
import { sliderItems } from "../utils/sliderItems"

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(0)
	let slideInterval: any
	let intervalTime = 5000
	const sliderLength = sliderItems.length
	const autoScroll = true

	const nextSlide = () => {
		setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1)
	}
	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? sliderLength - 1 : currentSlide - 1)
	}

	useEffect(() => {
		setCurrentSlide(0)
	}, [])

	useEffect(() => {
		if (autoScroll) {
			auto()
		}
		return () => clearInterval(slideInterval)
	}, [currentSlide])

	function auto() {
		slideInterval = setInterval(nextSlide, intervalTime)
	}
	return (
		<div className="w-full header-home overflow-hidden flex items-center relative">
			<div className="absolute text-white z-10 ml-10 sm:ml-20">
				<h3 className="text-4xl sm:text-6xl uppercase title-home relative font-bold">
					Ensemble <br /> Nous sommes <br />
					plus fort
				</h3>
			</div>
			<div className="absolute h-full w-full bg-black opacity-20"></div>

			<img src="cover.jpg" alt="" className="w-full object-cover" />
		</div>
	)
}
export default Slider
