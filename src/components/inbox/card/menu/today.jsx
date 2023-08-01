import React from "react";
import todayImg from "../../../images/icons/today.png";
import { useDispatch } from "react-redux";
import { makeToday } from "../../../redux/action";
function Today({ task }) {
  let dispatch = useDispatch();
  let handleToday = () => {
    dispatch(makeToday(task));
    console.log(true);
  };
  return (
    <>
      <li
        onClick={handleToday}
        className="flex px-4 py-4 gap-2 items-center opacity-60 hover:bg-gray-200 duration-500  "
      >
        <img className="w-5 h-5 " src={todayImg} alt="" />
        <p>
          {!task.today && "add to today"} {task.today && "remove from today"}
        </p>
      </li>
    </>
  );
}

export default Today;
