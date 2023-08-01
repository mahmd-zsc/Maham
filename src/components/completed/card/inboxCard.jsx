import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "animate.css";
import Card from "./card";
function InboxCard() {
  let tasks = useSelector((state) => state.inboxTask);
  tasks = tasks.filter((t) => t.completed === true);

  return (
    <div className="flex w-full flex-col gap-2 flex-1 mb-5 ">
      {tasks.map((t) => (
        <Card task={t} />
      ))}
    </div>
  );
}

export default InboxCard;
