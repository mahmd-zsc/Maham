import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Card from "./card";

function InboxCard() {
  // Select tasks from the Redux store
  let tasks = useSelector((state) => state.inboxTask);

  return (
    // Container for displaying tasks
    <div className="tasks flex flex-col gap-2 flex-1 my-5">
      {/* Loop through tasks and render Card component for each task */}
      {tasks
        .filter((t) => t.important && !t.completed) // Filter out completed tasks
        .map((t) => (
          <Card key={t.id} task={t} /> // Render a Card component for each task
        ))}
    </div>
  );
}

export default InboxCard;
