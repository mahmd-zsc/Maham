import React, { useEffect } from "react";

import Img from "./images/icons/mainRed/sun.png"; // Import the inbox icon image
import AddTask from "./artcal/addInobx/addTask";
import InboxCard from "./artcal/card/inboxCard";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePath } from "./redux/setting/action";

// Definition of the Inbox component
function Inbox() {
  // useEffect hook to set the document title when the component mounts
  useEffect(() => {
    document.title = " maham - today"; // Set the document title
  }, []);



  // Render the Inbox component
  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center mb-5 gap-2">
        <img className="w-5" src={Img} alt="Inbox" />{" "}
        {/* Display the inbox icon */}
        <h1 className="font-bold text-xl capitalize text-mainRed ">
          today
        </h1>{" "}
        {/* Display the title */}
      </div>
      <AddTask today={true} important={false} />{" "}
      {/* Render the AddTask component */}
      <div className="overflow-scroll h-[670px]">
        <InboxCard showTodayText={false} type={"today"} />{" "}
        {/* Render the InboxCard component */}
      </div>
    </div>
  );
}

// Export the Inbox component as the default export
export default Inbox;
