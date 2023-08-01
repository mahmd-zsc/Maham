import React, { useEffect, useRef } from "react";
import bell from "../../images/icons/planning.png";
function BaseAdd({ send, text, handleDate }) {
  let add = useRef();
  useEffect(() => {
    if (text && text.length > 0) {
      add.current.classList.add("text-mainRed");
    } else {
      add.current.classList.remove("text-mainRed");
    }
  }, [text]);
  return (
    <div className="w-full relative h-10 px-6 items-center justify-between bg-gray-200 flex  ">
      <div className="flex items-center">
        <img className="w-5 h-5 cursor-pointer absolute" src={bell} alt="" />
        <input
          onChange={(d) => handleDate(d.target.value)}
          className="w-5 h-5 bg-transparent outline-none cursor-pointer opacity-0"
          type="date"
          name=""
          id=""
        />
      </div>
      <input
        ref={add}
        onClick={send}
        className=" border border-gray-300 px-2 py-1 text-sm w-fit h-fit cursor-pointer bg-white rounded-sm text-gray-400  "
        type="submit"
        value="Add"
      />
    </div>
  );
}

export default BaseAdd;
