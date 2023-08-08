import React from "react";
import repeatLight from "../../images/icons/light-mood/repeat.png"; // Import repeat icon image
import repeatDark from "../../images/icons/dark-mode/repeat.png"; // Import repeat icon image
import notificationLight from "../../images/icons/light-mood/notification.png"; // Import notification icon image
import notificationDark from "../../images/icons/dark-mode/notification.png"; // Import notification icon image
import DueLight from "../../images/icons/light-mood/calendar-date.png"; // Import due date icon image
import DueDark from "../../images/icons/dark-mode/calendar-date.png"; // Import due date icon image
import todaylight from "../../images/icons/light-mood/today.png"; // Import today icon image
import todayDark from "../../images/icons/dark-mode/today-white.png"; // Import today icon image
import { useSelector } from "react-redux";

// Definition of the Text component
function Text({ task }) {
  let mode = useSelector((state) => state.mode.mode);
  return (
    <div className="text-gray-500 dark:text-white">
      <p>{task.text}</p> {/* Display the task's text */}
      <div className="flex gap-2 items-center">
        {task.today && ( // If the task is scheduled for today
          <div className="flex items-center gap-1">
            <img
              className="w-3"
              src={mode ? todaylight : todayDark}
              alt="Today"
            />{" "}
            {/* Display today icon */}
            <p className="text-xs">today</p> {/* Display "today" text */}
          </div>
        )}
        {task.date && ( // If the task has a due date
          <div className="flex items-center gap-1">
            <img className="w-3" src={mode ? DueLight : DueDark} alt="Due" />{" "}
            {/* Display due date icon */}
            <p className="text-xs">{task.date}</p> {/* Display the due date */}
          </div>
        )}

        {task.repeat && ( // If the task is set to repeat
          <img
            className="w-3 h-3"
            src={repeatLight}
            alt="Repeat"
          /> /* Display repeat icon */
        )}
        {task.notification && ( // If the task has a notification
          <div className="flex items-center gap-1">
            <img className="w-3" src={mode ? notificationLight : notificationDark} alt="Notification" />{" "}
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
