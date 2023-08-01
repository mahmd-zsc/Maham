import React, { useRef, useState } from "react";
import shortId from "shortid";
import BaseAdd from "./baseAdd";
import InputInbox from "./InputInbox";
import { useSelector, useDispatch } from "react-redux/es/exports";
import * as actions from "../../redux/action";
function AddTask() {
  let [text, setText] = useState();
  let dispatch = useDispatch();
  let select = useSelector((state) => state.inboxTask);

  let handleSetText = (t) => {
    setText(t.target.value);
  };
  let sendTask = (e) => {
    e.preventDefault();
    if (text.length !== 0) {
      dispatch(actions.addTask(task));
      setText("");
    }
  };
  let task = {
    id: shortId(),
    today: false,
    text: text,
    important: true,
    repeat: false,
    date: false,
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
        <BaseAdd send={sendTask} text={text} />
      </form>
    </div>
  );
}
export default AddTask;
