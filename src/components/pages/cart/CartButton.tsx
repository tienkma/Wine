import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartCheckFill, BsFillTelephoneFill } from "react-icons/bs";
import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { RouterName } from "../../../routers/RouterName";
import { logout, selectIsLogin } from "../../../redux/silces/authSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/root/hooks";
import { MdLogout } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { selectcartList } from "../../../redux/silces/cartSlide";
import { Menu, Transition } from "@headlessui/react";

const CartButton: React.FC<{ closeSidebar?: () => void }> = (props) => {
  const listCart = useAppSelector(selectcartList);

  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(selectIsLogin);
  return (
    <div className="header_info-item items-center px-5 py-1.5 flex h-full">
      {/* <Notifications /> */}
      <Link
        to="/cart"
        className="header-cart_icon text-white cursor-pointer font-bold text-4xl relative"
        onClick={props.closeSidebar}
      >
        <AiOutlineShoppingCart />
        <span className="absolute w-6 h-6 bg-red-600 rounded-full center -top-2 text-sm -right-2">
          {listCart.length}
        </span>
      </Link>

      {isLogin ? (
        <>
          <div className="relative inline-block">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-sm font-semibold text-gray-900 shadow-sm ml-2">
                  <Tooltip title="Account settings">
                    <>
                      <Avatar
                        sx={{ width: 34, height: 34, background: "#f5f5f5" }}
                      >
                        <BiUser className="text-background" size={26} />
                      </Avatar>
                    </>
                  </Tooltip>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 min-w-[180px] mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={RouterName.ORDERS}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } flex px-4 py-2 text-sm w-full gap-2`}
                        >
                          <BsFillCartCheckFill
                            size={22}
                            className="text-background"
                          />
                          <p>Your orders</p>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={RouterName.LOGIN}
                          onClick={() => dispatch(logout())}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } flex px-4 py-2 text-sm w-full gap-2`}
                        >
                          <MdLogout size={22} className="text-background" />
                          <p>Logout</p>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </>
      ) : (
        <Tooltip title="Login">
          <Link to={RouterName.LOGIN}>
            <FiUserPlus className="text-white ml-4 cursor-pointer" size={32} />
          </Link>
        </Tooltip>
      )}
    </div>
  );
};

export default CartButton;
