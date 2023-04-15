import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const CartButton: React.FC<{ closeSidebar?: () => void }> = (props) => {
  // const {
  //   state: { isLogin },
  //   setIsLogin,
  // } = useHomeContact();
  // const {
  //   state: { listCart },
  // } = useCartContext();
  // const {
  //   state: { role, users },
  //   setLogoutUser,
  // } = UseUserContext();
  // const jsonUser = JSON.stringify(users);
  // useEffect(() => {
  //   if (Object.keys(users).length === 0) {
  //     setIsLogin(false);
  //   }
  // }, [jsonUser]);
  const isLogin = true
  const role = 'user'
  const navigation = useNavigate();
  const users = {name: "tien"}
  return (
    <div className="header_info flex">
      <div className="header_info-item">
        <p className="header-icon text-white">
          <BsFillTelephoneFill />
        </p>
        <div className="header-sp">
          <div className="header-sp_top">
            <a href="tel:+18006012">support</a>
          </div>
          <p className="header-sp_bottom text-white">1800 6012</p>
        </div>
      </div>
      <div className="header_info-item">
        <p className="header-icon text-white">
          {!isLogin ? <FiUserPlus /> : <FiUserMinus />}
        </p>
        <div className="header-sp">
          <div className="header-sp_top">
            {/* //TODO logout */}
            <Link
              to="/login"
              onClick={(e) => {
                props.closeSidebar && props.closeSidebar();
                if (isLogin) {
                  e.preventDefault();
                  navigation("/", {replace: true});
                  // setLogoutUser();
                }
              }}
            >
              {isLogin ? "logout" : "Login"}
            </Link>
          </div>
          {isLogin ? (
            <Link
              to={role === "user" ? "/user" : "/admin"}
              className="header-sp_bottom"
            >{`${users?.name}`}</Link>
          ) : (
            <p className="header-sp_bottom">Customer</p>
          )}
        </div>
      </div>
      <div className="header_info-item">
        <Link
          to="/cart"
          className="header-cart_icon"
          onClick={props.closeSidebar}
        >
          <AiOutlineShoppingCart />
        </Link>
        {/* {getLocal("users") ? (
          <p className="header-count-cart">{listCart.length}</p>
        ) : (
          <></>
        )} */}
      </div>
    </div>
  );
};

export default CartButton;
