import React, { useEffect } from "react";
import AddTask from "./addInobx/addTask";
import InboxCard from "./card/inboxCard";
// import AddImportantTask from "./addImportantTask";

function Importatnt() {
  useEffect(() => {
    document.title = "maham - Important";
  }, []);
  return (
    <div className="flex flex-col  overflow-hidden ">
      <AddTask />
      <InboxCard />
    </div>
  );
}
export default Importatnt;
