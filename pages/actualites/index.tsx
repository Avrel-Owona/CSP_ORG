import ActuslityCard from "../../components/ActualityCard"
import PageHeader from "../../components/PageHeader"

const Index = () => {
	return (
		<div>
			<PageHeader title="Actualités" />
			<div className="flex flex-col items-center">
				<div className="flex flex-wrap justify-center px-2 sm:px-3 sm:mt-20 w-full">
					<ActuslityCard />
					<ActuslityCard />
					<ActuslityCard />
					<ActuslityCard />
					<ActuslityCard />
					<ActuslityCard />
				</div>
				<button className="py-3 max-w-max px-6 mt-20 border xl:flex text-teal-700 border-teal-700 duration-200 ease-in text-base hover:text-white hover:bg-teal-700 font-light">
					Toutes les Actualités
				</button>
			</div>
		</div>
	)
}

export default Index
