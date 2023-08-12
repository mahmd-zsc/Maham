import React, { useEffect, useRef } from "react";
import Date from "./date"; // Importing a component named 'Date'
import Repeate from "./repeate"; // Importing a component named 'Repeate'
import Notification from "./notification"; // Importing a component named 'Notification'

function BaseAdd({
  send,
  text,
  handleDate,
  task,
  date,
  handleRepeat,
  handleNotification,
}) {
  let add = useRef();

  // useEffect hook to update the appearance of the 'Add' button based on the text input
  useEffect(() => {
    if (text && text.length > 0) {
      add.current.classList.add("text-mainRed"); // Add a CSS class for styling
    } else {
      add.current.classList.remove("text-mainRed"); // Remove the CSS class if no text
    }
  }, [text]);

  return (
    <div className="w-full relative h-10 px-6 items-center justify-between bg-gray-200 dark:bg-LightDark flex rounded-b-md">
      <div className="flex items-center gap-5">
        {/* Rendering the 'Date' component and passing necessary props */}
        <Date task={task} handleDate={handleDate} closeCheck={date} />
        {/* Rendering the 'Repeate' component and passing necessary props */}
        <Repeate task={task} handleRepeat={handleRepeat} />
        {/* Rendering the 'Notification' component and passing necessary props */}
        <Notification task={task} handleNotification={handleNotification} />
      </div>
      <input
        ref={add}
        onClick={send} // Triggering the 'send' function when the button is clicked
        className="border-2 border-gray-300  px-2 py-1 text-sm w-fit h-fit cursor-pointer bg-white dark:bg-mainDark dark:border-lightBlue rounded-sm text-gray-400"
        type="submit"
        value="Add"
      />
    </div>
  );
}

// Exporting the 'BaseAdd' component as the default export
export default BaseAdd;
