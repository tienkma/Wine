import { RouterName } from "../routers/RouterName";
import { TbPlaystationSquare } from "react-icons/tb";

export const headerLink = [
  { url: "/", text: "home" },
  { url: "/products", text: "products" },
  { url: "/about", text: "about" },
  { url: "/help", text: "help" },
  { url: "/contact", text: "contact" },
  // { url: "/admin", text: "admin" },
];

export const linkAdminPage = [
  {
    url: RouterName.ADMIN,
    text: "Dashboard",
    icon: <TbPlaystationSquare size={22} />,
  },
  {
    url: RouterName.ADMIN_PRODUCTS,
    text: "Products",
    icon: <TbPlaystationSquare size={22} />,
  },
  {
    url: RouterName.ADMIN_INBOX,
    text: "Inbox",
    icon: <TbPlaystationSquare size={22} />,
  },
  {
    url: RouterName.ADMIN_USERS,
    text: "Users",
    icon: <TbPlaystationSquare size={22} />,
  },
];
