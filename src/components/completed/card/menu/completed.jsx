import React from "react";
import img from "../../../images/icons/completed.png"; // Import the completed icon image
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import { makeCompleted } from "../../../redux/task/action"; // Import the makeCompleted action
import { Howl } from "howler"; // Import Howl from the 'howler' library for audio playback
import chickSound from "../../../audio/y2mate.is - Check mark sound effect-AbiiZErJFC4-192k-1690714175.mp3"; // Import the sound effect

// Definition of the Completed component
function Completed({ task }) {
  // Create a Howl instance for playing the sound effect
  const sound = new Howl({
    src: [chickSound], // Sound effect source
    volume: 0.5, // Set the volume
  });

  // Get the dispatch function from Redux
  let dispatch = useDispatch();

  // Function to handle marking a task as completed or incomplete
  let handleCompletd = () => {
    sound.play(); // Play the sound effect
    dispatch(makeCompleted(task)); // Dispatch the makeCompleted action
  };

  // Render the component
  return (
    <li
      onClick={handleCompletd} // When clicked, mark the task as completed/incomplete
      className="flex px-4 py-4 gap-2 items-center opacity-60 bg-gray-100 hover:bg-gray-300 duration-500"
    >
      <img className="w-5 h-5" src={img} alt="" />{" "}
      {/* Display the completed icon */}
      {!task.Completed && "Mark completed"}{" "}
      {/* Show text based on task completion status */}
      {task.Completed && "Mark incomplete"}{" "}
      {/* Show text based on task completion status */}
    </li>
  );
}

// Export the Completed component as the default export
export default Completed;
