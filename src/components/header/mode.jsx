import React, { useRef, useEffect, useState } from "react";
import dark from "../images/icons/night-mode.png";
import light from "../images/icons/light-mode.png";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../redux/setting/action";

function Mode() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.mode);

  useEffect(() => {
    window.localStorage.mode = mode;
  }, [mode]);
  const img = useRef();

  const handleMode = () => {
    dispatch(changeMode());
  };

  return (
    <img
      onClick={handleMode}
      ref={img}
      className="lanImg w-6 cursor-pointer"
      src={mode ? dark : light}
      alt="mode"
    />
  );
}

export default Mode;
