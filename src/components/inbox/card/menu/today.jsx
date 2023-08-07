import React from "react";
import todayImg from "../../../images/icons/today.png"; // Import the today icon image
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import { makeToday } from "../../../redux/task/action"; // Import the makeToday action

// Definition of the Today component
function Today({ task }) {
  let dispatch = useDispatch();

  // Function to handle adding/removing a task from today
  let handleToday = () => {
    dispatch(makeToday(task)); // Dispatch the makeToday action
    console.log(true); // Log "true" (you can remove this line if not needed)
  };

  // Render the component
  return (
    <li
      onClick={handleToday} // When clicked, add/remove the task from today
      className="flex px-4 py-4 gap-2 items-center opacity-60 bg-gray-100 hover:bg-gray-300 duration-500"
    >
      <img className="w-5 h-5" src={todayImg} alt="Today" />{" "}
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
