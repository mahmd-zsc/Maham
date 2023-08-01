import React from "react";
import todayImg from "../../../images/icons/completed.png";
function Completed({ task }) {
  return (
    <>
      {!task.completed && (
        <li className="flex px-4 py-4 gap-2 items-center opacity-60 hover:bg-gray-200 duration-500 ">
          <img className="w-5 h-5 " src={todayImg} alt="" />
          <p>Mark completed</p>
        </li>
      )}
      {task.completed && (
        <li className="flex px-4 py-4 gap-2 items-center opacity-60 hover:bg-gray-200 duration-500 ">
          <img className="w-5 h-5 " src={todayImg} alt="" />
          <p>Mark incomplete</p>
        </li>
      )}
    </>
  );
}

export default Completed;
