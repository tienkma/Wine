import { Link } from "react-router-dom";
import { headerLink } from "../utils/headerLink";
import logo from "../images/logo.png";
import { useHomeContact } from "../context/HomeContext";
import "../css/SideBar.css";
import { FaTimes } from "react-icons/fa";
import CartButton from "./CartButton";

const SideBar = () => {
  const {
    state: { home_navbar },
    closeSidebar,
  } = useHomeContact();
  return (
    <nav id="sideBar" className={`${home_navbar ? "sideBarActive" : null}`}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" onClick={closeSidebar}>
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="nav-links">
          {headerLink.map((link, idx) => {
            const { text, url } = link;
            return (
              <li key={idx} onClick={closeSidebar}>
                <Link to={url} onClick={() => window.scrollTo(0, 0)}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <CartButton closeSidebar={closeSidebar} />
      </div>
    </nav>
  );
};

export default SideBar;
