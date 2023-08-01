import React from "react";
import todayImg from "../../../images/icons/today.png";
function Today({ task }) {
  return (
    <>
      {!task.today && (
        <li className="flex px-4 py-4 gap-2 items-center opacity-60 hover:bg-gray-200 duration-500  ">
          <img className="w-5 h-5 " src={todayImg} alt="" />
          <p>add to today</p>
        </li>
      )}
      {task.today && (
        <li className="flex px-4 py-4 gap-2 items-center opacity-60 hover:bg-gray-200 duration-500 ">
          <img className="w-5 h-5 " src={todayImg} alt="" />
          <p>remove from today</p>
        </li>
      )}
    </>
  );
}

export default Today;
