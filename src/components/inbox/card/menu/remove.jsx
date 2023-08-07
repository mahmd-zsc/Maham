import React from "react";
import Img from "../../../images/icons/trash.png"; // Import the trash icon image
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import { removeTask } from "../../../redux/task/action"; // Import the removeTask action

// Definition of the Remove component
function Remove({ task }) {
  let dispatch = useDispatch();

  // Function to handle removing a task
  let handleRemove = () => {
    dispatch(removeTask(task)); // Dispatch the removeTask action
  };

  // Render the component
  return (
    <li
      onClick={handleRemove} // When clicked, remove the task
      className="flex px-4 py-4 gap-2 items-center bg-gray-100 hover:bg-gray-300 duration-500"
    >
      <img
        className="w-5 h-5"
        src={Img}
        alt="Delete" // Display the trash icon for deletion
      />
      <p className="opacity-60">Delete a task</p>{" "}
      {/* Display text indicating task deletion */}
    </li>
  );
}

// Export the Remove component as the default export
export default Remove;
