import notificationImg from "../../images/icons/notification.png";
import React, { useRef, useState, useEffect } from "react";
import today from "../../images/icons/Notification/today.png";
import tomorrow from "../../images/icons/Notification/tomorrow.png";
import nextWeek from "../../images/icons/Notification/next-week.png";

import trash from "../../images/icons/trash.png";
import { addDays, format, subDays } from "date-fns";

function Notification({ handleNotification, task }) {
  let [value, setValue] = useState(false);
  let [notification, setNotification] = useState(false);
  let ul = useRef();
  let img = useRef();

  useEffect(() => {
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
    ul.current.classList.toggle("hidden");
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
    handleNotification(e.text);
    setNotification(true);
    setValue(e.text);
    ul.current.classList.toggle("hidden");
  };
  let handleRemoveRepeat = () => {
    handleNotification(false);
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
            ? "flex items-center px-2 py-1 border border-gray-400 bg-gray-50 gap-1 rounded-sm shadow-md"
            : null
        }
      >
        <img
          className="w-4 h-4 cursor-pointer  "
          src={notificationImg}
          alt=""
        />
        {task.notification && <p className=" text-xs text-gray-400">{value}</p>}
      </div>

      <ul
        ref={ul}
        className={`menu absolute bg-gray-50 w-52 rounded-sm shadow-lg left-1/2 -translate-x-1/2 top-7 capitalize z-30 hidden `}
      >
        <h3 className="px-4 py-4 text-center text-gray-600 font-bold">reminder</h3>
        <div className="line bg-gray-200 h-[2px] "></div>
        {list.map((li) => (
          <li
            key={li.text}
            onClick={(e) => handleChangeRepeat(li)}
            className="px-4 py-2 flex items-center gap-2 hover:bg-gray-200 duration-300 cursor-pointer "
          >
            <img className="w-5 h-5" src={li.img} alt={li.text} />
            <p className="text-gray-400     text-sm">{li.text}</p>
          </li>
        ))}

        <div
          className={`line bg-gray-200 h-[2px] ${
            !task.notification ? "hidden" : null
          } `}
        ></div>
        <li
          onClick={handleRemoveRepeat}
          className={`px-4 py-3 flex items-center gap-2 cursor-pointer hover:bg-gray-200 duration-300 ${
            !task.notification ? "hidden" : null
          } `}
        >
          <img className="w-5 h-5" src={trash} alt="" />
          <p className="text-mainRed opacity-50 text-sm">remove reminder</p>
        </li>
      </ul>
    </div>
  );
}

export default Notification;