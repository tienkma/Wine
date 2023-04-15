import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../css/SideBar.css";
import { FaTimes } from "react-icons/fa";
import CartButton from "./CartButton";
import { headerLink } from "../utils/headerLink";

const SideBar = () => {

  return (
    <nav id="sideBar" >
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" >
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-toggle">
            <FaTimes />
          </button>
        </div>
        <ul className="nav-links">
          {headerLink.map((link, idx) => {
            const { text, url } = link;
            return (
              <li key={idx} >
                <Link to={url} onClick={() => window.scrollTo(0, 0)}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <CartButton  />
      </div>
    </nav>
  );
};

export default SideBar;
