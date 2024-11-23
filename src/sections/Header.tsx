import { Menu } from "lucide-react";
import { useState } from "react";
import DropDownMenu from "../components/DropDownMenu";
const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="w-full bg-[#172755] ">
      <nav className=" lg:container flex justify-between items-center p-6 ">
      {menu && <DropDownMenu />}
        <div className="flex justify-center items-center gap-2 ">
          <img src="/Subtract.png" alt="Logo" />
          <h1 className="uppercase font-bold sm:block hidden text-white">analytics</h1>
        </div>
        <ul className="md:flex justify-center items-center gap-3 hidden font-medium px-3 text-gray-400">
          <li>Products</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Blog</li>
        </ul>
        <div className="flex justify-end items-center gap-3 *:rounded-[68px] *:header-button ">
          <button type="button" className="border-none">
            Sign in
          </button>
          <button type="button">
            Sign Up
          </button>
        </div>
        <button
				className="btn btn-square btn-outline md:hidden border-primary-0"
				type="button"
				onClick={() => setMenu((prev) => !prev)}
			>
				<Menu className=" text-white" />
			</button>
      </nav>
    </header>
  );
};

export default Header;
