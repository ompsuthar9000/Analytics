import FeaturesDetail from "../components/FeaturesDetail";
import {feturesDetail} from "./../constants/data"
const DetailFeatures = () => {
	return (
		<section className="container flex flex-col justify-center *:flex  *:gap-5">
			{feturesDetail.map((el )=>{
                
                return <FeaturesDetail key={el.id} title={el.title} imgSrc={el.imgSrc} paragraph={el.paragraph} reverse={el.reverse}  />
            })}
		</section>
	);
};

export default DetailFeatures;
