import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <div className="app-container">
        <div className="inner">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
