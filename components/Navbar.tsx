import Link from "next/link"
import { IoMdMail } from "react-icons/io"
import { TfiYoutube } from "react-icons/tfi"
import { BsTelephoneFill, BsFacebook } from "react-icons/bs"
import { NavItems } from "../utils/navItems"

const Navbar = () => {
	return (
		<nav className="border w-full justify-center flex flex-col sticky -top-16 z-50 ease-in bg-white duration-200">
			<div className="flex justify-end">
				<div className="flex py-5 bg-gray-100 justify-between items-center h-full xl:w-5/6 w-full px-5 sm:px-7">
					<div className="flex gap-x-8 text-xs sm:text-sm font-bold">
						<a href="#" target="_blank" className="flex items-center">
							<IoMdMail className="text-teal-700 mr-2 text-xs sm:text-xl" />
							<span>scp@gmail.com</span>
						</a>
						<a href="#" target="_blank" className="flex items-center">
							<BsTelephoneFill className="text-teal-700 mr-2 text-xs sm:text-xl" />
							<span>+237 645555556</span>
						</a>
					</div>
					<div className="flex gap-x-6 text-sm sm:text-xl text-teal-700">
						<a href="#" className="hidden sm:flex" target="_blank">
							<TfiYoutube className="text-2xl" />
						</a>
						<a href="#" target="_blank">
							<BsFacebook />
						</a>
					</div>
				</div>
			</div>
			<div className="flex py-5 justify-between items-center px-20 sm:px-7">
				<img src="/logo.jpg" alt="" className="w-20" />
				<ol className="text-base flex gap-x-10 font-bold relative items-center">
					{NavItems.map((item, index) => {
						return (
							<Link key={index} href={item.path}>
								<li>{item.title}</li>
							</Link>
						)
					})}
				</ol>
				<Link href={""}>
					<button className="py-3 px-6 border text-white bg-teal-700 font-light">
						Nous rejoindre
					</button>
				</Link>
			</div>
		</nav>
	)
}
export default Navbar
