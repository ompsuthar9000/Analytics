import PricingCards from "../components/PricingCards";
import { pricingPlanContent } from "../constants/data";

const PricingPlans = () => {
	return (
		<section className="w-full bg-[#172755] pt-5 pb-10 border-t-[10px]  border-[#EF2A82]">
			<div className="container flex flex-col justify-center items-center text-white gap-10">
				<h1 className="text-2xl font-medium">Pricing Plans </h1>
				<p className="text-center text-[#8794BA] max-w-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing itemit. itemementum
					nisi aliquet volutpat pitemlentesque volutpat est.
				</p>
				<div className=" gap-6 flex justify-center text-black items-center min-[814px]:flex-wrap flex-nowrap md:flex-row flex-col">
					{pricingPlanContent.map((item) => {
						return <PricingCards key={item.id} {...item} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default PricingPlans;
