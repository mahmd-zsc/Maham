import React, { useEffect, useRef } from "react";
import Date from "./date";
import Repeate from "./repeate";
import Notification from "./notification";
function BaseAdd({
  send,
  text,
  handleDate,
  task,
  date,
  handleRepeat,
  handleNotification,
}) {
  let add = useRef();
  useEffect(() => {
    if (text && text.length > 0) {
      add.current.classList.add("text-mainRed");
    } else {
      add.current.classList.remove("text-mainRed");
    }
  }, [text]);
  return (
    <div className="w-full relative h-10 px-6 items-center justify-between bg-gray-200 flex   ">
      <div className="flex items-center gap-5">
        <Date task={task} handleDate={handleDate} closeCheck={date} />
        <Repeate task={task} handleRepeat={handleRepeat} />
        <Notification task={task} handleNotification={handleNotification} />
      </div>
      <input
        ref={add}
        onClick={send}
        className=" border border-gray-300 px-2 py-1 text-sm w-fit h-fit cursor-pointer bg-white rounded-sm text-gray-400  "
        type="submit"
        value="Add"
      />
    </div>
  );
}

export default BaseAdd;
