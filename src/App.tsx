import "./styles/index.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import MainFeatures from "./sections/MainFeatures";
import DetailFeatures from "./sections/DeatilFetures";
import PricingPlans from "./sections/PricingPlans";
import Footer from "./sections/Footer";

function App() {
	return (
		<main className=" space-y-6">
			<div>
				<Header />
				<Hero />
			</div>
			<MainFeatures />
			<DetailFeatures />
			<div>
				<PricingPlans />
				<Footer />
			</div>
		</main>
	);
}

export default App;
