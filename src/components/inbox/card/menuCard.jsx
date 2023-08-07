// Importing necessary modules from React and component files
import React, { useRef, useEffect } from "react";
import Today from "./menu/today";
import Important from "./menu/important";
import Completed from "./menu/completed";
import Remove from "./menu/remove";

// Definition of the functional component MenuCard
function MenuCard({ show, setShow, task, mouseX, mouseY }) {
  // useEffect hook to handle outside clicks and close the menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the clicked element is not within the menu
      if (!menu.current.contains(e.target)) {
        // Hide the menu and update the show state
        menu.current.classList.add("hidden");
        setShow(false);
      }
    };
    // Add a click event listener to the window
    window.addEventListener("click", handleOutsideClick);

    // Cleanup: Remove the click event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []); // Empty dependency array means this effect only runs once, similar to componentDidMount

  // Create a ref to store the menu DOM element
  let menu = useRef();

  // Function to hide the menu
  let hiddenUL = () => {
    menu.current.classList.add("hidden");
  };

  // Calculate the position of the menu
  const windowWidth = window.innerWidth;
  const menuWidth = 60;
  const maxLeft = Math.min(windowWidth - menuWidth, mouseX);
  const distanceToRight = windowWidth - maxLeft - menuWidth;

  // Render the component
  return (
    <ul
      // Style the menu with calculated position and styles
      style={{ left: maxLeft, top: mouseY }}
      onClick={hiddenUL} // When the menu is clicked, hide it
      ref={menu} // Attach the ref to the menu DOM element
      className={`taskMenu flex flex-col absolute w-52 bg-gray-200 rounded-md capitalize shadow-lg  z-20 gap-[2px]  ${
        show ? "block" : "hidden" // Show or hide the menu based on the 'show' prop
      }`}
    >
      {/* Render sub-components */}
      <Today task={task} />
      <Important task={task} />
      <Completed task={task} />
      <Remove task={task} />
    </ul>
  );
}

// Export the MenuCard component as the default export
export default MenuCard;
