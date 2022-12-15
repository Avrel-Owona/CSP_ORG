const RegissorCard = () => {
	return (
		<div className="xl:w-96 sm:w-80 w-full border-0.5 shadow-xl flex flex-col items-center pb-8 mt-4 sm:mx-2 mt-10">
			<div className="h-80 w-full overflow-hidden">
				<img
					src={"cover.jpg"}
					className="w-full h-full object-cover"
					alt="regissor-img"
				/>
			</div>
			<h3 className="text-center text-xl text-gray-700 font-medium pt-8">
				Jean-Marc BIKOKO
			</h3>
			<span className="text-gray-400 text-center text-base pt-4 font-light">
				Coordonnateur
			</span>
		</div>
	)
}
export default RegissorCard
