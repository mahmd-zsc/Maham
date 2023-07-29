import React, { useRef } from "react";
import inbox from "../images/icons/inbox.png";
import inbox_white from "../images/icons/inbox-white.png";
import today from "../images/icons/today.png";
import today_white from "../images/icons/today-white.png";
import important from "../images/icons/important.png";
import important_white from "../images/icons/important-white.png";
import upcaming from "../images/icons/planning.png";
import upcaming_white from "../images/icons/planning-white.png";
import completed from "../images/icons/completed.png";
import completed_white from "../images/icons/completed-white.png";
import Inbox from "../inbox/inbox";
import { NavLink, useLocation } from "react-router-dom";
function ListOfNav({ width }) {
  let list = [
    {
      title: "inbox",
      icon: Inbox,
      icon_white: inbox_white,
      to: "/",
    },
    {
      title: "today",
      icon: today,
      icon_white: today_white,
      to: "/today",
    },
    {
      title: "important",
      icon: important,
      icon_white: important_white,
      to: "/important",
    },
    {
      title: "upcaming",
      icon: upcaming,
      icon_white: upcaming_white,
      to: "/upcaming",
    },
    {
      title: "completed",
      icon: completed,
      icon_white: completed_white,
      to: "/completed",
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
            location.pathname === li.to ? " bg-mainRed duration-500" : "" // Add bg-red-500 class when NavLink is active
          } `}
        >
          <NavLink
            className="flex items-center justify-between w-full  gap-6"
            to={li.to}
          >
            <div className="flex gap-4">
              <img className="w-5" src={li.icon_white} alt="icon" />
              {width && <p className="text-white capitalize">{li.title}</p>}
            </div>
            {width && <p className="number text-white">1</p>}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default ListOfNav;
