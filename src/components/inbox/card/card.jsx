import React, { useRef, useState } from "react";
import chickSound from "../../audio/y2mate.is - Check mark sound effect-AbiiZErJFC4-192k-1690714175.mp3";
import * as actions from "../../redux/action";
import { useDispatch } from "react-redux";
import Star from "./star";
import MenuCard from "./menuCard";
import { Howl } from "howler";
import { set } from "date-fns";

function Card({ task }) {
  let [show, setShow] = useState(false);
  let [mouseY, setMouseY] = useState();
  let [mouseX, setMouseX] = useState();
  let dispatch = useDispatch();
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
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    setMouseX(mouseX);
    setMouseY(mouseY);
    console.log(mouseX);
    setShow(!show);
    e.preventDefault();
  };
  return (
    <div
      onContextMenu={(e) => showMenu(e)}
      ref={task}
      className="task flex relative  px-6 py-4 shadow-sm rounded-md bg-white justify-between items-center cursor-pointer hover:bg-gray-200 duration-300   "
    >
      <div className="flex items-center gap-2">
        <div
          onClick={handleCheck}
          className="checkbox w-5 h-5 relative rounded-full border-2 border-mainRed opacity-40 cursor-pointer"
        ></div>
        <p>{task.text}</p>
      </div>
      <Star task={task} handleStart={handleStart} />
      <MenuCard show={show} task={task} mouseX={mouseX} mouseY={mouseY} />
    </div>
  );
}

export default Card;
