import React, { useEffect } from "react";
import AddTask from "./addInobx/addTask";
import InboxCard from "./card/inboxCard";

function Today() {
  useEffect(() => {
    document.title = " maham - Today";
  }, []);
  return (
    <div className="flex flex-col  overflow-hidden ">
      <AddTask />
      <InboxCard />
    </div>
  );
}

export default Today;
