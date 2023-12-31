import notificationImg from "../../images/icons/light-mood/notification.png"; // Importing an image file (not shown in code)
import React, { useRef, useState, useEffect } from "react";
import today from "../../images/icons/Notification/light/today.png"; // Importing an image file (not shown in code)
import tomorrow from "../../images/icons/Notification/light/tomorrow.png"; // Importing an image file (not shown in code)
import nextWeek from "../../images/icons/Notification/light/next-week.png"; // Importing an image file (not shown in code)

import trash from "../../images/icons/mainRed/trash.png"; // Importing an image file (not shown in code)


function Notification({ handleNotification, task }) {
  let [value, setValue] = useState(false); // State for displaying the selected notification value
  let [notification, setNotification] = useState(false); // State to track if a notification is selected
  let ul = useRef(); // Reference to the dropdown list element
  let img = useRef(); // Reference to the notification icon element

  useEffect(() => {
    // Handle click events outside the dropdown list and notification icon
    const handleOutsideClick = (e) => {
      if (!ul.current.contains(e.target) && !img.current.contains(e.target)) {
        ul.current.classList.add("hidden");
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  let handleClick = (e) => {
    ul.current.classList.toggle("hidden"); // Toggle the visibility of the dropdown list
  };

  let list = [
    {
      text: "today later",
      img: today,
    },
    {
      text: "tomorrow",
      img: tomorrow,
    },
    {
      text: "next week",
      img: nextWeek,
    },
  ];

  let handleChangeRepeat = (e) => {
    handleNotification(e.text); // Set the selected notification in the parent component
    setNotification(true);
    setValue(e.text);
    ul.current.classList.toggle("hidden");
  };

  let handleRemoveRepeat = () => {
    handleNotification(false); // Remove the selected notification in the parent component
    setNotification(false);
    setValue(null);
    ul.current.classList.toggle("hidden");
  };

  return (
    <div className="relative">
      <div
        style={{ userSelect: "none", cursor: "pointer" }}
        ref={img}
        onClick={(e) => handleClick(e)}
        className={
          notification && task.notification
            ? "flex items-center px-2 py-1 border border-gray-400 dark:border-lightBlue bg-gray-50 dark:bg-mainDark gap-1 rounded-sm shadow-md"
            : null
        }
      >
        <img className="w-4 h-4 cursor-pointer" src={notificationImg} alt="" />
        {task.notification && <p className="text-xs text-gray-400">{value}</p>}
      </div>

      <ul
        ref={ul}
        className={`menu absolute bg-gray-50 dark:bg-secondDark dark:border  dark:border-lightBlue w-52 rounded-sm shadow-lg left-1/2 -translate-x-1/2 top-7 capitalize z-30 hidden `}
      >
        {/* Dropdown list header */}
        <h3 className="px-4 py-4 text-center text-gray-600 dark:text-white font-bold">
          reminder
        </h3>
        <div className="line bg-gray-200 dark:bg-LightDark h-[2px] "></div>
        {/* Iterate over the list of predefined notification options */}
        {list.map((li) => (
          <li
            key={li.text}
            onClick={(e) => handleChangeRepeat(li)}
            className="px-4 py-2 flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-mainDark duration-300 cursor-pointer "
          >
            <img className="w-5 h-5" src={li.img} alt={li.text} />
            <p className="text-gray-400 text-sm">{li.text}</p>
          </li>
        ))}

        {/* Separator line */}
        <div
          className={`line bg-gray-200 dark:bg-LightDark h-[2px] ${
            !task.notification ? "hidden" : null
          }`}
        ></div>
        {/* Option to remove selected notification */}
        <li
          onClick={handleRemoveRepeat}
          className={`px-4 py-3 flex items-center gap-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-mainDark duration-300 ${
            !task.notification ? "hidden" : null
          } `}
        >
          <img className="w-5 h-5" src={trash} alt="" />
          <p className="text-mainRed opacity-50 dark:opacity-100 text-sm">remove reminder</p>
        </li>
      </ul>
    </div>
  );
}

export default Notification;
