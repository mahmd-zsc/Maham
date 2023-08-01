import React, { useEffect, useRef } from "react";

function BaseAdd({ send, text }) {
  let add = useRef();
  useEffect(() => {
    if (text && text.length > 0) {
      add.current.classList.add("text-mainRed");
    } else {
      add.current.classList.remove("text-mainRed");
    }
  }, [text]);
  return (
    <div className="w-full h-10 px-6 items-center justify-between bg-gray-200 flex  ">
      <div></div>
      <input
        ref={add}
        onClick={send}
        className=" border border-gray-300 px-2 py-1 text-sm w-fit h-fit cursor-pointer bg-white rounded-sm text-gray-400 "
        type="submit"
        value="Add"
      />
    </div>
  );
}

export default BaseAdd;
