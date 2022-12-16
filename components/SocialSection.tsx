import { FaFacebookF, FaTwitter } from "react-icons/fa"
import { TfiYoutube } from "react-icons/tfi"

const SocialSection = () => {
	return (
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
					<FaFacebookF />
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
					<FaTwitter />
				</a>
			</div>
		</section>
	)
}

export default SocialSection
