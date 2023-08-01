import React from "react";
import Img from "../../../images/icons/important.png";
function Important({ task }) {
  return (
    <>
      {!task.important && (
        <li className="flex px-4 py-4 gap-2 items-center opacity-60 hover:bg-gray-200 duration-500 ">
          <img className="w-5 h-5 " src={Img} alt="important" />
          <p>add importance</p>
        </li>
      )}
      {task.important && (
        <li className="flex px-4 py-4 gap-2 items-center opacity-60 hover:bg-gray-200 duration-500 ">
          <img className="w-5 h-5 " src={Img} alt="important" />
          <p>remove importance</p>
        </li>
      )}
    </>
  );
}

export default Important;
