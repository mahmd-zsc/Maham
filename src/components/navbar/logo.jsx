import React from "react";
import whiteLoge from "../images/logo-white.png";
import openImg from "../images/open.png";
import closeImg from "../images/close.png";
import { Navigate, useNavigate } from "react-router-dom";
function Logo({ open, hadle }) {
  let navigator = useNavigate();

  return (
    <div className="flex items-center justify-between px-4 ">
      {open && (
        <img
          onClick={() => navigator("/")}
          className=" w-40 cursor-pointer "
          src={whiteLoge}
          alt="logo"
        />
      )}

      {open && (
        <img
          onClick={hadle}
          className="w-5 h-5 cursor-pointer"
          src={closeImg}
        />
      )}
      {!open && (
        <img onClick={hadle} className="w-5 h-5 cursor-pointer" src={openImg} />
      )}
    </div>
  );
}

export default Logo;
