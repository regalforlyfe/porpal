import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import RouteName from "../../services/routename";

const Header = () => {
  const [hide, setHide] = useState(true);
  const nav_d = [
    {
      name: "ABOUT ME",
      route: RouteName.aboutMe,
    },
    {
      name: "EXPERIENCE",
      route: RouteName.experience,
    },
    {
      name: "PROJECTS",
      route: RouteName.project,
    },
  ];

  const nav_m = [
    {
      name: "ABOUT ME",
      route: RouteName.aboutMe,
    },
    {
      name: "EXPERIENCE",
      route: RouteName.experience,
    },
    {
      name: "PROJECTS",
      route: RouteName.project,
    },
    {
      name: "CONTACT",
      route: RouteName.project,
    },
  ];

  return (
    <nav className="w-11/12 lg:w-11/12 mx-auto">
      <div className="header-desktop">
        <div className="grid grid-cols-3 h-16 content-center font-semibold text-base">
          <div className="text-left">LOGO</div>
          <div className="grid grid-cols-3 gap-12 text-center nav">
            {nav_d.map((items) => (
              <NavLink to={items.route} key={items.name}>
                {items.name}
              </NavLink>
            ))}
          </div>
          <div className="text-right trans">CONTACT</div>
        </div>
      </div>

      <div className="header-mobile">
        <div className="flex flex-row h-16 items-center font-semibold">
          <div className="flex-1">LOGO</div>
          <div className="flex">
            <i onClick={() => setHide(!hide)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                width="1em"
                viewBox="0 0 448 512"
                fill="#fff"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </i>
          </div>
        </div>

        {!hide && (
          <div className="h-min">
            <div className="w-1/2 m-auto text-center pt-5">
              {nav_m.map((items) => (
                <div className="nav h-16" key={items.name}>
                  <NavLink to={items.route} onClick={() => setHide(true)}>
                    {items.name}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
