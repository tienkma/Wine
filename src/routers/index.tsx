import { HomePage } from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CreateProduct from "../pages/CreateProduct";
import CreateUser from "../pages/CreateUser";
import WineItemPage from "../pages/WineItemPage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";
import UserPage from "../pages/UserPage";
import ErrorPage from "../pages/ErrorPage";
import HelpPage from "../pages/HelpPage";
import { ContactPage } from "../pages/ContactPage";
import { AdminInboxPage } from "../pages/AdminInboxPage";

export const RouterName = {
  HOME: "/",
  PRODUCTS: "/products",
  PRODUCT_CREATE: "/products/create",
  USER_CREATE: "/user/create",
  PRODUCT_DETAIL: "/products/:id",
  CART: "/cart",
  ABOUT: "/about",
  LOGIN: "/login",
  USER: "/user",
  HELP: "/help",
  CONTACT: "/contact",
  ADMIN: "/admin",
  ADMIN_ORDERS: "/admin/order",
  ADMIN_USERS: "/admin/users",
  ADMIN_INBOX: "/admin/inbox",
  ERROR: "/*",
};

export const routers = [
  { path: RouterName.HOME, component: <HomePage /> },
  { path: RouterName.PRODUCTS, component: <ProductsPage /> },
  { path: RouterName.PRODUCT_CREATE, component: <CreateProduct /> },
  { path: RouterName.USER_CREATE, component: <CreateUser /> },
  { path: RouterName.HELP, component: <HelpPage /> },
  { path: RouterName.PRODUCT_DETAIL, component: <WineItemPage /> },
  { path: RouterName.CART, component: <CartPage /> },
  { path: RouterName.ABOUT, component: <AboutPage /> },
  { path: RouterName.USER, component: <UserPage /> },
  { path: RouterName.CONTACT, component: <ContactPage /> },
];

export const routersNoLayout = [
  { path: RouterName.ERROR, component: <ErrorPage /> },
  { path: RouterName.LOGIN, component: <LoginPage /> },
];

export const routerAdmin = [
  { path: RouterName.ADMIN, component: <AdminPage /> },
  { path: RouterName.ADMIN_ORDERS, component: <AdminPage /> },
  { path: RouterName.ADMIN_USERS, component: <AdminPage /> },
  { path: RouterName.ADMIN_INBOX, component: <AdminInboxPage /> },
];
