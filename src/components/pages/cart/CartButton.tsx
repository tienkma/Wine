import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartCheckFill, BsFillTelephoneFill } from "react-icons/bs";
import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Notifications } from "../../common/Notifications";
import { Storage } from "../../../utils/local";
import { RouterName } from "../../../routers/RouterName";
import { logout, selectIsLogin } from "../../../redux/silces/authSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/root/hooks";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { selectcartList } from "../../../redux/silces/cartSlide";

const CartButton: React.FC<{ closeSidebar?: () => void }> = (props) => {
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
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 34, height: 34, background: "#f5f5f5" }}>
                <BiUser className="text-background" size={26} />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              sx={{ paddingLeft: 2, paddingRight: 5 }}
              onClick={handleClose}
            >
              <Link
                className="text-background flex items-center"
                to={RouterName.ORDERS}
              >
                <ListItemIcon>
                  <FaUser size={22} className="text-background" />
                </ListItemIcon>
                My account
              </Link>
            </MenuItem>
            <MenuItem
              sx={{ paddingLeft: 2, paddingRight: 5 }}
              onClick={handleClose}
            >
              <Link
                className="text-background flex items-center"
                to={RouterName.ORDERS}
              >
                <ListItemIcon>
                  <BsFillCartCheckFill size={22} className="text-background" />
                </ListItemIcon>
                Your orders
              </Link>
            </MenuItem>
            <MenuItem
              sx={{ paddingLeft: 2, paddingRight: 5 }}
              onClick={() => {
                handleClose();
                console.log("vfhdvdhjvgj");
                dispatch(logout());
                navigation(RouterName.LOGIN);
              }}
            >
              <ListItemIcon>
                <MdLogout size={22} className="text-background" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
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
