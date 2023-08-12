import React from "react";
import logoWhite from "../images/logo-white.png";
import logoDark from "../images/logo-dark.png";
import openWhite from "../images/icons/open/white/open.png";
import closeWhite from "../images/icons/open/white/close.png";
import openBlack from "../images/icons/open/black/open.png";
import closeBlack from "../images/icons/open/black/close.png";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Logo({ open, hadle, handleShot }) {
  let navigator = useNavigate();
  let mode = useSelector((state) => state.mode.mode);

  const imagesHandle = () => {
    if (mode) {
      return open ? closeBlack : openBlack;
    } else {
      return open ? closeWhite : openWhite;
    }
  };
  return (
    <div className="flex items-center justify-between px-4 ">
      {open && (
        <img
          onClick={() => navigator("/today")}
          className=" w-28 lg:w-40 cursor-pointer "
          src={mode ? logoDark : logoWhite}
          alt="logo"
        />
      )}
      <img
        onClick={hadle}
        className="w-5 h-5 cursor-pointer"
        src={imagesHandle()}
        alt="img"
      />
    </div>
  );
}

export default Logo;
