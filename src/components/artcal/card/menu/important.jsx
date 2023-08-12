import React from "react";
import light from "../../../images/icons/light-mood/important.png"; // Import the important icon image
import dark from "../../../images/icons/dark-mode/important-white.png"; // Import the important icon image
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch from react-redux
import { makeImportant } from "../../../redux/task/action"; // Import the makeImportant action

// Definition of the Important component
function Important({ task }) {
  let dispatch = useDispatch();

  // Function to handle marking a task as important or removing its importance
  let handleImportant = () => {
    dispatch(makeImportant(task)); // Dispatch the makeImportant action
  };
  let mode = useSelector((state) => state.mode.mode);

  // Render the component
  return (
    <li
      onClick={handleImportant} // When clicked, mark the task as important or remove importance
      className="flex px-4 py-4 gap-2 items-center opacity-60 bg-gray-100 hover:bg-gray-300 duration-500 dark:bg-secondDark dark:opacity-100 dark:text-white dark:hover:bg-mainDark"
    >
      <img className="w-5 h-5" src={mode ? light : dark} alt="Important" />{" "}
      {/* Display the important icon */}
      <p>
        {!task.important && "add importance"}{" "}
        {/* Show text based on task importance status */}
        {task.important && "remove importance"}{" "}
        {/* Show text based on task importance status */}
      </p>
    </li>
  );
}

// Export the Important component as the default export
export default Important;
