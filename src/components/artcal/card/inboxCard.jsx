import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Card from "./card";

function InboxCard({ showTodayText, type }) {
  // Select tasks from the Redux store
  let tasks = useSelector((state) => state.task.inboxTask);
  return (
    // Container for displaying tasks
    <div className="tasks flex flex-col gap-2 flex-1 my-5">
      {type === "today"
        ? tasks
            .filter((t) => !t.completed && t.today) // Filter out completed tasks
            .map((t) => (
              <Card key={t.id} task={t} showTodayText={showTodayText} /> // Render a Card component for each task
            ))
        : null}
      {type === "important"
        ? tasks
            .filter((t) => !t.completed && t.important) // Filter out completed tasks
            .map((t) => (
              <Card key={t.id} task={t} showTodayText={showTodayText} /> // Render a Card component for each task
            ))
        : null}
      {type === "completed"
        ? tasks
            .filter((t) => t.completed) // Filter out completed tasks
            .map((t) => (
              <Card
                key={t.id}
                task={t}
                showTodayText={showTodayText}
                type={type}
              /> // Render a Card component for each task
            ))
        : null}
      {type === "inbox"
        ? tasks
            .filter((t) => !t.completed) // Filter out completed tasks
            .map((t) => (
              <Card key={t.id} task={t} showTodayText={showTodayText} /> // Render a Card component for each task
            ))
        : null}
    </div>
  );
}

export default InboxCard;
