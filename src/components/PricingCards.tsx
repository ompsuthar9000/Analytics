type Props = {
	title: string;
	users: string;
	price: number;
	transperent:boolean
};
const PricingCards = ({ title, users, price ,transperent }: Props) => {
	return (
		<div className={`card card-compact max-w-[21.25rem] ${transperent ? "bg-primary text-white":"bg-base-100" } bg-base-100 shadow-xl rounded-2xl border`}>
			<div className="card-body items-center gap-5 justify-between ">
				<div className="flex flex-col justify-center items-center p-5 gap-1 border-b">
					<h2 className="card-title ">{title}</h2>
					<p className="text-[#8794BA] text-xs">{users}</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-[2.5rem] font-bold">
						<span className="text-base">$</span>
						{price}
					</h1>
					<p className="text-[#8794BA] text-xs">per month</p>
				</div>

				<div className="card-actions justify-end">
					<button
						type="button"
						className={`btn ${transperent ? "bg-transparent" : "bg-[#EF2A82]"}  w-[206px] rounded-full text-white`}
					>
						Order
					</button>
				</div>
			</div>
		</div>
	);
};

export default PricingCards;
