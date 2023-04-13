import "../css/header.css";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../images/logo.png";
import CartButton from "./CartButton";
import HeaderLink from "./HeaderLink";
import { Link } from "react-router-dom";
import { useHomeContact } from "../context/HomeContext";

const Header = () => {
  const { openSidebar } = useHomeContact();
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      <button onClick={openSidebar}>
        <AiOutlineMenu />
      </button>

      <HeaderLink />
      <CartButton />
    </header>
  );
};

export default Header;
