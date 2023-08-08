import React, { useRef, useState } from "react";
import Logo from "./logo";
import logoutWhite from "../images/icons/logout-white.png";
import logoutDark from "../images/icons/logout-black.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import ListOfNav from "./ListOfNav";
import { useSelector } from "react-redux";
function Navbar() {
  let [width, setWidth] = useState(true);
  let mode = useSelector((state) => state.mode.mode);
  let nav = useRef();
  let handleOpen = () => {
    if (width) {
      setWidth(false);
      nav.current.classList.toggle("close");
    } else {
      setWidth(true);
      nav.current.classList.toggle("close");
    }
  };
  return (
    <div
      ref={nav}
      className={`navbar h-full w-full sm:w-1/4 bg-gray-100 dark:bg-LightDark border-e-2 border-gary-600 dark:border-lightBlue    flex flex-col gap-10 py-10 duration-500   `}
    >
      <Logo open={width} hadle={handleOpen} />
      <ListOfNav width={width} />
      <div className="line h-[1px] w-full bg-gray-400 dark:bg-lightBlue"></div>
      <div className="logout px-4 flex gap-4 cursor-pointer mt-auto ">
        <img
          className="w-6"
          src={mode ? logoutDark : logoutWhite}
          alt="logout"
        />
        {width && (
          <p className={` capitalize ${mode ? "text-black" : "text-white"} `}>
            logout
          </p>
        )}
      </div>
    </div>
  );
}

export default Navbar;
