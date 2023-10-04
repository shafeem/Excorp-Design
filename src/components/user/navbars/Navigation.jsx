import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const Menus = [
    { name: "Home", icon: "home-outline",to:"/", dis: "translate-x-0" },
    { name: "Interiors", icon: "person-outline",to:"/interiors", dis: "translate-x-16" },
    { name: "Design", icon:"chatbubble-outline",to:"/design", dis: "translate-x-32" },
    { name: "About", icon: "camera-outline",to:"/about", dis: "translate-x-48" },
    // { name: "Settings", icon: "settings-outline", dis: "translate-x-64" },
  ];
  const [active, setActive] = useState(0);
  return (
    // max-h-[4.4rem]
    <div className="w-screen px-14 rounded-t-xl flex justify-center bg-gray-800">
      <ul className="flex relative pl-3">
        <span
          className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <NavLink 
              to={menu.to}
              className="flex flex-col text-center text-white pt-6"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl cursor-pointer duration-500 ${
                  i === active && "-mt-6 text-black"
                }`}
              >
                <ion-icon name={menu.icon}></ion-icon>
              </span>
              <span
                className={` ${
                  active === i
                    ? "translate-y-4 duration-700 text-white opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
              >
                {menu.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
