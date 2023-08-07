import React from "react";
import repeatImg from "../../images/icons/repeat.png"; // Import repeat icon image
import notificationImg from "../../images/icons/notification.png"; // Import notification icon image
import DueImg from "../../images/icons/calendar-date.png"; // Import due date icon image
import todayImg from "../../images/icons/today.png"; // Import today icon image

// Definition of the Text component
function Text({ task }) {
  return (
    <div className="text-gray-500">
      <p>{task.text}</p> {/* Display the task's text */}
      <div className="flex gap-2 items-center">
        {task.today && ( // If the task is scheduled for today
          <div className="flex items-center gap-1">
            <img className="w-3" src={todayImg} alt="Today" />{" "}
            {/* Display today icon */}
            <p className="text-xs">today</p> {/* Display "today" text */}
          </div>
        )}
        {task.date && ( // If the task has a due date
          <div className="flex items-center gap-1">
            <img className="w-3" src={DueImg} alt="Due" />{" "}
            {/* Display due date icon */}
            <p className="text-xs">{task.date}</p> {/* Display the due date */}
          </div>
        )}

        {task.repeat && ( // If the task is set to repeat
          <img
            className="w-3 h-3"
            src={repeatImg}
            alt="Repeat"
          /> /* Display repeat icon */
        )}
        {task.notification && ( // If the task has a notification
          <div className="flex items-center gap-1">
            <img className="w-3" src={notificationImg} alt="Notification" />{" "}
            {/* Display notification icon */}
            <p className="text-xs">{task.notification}</p>{" "}
            {/* Display the notification details */}
          </div>
        )}
      </div>
    </div>
  );
}

// Export the Text component as the default export
export default Text;
