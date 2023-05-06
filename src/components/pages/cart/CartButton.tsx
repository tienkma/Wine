import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
      <div className="header_info-item items-center px-5 py-1.5 flex">
        <Link
          to="/cart"
          className="header-cart_icon text-white cursor-pointer font-bold text-4xl relative"
          onClick={props.closeSidebar}
        >
          <AiOutlineShoppingCart />
          <span className="absolute w-6 h-6 bg-red-600 rounded-full center -top-2 text-sm -right-2">3</span>
        </Link>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
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
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
        {/* {getLocal("users") ? (
          <p className="header-count-cart">{listCart.length}</p>
        ) : (
          <></>
        )} */}
      </div>
  );
};

export default CartButton;
