import { HomePage } from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CreateProductPage from "../pages/CreateProduct";
import CreateUserPage from "../pages/CreateUser";
import WineItemPage from "../pages/WineItemPage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";
import HelpPage from "../pages/HelpPage";
import { ContactPage } from "../pages/ContactPage";
import { AdminInboxPage } from "../pages/AdminInboxPage";
import AdminProductPage from "../pages/AdminProduct";
import { RouterName } from "./RouterName";
import ReactQueryUserProvider from "../pages/AdminUserPage";

export const routers = [
  { path: RouterName.HOME, component: <HomePage /> },
  { path: RouterName.PRODUCTS, component: <ProductsPage /> },
  { path: RouterName.HELP, component: <HelpPage /> },
  { path: RouterName.PRODUCT_DETAIL, component: <WineItemPage /> },
  { path: RouterName.CART, component: <CartPage /> },
  { path: RouterName.ABOUT, component: <AboutPage /> },
  { path: RouterName.CONTACT, component: <ContactPage /> },
];

export const routersNoLayout = [
  { path: RouterName.ERROR, component: <ErrorPage /> },
  { path: RouterName.LOGIN, component: <LoginPage /> },
];

export const routerAdmin = [
  { path: RouterName.ADMIN, component: <AdminPage /> },
  { path: RouterName.ADMIN_PRODUCTS, component: <AdminProductPage /> },
  { path: RouterName.ADMIN_USERS, component: <ReactQueryUserProvider /> },
  { path: RouterName.ADMIN_INBOX, component: <AdminInboxPage /> },
  { path: RouterName.ADMIN_PRODUCTS_DETAIL, component: <CreateProductPage /> },
  { path: RouterName.ADMIN_USERS_DETAIL, component: <CreateUserPage /> },
];
