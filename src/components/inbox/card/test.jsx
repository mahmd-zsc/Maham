import React from "react";
import repeatImg from "../../images/icons/repeat.png";
import notificationImg from "../../images/icons/notification.png";
import DueImg from "../../images/icons/calendar-date.png";

function Test({ task }) {
  console.log(task.date === "today");
  return (
    <div className="text-gray-500">
      <p>{task.text}</p>
      <div className="flex gap-2 items-center">
        {task.date && (
          <div className="flex items-center gap-1 ">
            <img className="w-3" src={DueImg} alt="DueImg" />
            <p className=" text-xs">{task.date}</p>
          </div>
        )}

        {task.repeat && (
          <img className="w-3 h-3" src={repeatImg} alt="repeatImg" />
        )}
        {task.notification && (
          <div className="flex items-center gap-1 ">
            <img className="w-3" src={notificationImg} alt="notificationImg" />
            <p className=" text-xs">{task.notification}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Test;
