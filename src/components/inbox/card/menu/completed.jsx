import React from "react";
import img from "../../../images/icons/completed.png";
import { useDispatch } from "react-redux";
import { makeCompleted } from "../../../redux/action";
import { Howl } from "howler";
import chickSound from "../../../audio/y2mate.is - Check mark sound effect-AbiiZErJFC4-192k-1690714175.mp3";
function Completed({ task }) {
  const sound = new Howl({
    src: [chickSound],
    volume: 0.5,
  });
  let dispatch = useDispatch();
  let handleCompletd = () => {
    sound.play();
    dispatch(makeCompleted(task));
  };
  return (
    <>
      <li
        onClick={handleCompletd}
        className="flex px-4 py-4 gap-2 items-center opacity-60 hover:bg-gray-200 duration-500 "
      >
        <img className="w-5 h-5 " src={img} alt="" />
        {!task.Completed && "Mark completed"}
        {task.Completed && "Mark incomplete"}
      </li>
      {/* {!task.completed && (
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
      )} */}
    </>
  );
}

export default Completed;
