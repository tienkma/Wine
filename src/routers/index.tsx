import {HomePage} from "../pages/HomePage";
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
export const RouterName = {
  HOME: "/",
  PRODUCTS: "/products",
  PRODUCT_CREATE: "/products/create",
  USER_CREATE: "/user/create",
  PRODUCT_DETAIL: "/products/:id",
  CART: "/cart",
  ABOUT: "/about",
  LOGIN: "/login",
  ADMIN: "/admin",
  USER: "/user",
  ERROR: '/*',
};



export const routers = [
  
  { path: RouterName.HOME, component: <HomePage /> },
  { path: RouterName.PRODUCTS, component: <ProductsPage /> },
  { path: RouterName.PRODUCT_CREATE, component: <CreateProduct /> },
  { path: RouterName.USER_CREATE, component: <CreateUser /> },
  { path: RouterName.PRODUCT_DETAIL, component: <WineItemPage /> },
  { path: RouterName.CART, component: <CartPage /> },
  { path: RouterName.ABOUT, component: <AboutPage /> },
  { path: RouterName.LOGIN, component: <LoginPage /> },
  { path: RouterName.ADMIN, component: <AdminPage /> },
  { path: RouterName.USER, component: <UserPage /> },
  { path: RouterName.ERROR, component: <ErrorPage /> },
];

