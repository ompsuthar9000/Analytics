import Features from "../components/Features";
import { fetures } from "./../constants/data";
const MainFeatures = () => {
	return (
		<section className="container flex flex-col gap-5 py-10">
			<div className="flex flex-col justify-center items-center gap-3">
				<h1 className="text-4xl font-bold">Main Features</h1>
				<p className="text-gray-500 text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
					nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
					nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
					pulvinar sit amet. Id vel in nam malesuada
				</p>
			</div>
			<div className="flex justify-between items-center md:flex-row flex-col text-gray-500 gap-5">
				{fetures.map((el) => {
					return (
						<Features
							key={el.id}
							imgSrc={el.imgSrc}
							title={el.title}
							paragraph={el.paragraph}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default MainFeatures;
