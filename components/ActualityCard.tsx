const ActuslityCard = () => {
	return (
		<div className="w-full border flex bg-white flex-col items-center sm:w-80 xl:w-96 sm:mx-2 mt-10">
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
			<div className="flex flex-col pt-3 pb-10 px-7">
				<div className="text-sm font-bold">
					<span className="uppercase text-teal-700 mr-1">06. Sept</span>2022
				</div>
				<h2 className="font-bold text-2xl pt-2 cursor-pointer w-5/6 hover:text-teal-700 ease-in">
					Esther Lynch nova glavna tajnica ETUC-a
				</h2>
				<p className="text-gray-400 pt-3 font-light">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
					sequi unde optio iusto necessitatibus, quia doloremque sint ut error
					dolor beatae illo reiciendis obcaecati in quae earum, aut sunt nemo?
				</p>
			</div>
		</div>
	)
}
export default ActuslityCard
