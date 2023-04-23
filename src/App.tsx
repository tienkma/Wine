import { useState } from "react";
import "./App.css";
import "./scss/tailwindBase.scss";
import Button from "@mui/material/Button";
import { ToastContainer } from "react-toastify";
import { LayoutRouteProps, Route, Routes } from "react-router-dom";

import { Footer } from "./components";
import Header from "./components/Header";
import { routerAdmin, routers, routersNoLayout } from "./routers";
import { Grid } from "@mui/material";
import { SideBarAdmin } from "./components/SideBarAdmin";
import { HeaderAdmin } from "./components/HeaderAdmin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        {routers.map((router) => {
          return (
            <Route
              path={router.path}
              element={<LayoutPage>{router.component}</LayoutPage>}
              key={router.path}
            />
          );
        })}
        {routerAdmin.map((router) => {
          return (
            <Route
              path={router.path}
              element={
                <LayoutAdminPage>{router.component as any}</LayoutAdminPage>
              }
              key={router.path}
            />
          );
        })}
        {routersNoLayout.map((router) => {
          return (
            <Route
              path={router.path}
              element={router.component as any}
              key={router.path}
            />
          );
        })}
      </Routes>
      <PortableComponent />
    </>
  );
}

const PortableComponent = () => {
  return (
    <>
      <ToastContainer />
    </>
  );
};

interface LayoutPageProps {
  children: any;
}

const LayoutPage = (props: LayoutPageProps) => {
  return (
    <>
      <Header />
      <div className="pt-24">{props.children}</div>
      <Footer />
    </>
  );
};

const LayoutAdminPage = (props: LayoutPageProps) => {
  return (
    <>
      <div className="flex">
        <SideBarAdmin />
        <div className="ml-60 flex-1" style={{width: 'calc(100% - 240px)'}} >
          <HeaderAdmin />
          <div className="w-full p-9 mt-16">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default App;
