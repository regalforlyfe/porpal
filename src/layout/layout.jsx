import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./components/header";
import BottomNav from "./components/bottomnav";

const Layout = () => {
  return (
    <div
      className="h-screen w-screen  flex flex-col font-mono"
      // style={{
      //   backgroundImage: "url(assets/image/wallpaper.svg)",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col">
          <div className="overflow-y-auto">
            {/* <div className="bg-2 txc-5 drop-shadow">
              <Header />
            </div> */}
            <div className="w-11/12 lg:w-8/12 mx-auto pt-10">
              <Outlet />
            </div>

            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
