import { useState } from "react";
import "./App.css";
import "./scss/tailwindBase.scss";
import Button from "@mui/material/Button";
import { ToastContainer } from "react-toastify";
import { LayoutRouteProps, Route, Routes } from "react-router-dom";
import { Footer } from "./components";
import Header from "./components/common/Header";
import { routerAdmin, routers, routersNoLayout } from "./routers";
import { Grid } from "@mui/material";
import { SideBarAdmin } from "./components/pages/admin/SideBarAdmin";
import ScrollToTop from "./utils/model/scrollTop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScrollToTop />
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
      <div className="pt-20">{props.children}</div>
    </>
  );
};

const LayoutAdminPage = (props: LayoutPageProps) => {
  return (
    <>
      <div className="flex">
        <SideBarAdmin />
        <div className="flex-1" style={{ width: "calc(100% - 240px)" }}>
          <div className="w-full overflow-y-auto h-full ">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default App;
