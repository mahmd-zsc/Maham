import React, { useRef } from "react";
import inbox_white from "../images/icons/inbox-white.png";
import today_white from "../images/icons/today-white.png";
import important_white from "../images/icons/important-white.png";
import upcaming_white from "../images/icons/planning-white.png";
import completed_white from "../images/icons/completed-white.png";
import inbox_dark from "../images/icons/light-mood/inbox.png";
import today_dark from "../images/icons/light-mood/today.png";
import important_dark from "../images/icons/light-mood/important.png";
import upcaming_dark from "../images/icons/light-mood/planning.png";
import completed_dark from "../images/icons/light-mood/completed.png";
import Inbox from "../inbox/inbox";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
function ListOfNav({ width }) {
  let task = useSelector((state) => state.task.inboxTask);
  let mode = useSelector((state) => state.mode.mode);
  let list = [
    {
      title: "today",

      icon_white: today_dark,
      icon_dark: today_white,
      to: "/today",
      number: task.filter((t) => t.today && !t.completed).length,
    },

    {
      title: "important",
      icon_white: important_dark,
      icon_dark: important_white,
      to: "/important",
      number: task.filter((t) => t.important && !t.completed).length,
    },
    {
      title: "assigned to",
      icon_white: upcaming_dark,
      icon_dark: upcaming_white,
      to: "/assigned",
      number: 0,
    },
    {
      title: "inbox",
      icon_white: inbox_dark,
      icon_dark: inbox_white,
      to: "/",
      number: task.filter((t) => !t.completed).length,
    },
    {
      title: "completed",
      icon_white: completed_dark,
      icon_dark: completed_white,
      to: "/completed",
      number: task.filter((t) => t.completed).length,
    },
  ];
  const location = useLocation();
  let item = useRef();
  return (
    <ul className="flex flex-col  ">
      {list.map((li) => (
        <li
          key={li.title}
          ref={item}
          className={`flex px-6 py-5  ${
            location.pathname === li.to
              ? " bg-gray-200 dark:bg-lightBlue duration-500 relative"
              : "" // Add bg-red-500 class when NavLink is active
          } `}
        >
          <NavLink
            className="flex items-center justify-between w-full  gap-6"
            to={li.to}
          >
            <div className="flex gap-4 items-center">
              <img
                className="w-5 h-5 opacity-60"
                src={mode ? li.icon_white : li.icon_dark}
                alt="icon"
              />
              {width && <p className="text-gray-400 capitalize">{li.title}</p>}
            </div>
            {width && (
              <p className="number text-gray-600 text-sm">{li.number}</p>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default ListOfNav;
