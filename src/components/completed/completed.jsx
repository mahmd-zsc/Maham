import React, { useEffect } from "react";
import InboxCard from "./card/inboxCard";

function Completed() {
  useEffect(() => {
    document.title = " maham - Completed";
  }, []);
  return (
    <div className="completed overflow-y-scroll">
      <InboxCard />
    </div>
  );
}

export default Completed;
