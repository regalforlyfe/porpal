import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";

const Layout = () => {
  return (
    <div className="h-screen w-screen font-mono">
      <div className="bg-2 txc-5 drop-shadow">
        <Header />
      </div>
      <div className="w-11/12 lg:w-8/12 mx-auto pt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
