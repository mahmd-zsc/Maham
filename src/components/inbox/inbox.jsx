import React, { useEffect } from "react";
import AddTask from "./addInobx/addTask";
import InboxCard from "./card/inboxCard";

function Inbox() {
  useEffect(() => {
    document.title = " maham - Inbox";
  }, []);
  return (
    <div className="flex flex-col  flex-1 overflow-hidden ">
      <AddTask />
      <InboxCard />
    </div>
  );
}

export default Inbox;
