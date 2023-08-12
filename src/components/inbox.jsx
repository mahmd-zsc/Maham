import React, { useEffect } from "react";

import inboxImg from "./images/icons/mainRed/inbox-red.png"; // Import the inbox icon image
import AddTask from "./artcal/addInobx/addTask";
import InboxCard from "./artcal/card/inboxCard";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePath } from "./redux/setting/action";

// Definition of the Inbox component
function Inbox({}) {
  // useEffect hook to set the document title when the component mounts
  useEffect(() => {
    document.title = " maham - Inbox"; // Set the document title
  }, []);



  // Render the Inbox component
  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center mb-5 gap-2">
        <img className="w-5" src={inboxImg} alt="Inbox" />{" "}
        {/* Display the inbox icon */}
        <h1 className="font-bold text-xl capitalize text-mainRed ">
          inbox
        </h1>{" "}
        {/* Display the title */}
      </div>
      <AddTask /> {/* Render the AddTask component */}
      <div className="overflow-scroll h-[670px]">
        <InboxCard showTodayText={true} type={"inbox"} />{" "}
        {/* Render the InboxCard component */}
      </div>
    </div>
  );
}

// Export the Inbox component as the default export
export default Inbox;
