import { useState } from 'react'
import './App.css'
import './scss/tailwindBase.scss'
import Button from '@mui/material/Button'
import { ToastContainer } from "react-toastify";
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CreateProduct from './pages/CreateProduct'
import CreateUser from './pages/CreateUser'
import WineItemPage from './pages/WineItemPage'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import UserPage from './pages/UserPage'
import ErrorPage from './pages/ErrorPage'
import { RouterName } from './routers'


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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>page</h1>
    <Routes>
      {
        routers.map((router) => {
          return <Route path={router.path} element={router.component as any} key={router.path} />
        })
      }
      </Routes>
      <PortableComponent />
    </>
  )
}

const PortableComponent = () => {
  return (
    <>
      <ToastContainer />
    </>
  );
};

export default App
