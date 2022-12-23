import Link from "next/link"
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
const Footer = () => {
	return (
		<footer
			className={`py-7 lg:py-8 flex justify-center items-center text-sm sm:text-center bg-gray-100 w-full text-gray-500 px-20 lg:px-32`}
		>
			<span className="mt-6 w-full lg:mt-0 sm:w-72 xl:w-max text-center lg:text-start">
				CSP © {new Date().getFullYear()} - Tous droits réservés
			</span>
		</footer>
	)
}
export default Footer
