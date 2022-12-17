import { useRouter } from "next/router"
import { MdArrowForwardIos } from "react-icons/md"

const ActuslityCard = () => {
	const router = useRouter()
	return (
		<div
			className={`w-full shadow-lg ${
				router.asPath === "/actualites"
					? "xl:w-72"
					: "xl:w-96 sm:mx-2" && router.asPath === "/csp"
					? "w-full sm:w-full"
					: ""
			} flex bg-white flex-col sm:mx-2 items-center sm:w-80 mt-10`}
		>
			{/* Header */}
			<div className="relative overflow-hidden">
				<img
					src="cover.jpg"
					className="hover:scale-110 ease-in duration-200 cursor-pointer"
				/>
				{/* <div className="h-full opacity-0 w-full bg-teal-700 hover:opacity-20 ease-linear duration-200 absolute top-0"></div> */}
				<span className="bg-teal-700 py-3 uppercase font-bold px-8 absolute top-0 right-0 text-white text-sm">
					Article
				</span>
			</div>
			{/* Body */}
			<div className="flex flex-col pt-3 pb-5 px-7">
				<div className="text-sm font-bold">
					<span className="uppercase text-teal-700 mr-1">06. Sept</span>2022
				</div>
				<h2
					className={`font-bold text-2xl pt-2 cursor-pointer ${
						router.asPath === "/actualites" ? "w-full" : "w-5/6"
					} hover:text-teal-700 ease-in`}
				>
					Esther Lynch nova glavna tajnica ETUC-a
				</h2>
				<p className="text-gray-400 pt-3 font-light">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
					sequi unde optio iusto necessitatibus, quia doloremque sint ut error
					dolor beatae illo reiciendis obcaecati in quae earum, aut sunt nemo?
				</p>
				{router.asPath === "/actualites" ? (
					<button className="flex items-center text-teal-700 mt-4 justify-end">
						Lire la suite <MdArrowForwardIos className="ml-2" />
					</button>
				) : null}
			</div>
		</div>
	)
}
export default ActuslityCard
