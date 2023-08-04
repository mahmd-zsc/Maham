import React from "react";
import Img from "../../../images/icons/important.png";
import { useDispatch } from "react-redux";
import { makeCompleted, makeImportant } from "../../../redux/action";
function Important({ task }) {
  let dispatch = useDispatch();
  let handleImportant = () => {
    dispatch(makeImportant(task));
  };
  return (
    <>
      <li
        onClick={handleImportant}
        className="flex px-4 py-4 gap-2 items-center opacity-60 hover:bg-gray-300 duration-500 "
      >
        <img className="w-5 h-5 " src={Img} alt="important" />
        <p>
          {!task.important && "add importance"}{" "}
          {task.important && "remove importance"}
        </p>
      </li>
    </>
  );
}

export default Important;
