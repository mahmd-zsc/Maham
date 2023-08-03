import React, { useRef, useState, useEffect } from "react";
import dateImg from "../../images/icons/calendar.png";
import todayImg from "../../images/icons/today-date.png";
import calenderImg from "../../images/icons/calendar-date.png";
import tomorrowImg from "../../images/icons/tomorrow-date.png";
import nextWeekImg from "../../images/icons/nextWeek-date.png";
import trash from "../../images/icons/trash.png";
import { addDays, format, subDays } from "date-fns";

function DateSelector({ handleDate, task }) {
  let [value, setValue] = useState(false);
  let [date, setDate] = useState(false);
  let ul = useRef();
  let img = useRef();
  const currentDate = new Date();
  const Tomorrow = addDays(new Date(), 1);
  const nextWeek = subDays(new Date(), 1);
  const nextWeekDayName = format(nextWeek, "EEE");
  const todayDayName = format(currentDate, "EEE");
  const tomorrowDayName = format(Tomorrow, "EEE");
  const nextWeekDate = addDays(currentDate, 6);
  const nextWeekFormattedDate = format(nextWeekDate, "MMMM d");

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
      text: "today",
      img: todayImg,
      day: todayDayName,
      short: "today",
    },
    {
      text: "tomorrow",
      img: tomorrowImg,
      day: tomorrowDayName,
      short: "tomorrow",
    },
    {
      text: "next week",
      img: nextWeekImg,
      day: nextWeekDayName,
      short: "Due " + nextWeekDayName + ", " + nextWeekFormattedDate,
    },
  ];
  let handleChangeDate = (e) => {
    handleDate(e.text);
    setDate(true);
    setValue(e.short);
    ul.current.classList.toggle("hidden");
  };
  let handleRemoveDate = () => {
    handleDate(false);
    setDate(false);
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
          date && task.date
            ? "flex items-center px-2 py-1 border border-gray-400 bg-gray-50 gap-1 rounded-sm shadow-md"
            : null
        }
      >
        <img className="w-4 h-4 cursor-pointer  " src={dateImg} alt="" />
        {task.date && <p className=" text-xs text-gray-400">{value}</p>}
      </div>

      <ul
        ref={ul}
        className={`menu absolute bg-gray-50 w-52 rounded-sm shadow-lg left-1/2 -translate-x-1/2 top-7 capitalize z-30 hidden `}
      >
        <h3 className="px-4 py-4 text-center text-gray-600 font-bold">due date</h3>
        <div className="line bg-gray-200 h-[2px] "></div>
        {list.map((li) => (
          <li
            key={li.text}
            onClick={(e) => handleChangeDate(li)}
            className="px-4 py-2 flex items-center gap-2 hover:bg-gray-200 duration-300 cursor-pointer "
          >
            <img className="w-5 h-5" src={li.img} alt={li.text} />
            <p className="text-gray-400 flex items-center justify-between w-full text-sm">
              {li.text} <span className=" text-xs">{li.day}</span>
            </p>
          </li>
        ))}

        <div className={`line bg-gray-200 h-[2px]`}></div>
        <li
          onClick={() => handleRemoveDate()}
          className={`px-4 py-3 flex items-center gap-2 cursor-pointer hover:bg-gray-200 duration-300 
           
           `}
        >
          <img className="w-5 h-5" src={calenderImg} alt="" />
          <p className=" text-gray-400 flex items-center justify-between w-full text-sm">
            chose date
          </p>
        </li>
        <div
          className={`line bg-gray-200 h-[2px] ${
            !task.date ? "hidden" : null
          } `}
        ></div>
        <li
          onClick={handleRemoveDate}
          className={`px-4 py-3 flex items-center gap-2 cursor-pointer hover:bg-gray-200 duration-300 ${
            !task.date ? "hidden" : null
          } `}
        >
          <img className="w-5 h-5" src={trash} alt="" />
          <p className="text-mainRed opacity-50 text-sm">remove due date</p>
        </li>
      </ul>
    </div>
  );
}

export default DateSelector;
