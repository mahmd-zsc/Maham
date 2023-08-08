import React from "react";
import star from "../../images/icons/mainRed/star.png"; // Import the outline star icon
import starFull from "../../images/icons/mainRed/star-full.png"; // Import the filled star icon

// Definition of the Star component
function Star({ task, handleStart }) {
  return (
    <>
      {task.important && ( // If the task is marked as important
        <img
          onClick={handleStart} // Trigger the handleStart function when clicked
          className="w-4 h-4 cursor-pointer" // Apply styling for cursor and size
          src={starFull} // Display the filled star icon
          alt="starFull" // Alternative text for accessibility
        />
      )}
      {!task.important && ( // If the task is not marked as important
        <img
          onClick={handleStart} // Trigger the handleStart function when clicked
          className="w-4 h-4 cursor-pointer" // Apply styling for cursor and size
          src={star} // Display the outline star icon
          alt="starFull" // Alternative text for accessibility (should be updated)
        />
      )}
    </>
  );
}

// Export the Star component as the default export
export default Star;
