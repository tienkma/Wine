import { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";
import "./scss/tailwindBase.scss";
import { ToastContainer } from "react-toastify";
import { LayoutRouteProps, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import { routerAdmin, routers, routersNoLayout } from "./routers";
import { SideBarAdmin } from "./components/pages/admin/SideBarAdmin";
import ScrollToTop from "./utils/model/scrollTop";
import { Storage } from "./utils/local";
import { useAppDispatch } from "./redux/root/hooks";
import { setLogin } from "./redux/silces/authSlice";
import SideBar from "./components/SideBar";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (Storage.getLocal("token") && Storage.getLocal("user")) {
      dispatch(setLogin(true));
    }
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            Loading...
          </div>
        }
      >
        <ScrollToTop />
        <SideBar />
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
          {/* {routerAdmin.map((router) => {
          return (
            <Route
              path={router.path}
              element={
                <LayoutAdminPage>{router.component as any}</LayoutAdminPage>
              }
              key={router.path}
            />
          );
        })} */}
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
      </Suspense>
    </>
  );
}

const PortableComponent = () => {
  return (
    <>
      <ToastContainer className={"text-sm"} />
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
