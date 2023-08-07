import React, { useEffect } from "react";
import AddTask from "./addInobx/addTask"; // Import the AddTask component
import InboxCard from "./card/inboxCard"; // Import the InboxCard component
import sunImg from "../images/icons/sun.png"; // Import the inbox icon image

// Definition of the Inbox component
function Inbox() {
  // useEffect hook to set the document title when the component mounts
  useEffect(() => {
    document.title = " maham - Inbox"; // Set the document title
  }, []);

  // Render the Inbox component
  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center mb-5 gap-2">
        <img className="w-5" src={sunImg} alt="Inbox" />{" "}
        {/* Display the inbox icon */}
        <h1 className="font-bold text-xl capitalize text-mainRed">
          today
        </h1>{" "}
        {/* Display the title */}
      </div>
      <AddTask /> {/* Render the AddTask component */}
      <div className="overflow-scroll h-[600px]">
        <InboxCard /> {/* Render the InboxCard component */}
      </div>
    </div>
  );
}

// Export the Inbox component as the default export
export default Inbox;
