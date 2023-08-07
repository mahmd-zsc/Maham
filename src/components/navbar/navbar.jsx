import React, { useRef, useState } from "react";
import Logo from "./logo";
import logout from "../images/icons/logout-white.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import ListOfNav from "./ListOfNav";
function Navbar() {
  let [width, setWidth] = useState(true);
  let handleShot = () => {
    // nav.current.classList.add("open");
  };
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
      className={`navbar h-full w-full sm:w-1/4 bg-black  flex flex-col gap-10 py-10 duration-500  `}
    >
      <Logo open={width} hadle={handleOpen} handleShot={handleShot} />
      <ListOfNav width={width} />
      <div className="line h-[1px] w-full bg-gray-400"></div>
      <div className="logout px-4 flex gap-4 cursor-pointer mt-auto ">
        <img className="w-6" src={logout} alt="logout" />
        {width && <p className="text-white capitalize">logout</p>}
      </div>
    </div>
  );
}

export default Navbar;
