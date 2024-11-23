const Footer = () => {
	return (
		<footer className=" bg-[#172755]">
			<section className="flex justify-between container p-7">
				<div>
					<img src="/logo.png" alt="footerLogo" />
				</div>
				<ul className="md:flex hidden gap-5 items-center text-gray-500 ">
					<li>Product</li>
					<li>Pricing Plans</li>
					<li>FAQ</li>
					<li>Blog</li>
				</ul>

				<ul className="flex gap-5 ">
					<li>
						<img src="/Facebook (1).png" alt="Facebook"  className="object-contain"/>
					</li>
					<li>
						<img src="/Instagram (1).png" alt=" Instagram"  className="object-contain"/>
					</li>
					<li>
						<img src="/Twitter (1).png" alt="Twitter" className="object-contain" />
					</li>
				</ul>
			</section>
		</footer>
	);
};

export default Footer;
