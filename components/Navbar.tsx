import Link from "next/link"
import { IoMdMail } from "react-icons/io"
import { TfiYoutube } from "react-icons/tfi"
import { BsTelephoneFill, BsFacebook } from "react-icons/bs"
import { NavItems } from "../utils/navItems"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"

const Navbar = () => {
	const [toggle, setToggle] = useState<boolean>(false)
	return (
		<nav className="w-full justify-center shadow-xl flex flex-col sticky -top-10 z-50 ease-in bg-white duration-200">
			<div className="flex justify-end">
				<div className="flex py-2 bg-gray-100 justify-between items-center h-full w-full px-5 sm:px-7">
					<div className="flex gap-x-5 sm:gap-x-8 text-xs sm:text-sm font-bold">
						<a href="#" target="_blank" className="flex items-center">
							<IoMdMail className="text-teal-700 mr-2 text-xs sm:text-xl" />
							<span>csp@gmail.com</span>
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
			<div className="flex relative py-5 justify-between items-center px-5 sm:px-7">
				<img src="/logo.jpg" alt="" className="w-20" />
				<ol className="text-base hidden xl:flex gap-x-10 font-bold relative items-center">
					{NavItems.map((item, index) => {
						return (
							<Link key={index} href={item.path}>
								<li>{item.title}</li>
							</Link>
						)
					})}
				</ol>
				{toggle ? (
					<ol className="text-base bg-gray-100 xl:hidden flex flex-col absolute gap-x-10 font-bold left-0 top-24 w-full items-start">
						{NavItems.map((item, index) => {
							return (
								<Link key={index} className="w-full h-full" href={item.path}>
									<li className="border-b-2 border-gray-200 py-6 w-full px-5 sm:px-7">
										{item.title}
									</li>
								</Link>
							)
						})}
						<Link className="w-full h-full" href={"#"}>
							<li className="text-white bg-teal-700 py-6 w-full px-5 sm:px-7">
								Nous rejoindre
							</li>
						</Link>
					</ol>
				) : null}
				<Link href={""}>
					<button className="py-3 px-6 border hidden xl:flex text-white bg-teal-700 font-light">
						Nous rejoindre
					</button>
				</Link>
				<button
					onClick={() => setToggle(!toggle)}
					className="xl:hidden text-4xl"
				>
					<GiHamburgerMenu />
				</button>
			</div>
		</nav>
	)
}
export default Navbar
