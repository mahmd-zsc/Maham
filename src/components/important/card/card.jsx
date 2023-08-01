import React, { useRef, useState } from "react";
import chickSound from "../../audio/y2mate.is - Check mark sound effect-AbiiZErJFC4-192k-1690714175.mp3";
import * as actions from "../../redux/action";
import { useDispatch } from "react-redux";
import Star from "./star";
import MenuCard from "./menuCard";
import { Howl } from "howler";

function Card({ task }) {
  let dispatch = useDispatch();
  let [show, setShow] = useState(false);
  const sound = new Howl({
    src: [chickSound],
    volume: 0.5,
  });
  let handleCheck = () => {
    dispatch(actions.makeCompleted(task));
    sound.play();
  };

  let handleStart = () => {
    dispatch(actions.makeImportant(task));
  };
  let showMenu = (e) => {
    setShow(!show);
    e.preventDefault();
  };

  return (
    <div
      onContextMenu={(e) => showMenu(e)}
      ref={task}
      className="task relative flex px-6 py-4 shadow-sm rounded-md bg-white justify-between items-center hover:bg-gray-200 duration-300"
    >
      <div className="flex items-center gap-2">
        <div
          onClick={handleCheck}
          className="checkbox w-5 h-5 relative rounded-full border-2 border-mainRed opacity-40 cursor-pointer"
        ></div>
        <p>{task.text}</p>
      </div>
      <Star task={task} handleStart={handleStart} />
      <audio ref={sound} src={chickSound}></audio>
      <MenuCard show={show} task={task} />
    </div>
  );
}

export default Card;
