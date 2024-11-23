
const Hero = () => {
  return (
    <section className=" border-b-[10px]  border-[#EF2A82] bg-primary">
			<div className="flex w-full md:justify-between items-center justify-center pb-5 container">
				<div className="text-white flex flex-col gap-5 md:items-start items-center justify-center md:pl-10 p-5">
					<h1 className="max-w-[28rem]  lg:text-[2.4rem] text-[1.9rem] font-medium ">
						Monitor your business on real-time dashboard
					</h1>
					<p className="max-w-[28rem] text-sm text-[#8794BA]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
						nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
						vitae nibh nunc mattis imperdiet sed nullam.
					</p>
					<button
						type="button"
						className="md:w-[14rem] bg-[#EF2A82] h-[3rem] rounded-[68px] w-full"
					>
						Try for free
					</button>
				</div>
				<div className="md:flex justify-center items-center lg:max-w-[40rem] md:max-w-[30rem]  hidden">
					<img
						src="/Group 10.png"
						alt="small chart"
						loading="eager"
						className="object-contain z-50 "
					/>
				</div>
			</div>
		</section>
  )
}

export default Hero