import React, { useEffect, useState } from "react";
import MainLayout from "../../components/mainlayout/mainlayout";
import Action from "./action";
import LoadingView from "../../components/loadingview/loadingview";

const AboutMe = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Action.getData(setData, setLoading);
  }, []);

  return (
    <>
      <div className="window">
        <div className="py-5 border-b-2 border-solid border-black">
          <div className="flex flex-row items-center gap-2 pl-10">
            <div className="rounded-full bg-1 h-3 w-3"></div>
            <div className="rounded-full bg-4 h-3 w-3"></div>
            <div className="rounded-full bg-black h-3 w-3"></div>
          </div>
        </div>
        {loading && <LoadingView />}
        <div className="p-6">
          <MainLayout
            subtitle={data.subtitle}
            title={data.title}
            desc={data.desc}
            image={data.image}
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
