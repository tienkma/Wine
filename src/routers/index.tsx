import CreateUserPage from "../pages/CreateUser";
import CreateProductPage from "../pages/CreateProduct";
import { AdminInboxPage } from "../pages/AdminInboxPage";
import AdminProductPage from "../pages/AdminProduct";
import AdminPage from "../pages/AdminPage";
// import ReactQueryUserProvider from "../pages/AdminUserPage";
import { RouterName } from "./RouterName";
import { lazy } from "react";
const HomePage = lazy(() => import("../pages/HomePage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const WineItemPage = lazy(() => import("../pages/WineItemPage"));
const CartPage = lazy(() => import("../pages/CartPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const HelpPage = lazy(() => import("../pages/HelpPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const Register = lazy(() => import("../pages/Register"));
const OrderPage = lazy(() => import("../pages/OrderPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));

export const routers = [
  { path: RouterName.HOME, component: <HomePage /> },
  { path: RouterName.PRODUCTS, component: <ProductsPage /> },
  { path: RouterName.HELP, component: <HelpPage /> },
  { path: RouterName.PRODUCT_DETAIL, component: <WineItemPage /> },
  { path: RouterName.CART, component: <CartPage /> },
  { path: RouterName.ABOUT, component: <AboutPage /> },
  { path: RouterName.CONTACT, component: <ContactPage /> },
  { path: RouterName.ORDERS, component: <OrderPage /> },
  { path: RouterName.CHECKOUT, component: <CheckoutPage /> },
];

export const routersNoLayout = [
  { path: RouterName.ERROR, component: <ErrorPage /> },
  { path: RouterName.LOGIN, component: <LoginPage /> },
  { path: RouterName.REGISTER, component: <Register /> },
];

export const routerAdmin = [
  // { path: RouterName.ADMIN, component: <AdminPage /> },
  // { path: RouterName.ADMIN_PRODUCTS, component: <AdminProductPage /> },
  // { path: RouterName.ADMIN_USERS, component: <ReactQueryUserProvider /> },
  // { path: RouterName.ADMIN_INBOX, component: <AdminInboxPage /> },
  // { path: RouterName.ADMIN_PRODUCTS_DETAIL, component: <CreateProductPage /> },
  // { path: RouterName.ADMIN_USERS_DETAIL, component: <CreateUserPage /> },
];
