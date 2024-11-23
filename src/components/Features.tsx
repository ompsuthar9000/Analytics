type Props = {
	imgSrc: string;
	title: string;
	paragraph: string;
};
const Features = ({ imgSrc, title, paragraph }: Props) => {
	return (
		<div className="text-center gap-4 items-center justify-center flex-col flex ">
			<img src={imgSrc} alt="icon" className="object-contain" />
			<h1 className="font-bold text-black text-xl"> {title}</h1>
			<p>{paragraph}</p>
		</div>
	);
};

export default Features;
