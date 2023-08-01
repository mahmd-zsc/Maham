import React, { usestate } from "react";
// import addImg from "../images/icons/add.png";
import addImg from "./images/add.png";
function InputInbox({ text, handleText, send }) {
  return (
    <div>
      <div className="flex items-center border-b-2 px-6">
        <div className="w-5 h-5  rounded-full border-2 border-mainRed opacity-40"></div>
        <input
          placeholder="add your task"
          className="bg-gray-100 w-full outline-none px-2 py-4 placeholder:capitalize focus:placeholder:text-gray-300"
          type="text"
          value={text}
          onChange={(t) => handleText(t)}
        />
      </div>
    </div>
  );
}

export default InputInbox;
