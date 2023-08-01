import React from "react";
import whiteLoge from "../images/logo-white.png";
import openImg from "../images/open.png";
import closeImg from "../images/close.png";
import { Navigate, useNavigate } from "react-router-dom";
function Logo({ open, hadle, handleShot }) {
  let navigator = useNavigate();

  return (
    <div className="flex items-center justify-between px-4 ">
      {/* {!open && (
        <img
          onClick={handleShot}
          className="sm:hidden w-5 h-5 cursor-pointer absolute left-0 top-8 "
          src={openImg}
          alt="img"
        />
      )} */}

      {open && (
        <img
          onClick={() => navigator("/today")}
          className=" w-40 cursor-pointer "
          src={whiteLoge}
          alt="logo"
        />
      )}
      <img
        onClick={hadle}
        className="w-5 h-5 cursor-pointer"
        src={open ? closeImg : openImg}
        alt="img"
      />
    </div>
  );
}

export default Logo;
