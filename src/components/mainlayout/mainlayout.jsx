import React from "react";

const MainLayout = ({ subtitle, title, desc, image }) => {
  return (
    <div className="grid lg:grid-cols-12 h-min content-center gap-5 lg:gap-10">
      <div className="col-span-5">
        <div className="text-base lg:text-base font-semibold txc-2">
          {subtitle}
        </div>
        <div className="text-3xl lg:text-6xl font-bold txc-2">{title}</div>
        <div className="text-base lg:text-lg font-medium pt-2 lg:pt-5">
          {desc}
        </div>
      </div>
      <div className="col-span-2"></div>
      <div className="col-span-5 lg:block hidden">
        <div className="h-[20em] lg:h-[25em]">
          <img src={image} className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
