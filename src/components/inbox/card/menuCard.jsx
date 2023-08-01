import React, { useRef, useEffect } from "react";
import Today from "./menu/today";
import Important from "./menu/important";
import Completed from "./menu/completed";
import Remove from "./menu/remove";

function MenuCard({ show, task, mouseX, mouseY }) {
  let menu = useRef();

  let hiddenUL = () => {
    menu.current.classList.add("hidden");
  };
  let toggleUL = () => {
    menu.current.classList.toggle("hidden");
  };
  const windowWidth = window.innerWidth;
  const maxLeft = Math.min(windowWidth - 60, mouseX);
  return (
    <ul
      style={{ left: maxLeft, top: mouseY }}
      onClick={hiddenUL}
      ref={menu}
      className={`taskMenu absolute w-60 bg-white rounded-md capitalize shadow-2xl z-20  ${
        show ? "block" : "hidden"
      }`}
    >
      <Today task={task} />
      <Important task={task} />
      <Completed task={task} />
      <Remove task={task} />
    </ul>
  );
}

export default MenuCard;
