import ActuslityCard from "../../components/ActualityCard"
import PageHeader from "../../components/PageHeader"
import SocialSection from "../../components/SocialSection"

const Index = () => {
	return (
		<section className="bg-gray-100">
			<PageHeader title="Actualités" />
			<div className="flex flex-col items-center pb-20">
				<div className="flex flex-wrap justify-center px-2 sm:px-3 sm:mt-20 w-full">
					<ActuslityCard />
					<ActuslityCard />
					<ActuslityCard />
					<ActuslityCard />
					<ActuslityCard />
					<ActuslityCard />
					<ActuslityCard />
					<ActuslityCard />
					<ActuslityCard />
					<ActuslityCard />
					<ActuslityCard />
					<ActuslityCard />
				</div>
				<button className="py-3 max-w-max px-6 mt-20 border xl:flex text-teal-700 border-teal-700 duration-200 ease-in text-base hover:text-white hover:bg-teal-700 font-light">
					Next
				</button>
			</div>
			<SocialSection />
		</section>
	)
}

export default Index
