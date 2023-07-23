import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/home/logo.png";

import { FaTimes } from "react-icons/fa";
import CartButton from "./pages/cart/CartButton";
import { headerLink } from "../utils/listLink";
import { useAppDispatch, useAppSelector } from "../redux/root/hooks";
import {
  changeActiveNav,
  selectHomeActiveNav,
} from "../redux/silces/homeSlide";
import React from "react";
import { selectcartList } from "../redux/silces/cartSlide";
import { logout, selectIsLogin } from "../redux/silces/authSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Avatar, IconButton, Menu, Tooltip } from "@mui/material";
import { BiUser } from "react-icons/bi";
import { FiUserMinus, FiUserPlus } from "react-icons/fi";
import { RouterName } from "../routers/RouterName";

const SideBar = () => {
  const activeNav = useAppSelector(selectHomeActiveNav);
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const listCart = useAppSelector(selectcartList);

  const isLogin = useAppSelector(selectIsLogin);
  return (
    <nav
      id="sideBar"
      className={`${
        activeNav ? "!translate-x-0" : ""
      } fixed z-[30] top-0 right-0 left-0 h-screen lg:!hidden -translate-x-full bg-white transition-all`}
    >
      <div className="nav-center">
        <div className="nav-header flex h-[100px] justify-between px-5 py-2.5 mb-5">
          <Link to="/">
            <img className="h-full" src={logo} alt="logo" />
          </Link>
          <button
            type="button"
            className="nav-toggle text-2xl text-red-500 bg-transparent"
            onClick={() => dispatch(changeActiveNav(false))}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="nav-links">
          {headerLink.map((link, idx) => {
            const { text, url } = link;
            return (
              <li key={idx} className="hover:bg-[#dfedff] group ">
                <Link
                  to={url}
                  className="px-4 py-4 capitalize text-background group-hover:pl-8 cursor-pointer transition-all block"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    dispatch(changeActiveNav(false));
                  }}
                >
                  {text}
                </Link>
              </li>
            );
          })}
          {isLogin ? (
            <>
              <li className="hover:bg-[#dfedff] group ">
                <Link
                  to={RouterName.ORDERS}
                  className="px-4 py-4 capitalize text-background group-hover:pl-8 cursor-pointer transition-all block"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    dispatch(changeActiveNav(false));
                  }}
                >
                  Your order
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
        <div className="header_info-item items-start px-5 py-1.5 flex h-full  flex-col">
          {/* <Notifications /> */}
          <Link
            to="/cart"
            className="header-cart_icon text-background/80 cursor-pointer font-bold text-4xl relative"
            onClick={() => dispatch(changeActiveNav(false))}
          >
            <AiOutlineShoppingCart />
            <span className="absolute w-6 h-6 bg-red-600 text-white rounded-full center -top-2 text-sm -right-2">
              {listCart.length}
            </span>
          </Link>

          {isLogin ? (
            <>
              <Tooltip title="Logout">
                <Link
                  to={RouterName.LOGIN}
                  onClick={() => {
                    dispatch(changeActiveNav(false));
                    dispatch(logout());
                  }}
                >
                  <FiUserMinus
                    className="text-background/80 mt-2 cursor-pointer"
                    size={32}
                  />
                </Link>
              </Tooltip>
            </>
          ) : (
            <Tooltip title="Login">
              <Link
                to={RouterName.LOGIN}
                onClick={() => {
                  dispatch(changeActiveNav(false));
                }}
              >
                <FiUserPlus
                  className="text-background/80 mt-2 cursor-pointer"
                  size={32}
                />
              </Link>
            </Tooltip>
          )}
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
