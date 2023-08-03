import React, { useRef, useState } from "react";
import shortId from "shortid";
import BaseAdd from "./baseAdd";
import InputInbox from "./InputInbox";
import { useSelector, useDispatch } from "react-redux/es/exports";
import * as actions from "../../redux/action";
import { set } from "date-fns";
function AddTask() {
  let [text, setText] = useState();
  let [date, setDate] = useState(null);
  let [repeat, setRepeat] = useState(null);
  let [notification, setNotification] = useState(null);
  let dispatch = useDispatch();
  let select = useSelector((state) => state.inboxTask);

  let handleSetText = (t) => {
    setText(t.target.value);
  };
  let handleDate = (d) => {
    setDate(d);
  };
  let handleRepeat = (d) => {
    setRepeat(d);
  };
  let handleNotification = (d) => {
    setNotification(d);
  };
  let sendTask = (e) => {
    e.preventDefault();
    if (text && text.length !== 0) {
      dispatch(actions.addTask(task));
      setText("");
      setDate(false);
      setRepeat(false);
      setNotification(false);
    }
  };
  let task = {
    id: shortId(),
    today: false,
    text: text,
    important: false,
    repeat: repeat,
    date: date,
    notification: notification,
    reminder: false,
    completed: false,
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.defaultPrevented()}
        className="flex-1  bg-gray-100   rounded-md shadow-lg "
        action="#"
      >
        <InputInbox text={text} handleText={handleSetText} />
        <BaseAdd
          text={text}
          send={sendTask}
          handleDate={handleDate}
          handleRepeat={handleRepeat}
          handleNotification={handleNotification}
          task={task}
          date={date}
        />
      </form>
    </div>
  );
}
export default AddTask;