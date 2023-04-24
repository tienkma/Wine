import { useState } from "react";
import "./App.css";
import "./scss/tailwindBase.scss";
import Button from "@mui/material/Button";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";

import { Footer } from "./components";
import Header from "./components/Header";
import { routers } from "./routers";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="pt-20">
        <Routes>
          {routers.map((router) => {
            return (
              <Route
                path={router.path}
                element={router.component as any}
                key={router.path}
              />
            );
          })}
        </Routes>
        <Footer />
      </div>
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

export default App;
