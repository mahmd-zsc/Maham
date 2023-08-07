import React, { useState } from "react";
// import addImg from "../images/icons/add.png";
import addImg from "./images/add.png"; // Importing an image file (not shown in code)

function InputInbox({ text, handleText, send }) {
  return (
    <div>
      <div className="flex items-center border-b-2 px-6">
        <div className="w-5 h-5 rounded-full border-2 border-mainRed opacity-40"></div>
        {/* Input field for adding a task */}
        <input
          placeholder="add your task" // Placeholder text for the input field
          className="bg-gray-100 w-full outline-none px-2 py-4 placeholder:capitalize focus:placeholder:text-gray-300"
          type="text"
          value={text} // Value of the input field (controlled by the 'text' prop)
          onChange={(t) => handleText(t)} // Event handler for input changes
        />
      </div>
    </div>
  );
}

// Exporting the 'InputInbox' component as the default export
export default InputInbox;
