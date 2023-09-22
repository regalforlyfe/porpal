import React from "react";
import RouteName from "../../services/routename";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const nav_d = [
    {
      name: "ABOUT ME",
      route: RouteName.aboutMe,
      image: "assets/image/contact.jpg",
    },
    {
      name: "EXPERIENCE",
      route: RouteName.experience,
      image: "assets/image/exp.jpg",
    },
    {
      name: "PROJECTS",
      route: RouteName.project,
      image: "assets/image/project.jpg",
    },
    {
      name: "CONTACT",
      route: RouteName.contact,
      image: "assets/image/contact.jpg",
    },
  ];

  return (
    <div className="w-3/4 md:w-2/3 lg:w-4/12 xl:5/12 h-[65px] m-auto py-2 z-[50] absolute flex gap-10 justify-center items-center  left-1/2 bottom-3 transform -translate-x-1/2 rounded-2xl bg-white border-2 shadow-md">
      {nav_d.map((items) => (
        <NavLink className="navb" to={items.route} key={items.name}>
          <img
            className="w-10 h-10 rounded-lg"
            src={items.image}
            alt={items.name}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNav;
