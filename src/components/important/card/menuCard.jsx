import React, { useRef } from "react";
import Today from "./menu/today";
import Important from "./menu/important";
import Completed from "./menu/completed";
import Remove from "./menu/remove";
function MenuCard({ show, task }) {
  let menu = useRef();

  return (
    <ul
      ref={menu}
      className={`taskMenu absolute w-60  bg-white rounded-md capitalize shadow-2xl top-0 z-20 ${
        show ? "block" : "hidden"
      } `}
    >
      <Today task={task} />
      <Important task={task} />
      <Completed task={task} />
      <Remove />
    </ul>
  );
}

export default MenuCard;
