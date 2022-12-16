type PageHeaderType = {
	title: string
	cover?: string
}

const PageHeader = ({ title, cover }: PageHeaderType) => {
	return (
		<div className="w-full header-home overflow-hidden flex items-center relative">
			<div className="absolute text-white z-10 ml-10 sm:ml-20">
				<h3 className="uppercase relative after:bottom-0 sm:after:-bottom-2 after:-left-3 z-40 text-2xl sm:text-5xl after:content-[''] after:h-4 sm:after:h-7 after:w-44 sm:after:w-80 after:bg-teal-700 after:-z-10 after:absolute font-bold pt-20">
					{title}
				</h3>
			</div>
			<div className="absolute h-full w-full bg-black opacity-20"></div>

			<img
				src={cover ? cover : "cover.jpg"}
				alt=""
				className="w-full object-cover"
			/>
		</div>
	)
}

export default PageHeader
