import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/home/logo.png";
import CartButton from "../pages/cart/CartButton";
import HeaderLink from "./HeaderLink";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" fixed w-full bg-background z-[1070] h-20" >
      <div className="container mx-auto flex justify-between items-center h-full">
      <Link to="/" className="logo h-full">
        <img className="h-full" src={logo} alt="logo" />
      </Link>

      {/* <button className="text-3xl border-none outline-none cursor-pointer font-bold text-white bg-slate-600 ">
        <AiOutlineMenu />
      </button> */}

      <HeaderLink />
      <CartButton />
      </div>
    </header>
  );
};

export default Header;
