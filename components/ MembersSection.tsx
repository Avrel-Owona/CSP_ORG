import Link from "next/link"
import { FaFacebookF, FaTwitter } from "react-icons/fa"
import { TfiYoutube } from "react-icons/tfi"

const MembersSection = () => {
	return (
		<section className="bg-teal-700 overflow-hidden relative w-full py-10 sm:py-16 xl:py-24 flex flex-col justify-center sm:justify-around items-start px-5 sm:px-10 xl:px-20">
			<h3 className="uppercase relative after:bottom-4 sm:afer:bottom-4 xl:after:bottom-6 after:-left-3 z-40 text-2xl sm:text-4xl xl:text-5xl after:content-[''] after:h-7 sm:after:h-12 after:w-60 sm:after:w-96 after:bg-black text-white after:-z-10 after:absolute font-bold">
				PRENDS LA CHOSE
				<br />
				DANS TES MAINS
			</h3>
			<div className="flex flex-col text-gray-200 z-40 font-light sm:w-4/6 xl:w-3/6 mt-10">
				<p className="text-xl">
					Uniquement organisés en syndicat, les travailleurs peuvent négocier
					collectivement avec l'employeur au sujet de leurs salaires et
					conditions de travail, et organiser une grève s'ils ne peuvent
					s'entendre sur ces questions avec lui.
				</p>
				<Link href={""} className="mt-10">
					<button className="py-3 px-6 border z-50 flex text-teal-700 bg-white font-light">
						Nous rejoindre
					</button>
				</Link>
			</div>

			<img
				src="mili.png"
				className="absolute -bottom-10 right-0 w-full sm:w-5/6 z-10 opacity-30"
			/>
		</section>
	)
}

export default MembersSection
