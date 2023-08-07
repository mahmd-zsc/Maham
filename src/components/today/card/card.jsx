import React, { useRef, useState } from "react";
import chickSound from "../../audio/y2mate.is - Check mark sound effect-AbiiZErJFC4-192k-1690714175.mp3";
import * as actions from "../../redux/task/action";
import { useDispatch } from "react-redux";
import Star from "./star";
import MenuCard from "./menuCard";
import { Howl } from "howler";

import Text from "./text";

function Card({ task }) {
  // State variables
  let [show, setShow] = useState(false); // State for showing context menu
  let [mouseY, setMouseY] = useState(); // State for mouse Y position
  let [mouseX, setMouseX] = useState(); // State for mouse X position

  // Redux
  let dispatch = useDispatch(); // Redux dispatch function

  // Ref
  let card = useRef(); // Ref to the card element

  // Event listener for context menu to hide it when clicking outside the card
  window.addEventListener("contextmenu", (e) => {
    if (card.current === e.target) {
      // Clicked inside the card
    } else {
      setShow(false); // Clicked outside the card, hide context menu
    }
  });

  // Sound effect
  const sound = new Howl({
    src: [chickSound],
    volume: 0.5,
  });

  // Handle checkbox click
  let handleCheck = (e) => {
    dispatch(actions.makeCompleted(task)); // Dispatching Redux action
    sound.play(); // Playing sound effect
  };

  // Handle star click
  let handleStart = () => {
    dispatch(actions.makeImportant(task)); // Dispatching Redux action
  };

  // Show context menu and capture mouse position

  let showMenu = (e) => {
    const rect = e.currentTarget.getBoundingClientRect(); // Get the card's position and size
    let mouseX = e.clientX - rect.left; // Calculate mouse X position relative to the card
    const right = e.clientX - rect.right; // Calculate mouse X position relative to the card
    if (right >= -200) {
      mouseX = mouseX + -200;
    }
    const mouseY = e.clientY - rect.top; // Calculate mouse Y position relative to the card
    setMouseX(mouseX); // Update mouse X position state
    setMouseY(mouseY); // Update mouse Y position state
    setShow(!show); // Toggle context menu visibility
    e.preventDefault(); // Prevent default context menu
  };

  return (
    <div
      onContextMenu={(e) => showMenu(e)} // Show context menu on right-click
      ref={card} // Set the card ref for the event listener
      className="task flex relative h-16 px-6 py-4 shadow-sm rounded-md bg-white justify-between items-center cursor-pointer hover:bg-gray-200 duration-300"
    >
      <div className="flex items-center gap-2">
        <div
          onClick={handleCheck} // Handle checkbox click
          className="checkbox w-5 h-5 relative rounded-full border-2 border-mainRed opacity-40 cursor-pointer"
        ></div>
        <Text task={task} /> {/* Render Text component */}
      </div>
      <Star task={task} handleStart={handleStart} />{" "}
      {/* Render Star component */}
      <MenuCard
        show={show} // Pass context menu visibility state
        setShow={setShow} // Pass function to toggle context menu visibility
        task={task} // Pass the task to the MenuCard component
        mouseX={mouseX} // Pass mouse X position
        mouseY={mouseY} // Pass mouse Y position
      />
    </div>
  );
}

export default Card;
