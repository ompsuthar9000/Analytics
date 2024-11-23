type Props = {
	title: string;
	paragraph: string;
	imgSrc: string;
	reverse: boolean;
};
const FeaturesDetail = ({ title, imgSrc, paragraph ,reverse}: Props) => {
	return (
		<div className={`flex-col lg:justify-around justify-center items-center flex  ${ reverse ? "md:flex-row-reverse ": "md:flex-row"}`}>
			<article className="flex flex-col justify-center gap-5">
				<h1 className="text-4xl md:text-left text-center font-bold max-w-[30rem] ">
					{title}
				</h1>
				<p className="max-w-[30rem] md:text-left text-center ">{paragraph}</p>
			</article>
			<div className="max-w-[30rem]">
					<img src={imgSrc} alt="chart" className="object-contain " />
				</div>
		</div>
	);
};

export default FeaturesDetail;
