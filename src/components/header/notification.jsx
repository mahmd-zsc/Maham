import React, { useEffect, useRef } from "react";
import light from "../images/icons/light-mood/bell.png";
import dark from "../images/icons/dark-mode/bell.png";
import { useSelector } from "react-redux";
function Notification() {
  let not = useRef();
  let img = useRef();
  let handleClick = () => {
    not.current.classList.toggle("hidden");
  };
  useEffect(() => {
    // Handle click events outside the dropdown list and notification icon
    const handleOutsideClick = (e) => {
      if (!not.current.contains(e.target) && !img.current.contains(e.target)) {
        not.current.classList.add("hidden");
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  let mode = useSelector((state) => state.mode.mode);
  return (
    <div className=" relative">
      <img
        onClick={handleClick}
        ref={img}
        className="bellImg w-6  cursor-pointer"
        src={mode ? light : dark}
        alt="bell"
      />
      <div
        ref={not}
        className="notBox absolute w-52 h-72 shadow-lg bg-gray-200 dark:bg-mainDark dark:border dark:border-lightBlue rounded-md  right-0 top-10 hidden z-50 "
      ></div>
    </div>
  );
}

export default Notification;
