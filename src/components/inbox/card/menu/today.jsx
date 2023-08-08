import React from "react";
import light from "../../../images/icons/light-mood/today.png"; // Import the today icon image
import dark from "../../../images/icons/dark-mode/today-white.png"; // Import the today icon image
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch from react-redux
import { makeToday } from "../../../redux/task/action"; // Import the makeToday action

// Definition of the Today component
function Today({ task }) {
  let dispatch = useDispatch();

  // Function to handle adding/removing a task from today
  let handleToday = () => {
    dispatch(makeToday(task)); // Dispatch the makeToday action
    console.log(true); // Log "true" (you can remove this line if not needed)
  };
  let mode = useSelector((state) => state.mode.mode);
  // Render the component
  return (
    <li
      onClick={handleToday} // When clicked, add/remove the task from today
      className="flex px-4 py-4 gap-2 items-center opacity-60 bg-gray-100 hover:bg-gray-300 duration-500 dark:bg-secondDark dark:opacity-100 dark:text-white dark:hover:bg-mainDark"
    >
      <img className="w-5 h-5" src={mode ? light : dark} alt="Today" />{" "}
      {/* Display the today icon */}
      <p>
        {!task.today && "add to today"}{" "}
        {/* Show text based on task's association with today */}
        {task.today && "remove from today"}{" "}
        {/* Show text based on task's association with today */}
      </p>
    </li>
  );
}

// Export the Today component as the default export
export default Today;
