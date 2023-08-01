import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "animate.css";
import Card from "./card";
function InboxCard() {
  let tasks = useSelector((state) => state.inboxTask);

  return (
    <div className="tasks flex  flex-col gap-2 flex-1 overflow-y-scroll my-5">
      {tasks
        .filter((t) => !t.completed)
        .map((t) => (
          <Card key={t.id} task={t} />
        ))}
    </div>
  );
}

export default InboxCard;
