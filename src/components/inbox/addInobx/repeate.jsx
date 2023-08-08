import React, { useRef, useState, useEffect } from "react";
import repateImg from "../../images/icons/light-mood/repeat.png"; // Importing an image file (not shown in code)
import day from "../../images/icons/repate/light/1.png"; // Importing an image file (not shown in code)
import daysOfWeek from "../../images/icons/repate/light/days.png"; // Importing an image file (not shown in code)
import month from "../../images/icons/repate/light/30.png"; // Importing an image file (not shown in code)
import week from "../../images/icons/repate/light/7.png"; // Importing an image file (not shown in code)
import year from "../../images/icons/repate/light/365.png"; // Importing an image file (not shown in code)
import customize from "../../images/icons/light-mood/custome.png"; // Importing an image file (not shown in code)
import trash from "../../images/icons/mainRed/trash.png"; // Importing an image file (not shown in code)
import { addDays, format, subDays } from "date-fns";

function DateSelector({ handleRepeat, task }) {
  let [value, setValue] = useState(false); // State for displaying the selected repeat value
  let [repeat, setRepeat] = useState(false); // State to track if a repeat option is selected
  let ul = useRef(); // Reference to the dropdown list element
  let img = useRef(); // Reference to the repeat icon element

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
    ul.current.classList.toggle("hidden"); // Toggle the visibility of the dropdown list
  };

  let list = [
    {
      text: "day later",
      img: day,
    },
    {
      text: "days of the week",
      img: daysOfWeek,
    },
    {
      text: "Weekly",
      img: week,
    },
    {
      text: "monthly",
      img: month,
    },
    {
      text: "annually",
      img: year,
    },
  ];

  let handleChangeRepeat = (e) => {
    handleRepeat(e.text); // Set the selected repeat option in the parent component
    setRepeat(true);
    setValue(e.text);
    ul.current.classList.toggle("hidden");
  };

  let handleRemoveRepeat = () => {
    handleRepeat(false); // Remove the selected repeat option in the parent component
    setRepeat(false);
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
          repeat && task.repeat
            ? "flex items-center px-2 py-1 border border-gray-400 bg-gray-50 dark:bg-mainDark gap-1 rounded-sm shadow-md"
            : null
        }
      >
        <img className="w-4 h-4 cursor-pointer" src={repateImg} alt="" />
        {task.repeat && <p className="text-xs text-gray-400">{value}</p>}
      </div>

      <ul
        ref={ul}
        className={`menu absolute bg-gray-50 dark:bg-secondDark dark:border dark:border-lightBlue w-52 rounded-sm shadow-lg left-1/2 -translate-x-1/2 top-7 capitalize z-30 hidden `}
      >
        {/* Dropdown list header */}
        <h3 className="px-4 py-4 text-center text-gray-600 dark:text-white font-bold">
          repeat
        </h3>
        <div className="line bg-gray-200 dark:bg-LightDark h-[2px] "></div>
        {/* Iterate over the list of predefined repeat options */}
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
        <div className={`line bg-gray-200 dark:bg-LightDark h-[2px]`}></div>
        {/* Option to customize repeat */}
        <li
          onClick={() => handleRemoveRepeat()}
          className={`px-4 py-3 flex items-center gap-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-mainDark duration-300 
           
           `}
        >
          <img className="w-5 h-5" src={customize} alt="" />
          <p className="text-gray-400 flex items-center justify-between w-full text-sm">
            Customize
          </p>
        </li>
        {/* Separator line */}
        <div
          className={`line bg-gray-200 dark:bg-LightDark h-[2px] ${
            !task.repeat ? "hidden" : null
          }`}
        ></div>
        {/* Option to remove repeat */}
        <li
          onClick={handleRemoveRepeat}
          className={`px-4 py-3 flex items-center gap-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-mainDark duration-300 ${
            !task.repeat ? "hidden" : null
          } `}
        >
          <img className="w-5 h-5" src={trash} alt="" />
          <p className="text-mainRed opacity-50 text-sm">Non-repetition</p>
        </li>
      </ul>
    </div>
  );
}

export default DateSelector;
