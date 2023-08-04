import React from "react";
import Img from "../../../images/icons/trash.png";
import { useDispatch } from "react-redux";
import { removeTask } from "../../../redux/action";
function Remove({ task }) {
  let dispatch = useDispatch();
  let handleRemove = () => {
    dispatch(removeTask(task));
  };
  return (
    <li
      onClick={handleRemove}
      className="flex px-4 py-4 gap-2 items-center hover:bg-gray-300 duration-500  "
    >
      <img
        className="w-5 h-5 "
        src={Img}
        alt="trash hover:bg-gray-200 duration-500"
      />
      <p className="opacity-60">Delete a task</p>
    </li>
  );
}

export default Remove;
