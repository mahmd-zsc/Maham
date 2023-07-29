import React, { useEffect, useRef } from "react";
import bell from "../images/icons/bell.png";
function Notification() {
  let not = useRef();
  let img = useRef();
  let handleClick = () => {
    not.current.classList.toggle("hidden");
  };

  return (
    <div className=" relative">
      <img
        onClick={handleClick}
        ref={img}
        className="bellImg w-6  cursor-pointer"
        src={bell}
        alt="bell"
      />
      <div
        ref={not}
        className="notBox absolute w-40 h-40 shadow-lg bg-gray-100 rounded-md  right-0 top-10 hidden "
      ></div>
    </div>
  );
}

export default Notification;
