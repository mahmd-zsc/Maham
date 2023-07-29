import React, { useRef } from "react";
import globe from "../images/icons/globe.png";
import { click } from "@testing-library/user-event/dist/click";

function Language() {
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
        className="lanImg w-6 cursor-pointer"
        src={globe}
        alt="globe"
      />
      <div
        ref={not}
        className="lanBox absolute w-40 h-40 shadow-lg bg-gray-100 rounded-md  right-0 top-10 hidden  "
      ></div>
    </div>
  );
}

export default Language;
