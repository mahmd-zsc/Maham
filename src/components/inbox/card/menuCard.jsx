import React, { useRef, useEffect } from "react";
import Today from "./menu/today";
import Important from "./menu/important";
import Completed from "./menu/completed";
import Remove from "./menu/remove";

function MenuCard({ show, setShow, task, mouseX, mouseY }) {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!menu.current.contains(e.target)) {
        menu.current.classList.add("hidden");
        setShow(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  let menu = useRef();

  let hiddenUL = () => {
    menu.current.classList.add("hidden");
  };

  const windowWidth = window.innerWidth;
  const menuWidth = 60; // You may need to adjust this based on your styling
  const maxLeft = Math.min(windowWidth - menuWidth, mouseX);

  // Calculate the distance between the MenuCard and the right edge of the page
  const distanceToRight = windowWidth - maxLeft - menuWidth;

  return (
    <ul
      style={{ left: maxLeft, top: mouseY }}
      onClick={hiddenUL}
      ref={menu}
      className={`taskMenu absolute w-60  bg-gray-100 rounded-md capitalize shadow-2xl  z-20  ${
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
