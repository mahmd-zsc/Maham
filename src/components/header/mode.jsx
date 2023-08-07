import React, { useRef, useEffect, useState } from "react";
import dark from "../images/icons/night-mode.png";
import light from "../images/icons/light-mode.png";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../redux/mode/action";

function Mode() {
  const dispatch = useDispatch(); // Use the useDispatch hook to get the dispatch function

  const img = useRef();
  const mode = useSelector((state) => state.mode.mode);

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
