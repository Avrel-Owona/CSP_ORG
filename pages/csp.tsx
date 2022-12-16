import PageHeader from "../components/PageHeader"

const Csp = () => {
	return (
		<>
			<PageHeader title="Qui nous sommes" />
			<div className="flex px-5 sm:px-7 mt-20">
				<img
					src="cover.jpg"
					className="w-3/6 relative after:content-[''] after:absolute after:-left-4 after:h-20 after:w-20 after:bg-teal-700"
				/>
				<div className="flex flex-col pl-5">
					<h3 className="font-bold text-5xl">En bref sur la CSP</h3>
					<p className="mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta qui
						veniam, natus commodi non necessitatibus quis deserunt ipsum magnam
						libero sapiente obcaecati, dolor quasi explicabo alias nemo
						doloremque velit aspernatur.
					</p>
				</div>
			</div>
		</>
	)
}

export default Csp
