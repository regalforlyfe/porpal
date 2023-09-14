import React from "react";

const MainLayout = ({ subtitle, title, desc, image }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 h-min content-center gap-5 lg:gap-10">
      <div className="col-span-1 lg:col-span-5 text-justify">
        <div className="text-base lg:text-base font-semibold txc-2">
          {subtitle}
        </div>
        <div className="text-3xl lg:text-6xl font-bold txc-2">{title}</div>
        <div className="text-base lg:text-lg font-medium pt-2 lg:pt-5">
          {desc}
        </div>
      </div>
      <div className="lg:col-span-2"></div>
      <div className="col-span-1 lg:col-span-5">
        <div className="h-[20em] lg:h-[25em] flex justify-center">
          <img src={image} className="h-full rounded-xl" alt={title} />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
