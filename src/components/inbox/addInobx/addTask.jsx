import React, { useRef, useState } from "react";
import shortId from "shortid"; // Importing a library to generate short IDs
import BaseAdd from "./baseAdd"; // Importing a component named 'BaseAdd'
import InputInbox from "./InputInbox"; // Importing a component named 'InputInbox'
import { useSelector, useDispatch } from "react-redux/es/exports"; // Importing Redux hooks for state management
import * as actions from "../../redux/task/action"; // Importing Redux action creators
import { set } from "date-fns"; // Importing a function from the date-fns library for date manipulation

function AddTask() {
  // Initializing state variables using the useState hook
  let [text, setText] = useState(); // State for task text
  let [date, setDate] = useState(null); // State for task date
  let [repeat, setRepeat] = useState(null); // State for task repeat
  let [notification, setNotification] = useState(null); // State for task notification

  // Getting access to the Redux dispatch function
  let dispatch = useDispatch();

  // Extracting a specific piece of state using the useSelector hook
  let select = useSelector((state) => state.task.inboxTask);

  // Event handlers to update the state variables
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

  // Function to send a new task to Redux store
  let sendTask = (e) => {
    e.preventDefault();
    if (text && text.length !== 0) {
      // Dispatching an action to add a task with the provided details
      dispatch(actions.addTask(task));

      // Resetting state variables after task submission
      setText("");
      setDate(false);
      setRepeat(false);
      setNotification(false);
    }
  };

  // Creating a task object with the gathered information
  let task = {
    id: shortId(), // Generating a short ID for the task
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
        onSubmit={(e) => e.defaultPrevented()} // Preventing default form submission
        className="flex-1 bg-gray-100 rounded-md shadow-lg"
        action="#"
      >
        {/* Rendering a component 'InputInbox' and passing necessary props */}
        <InputInbox text={text} handleText={handleSetText} />
        {/* Rendering a component 'BaseAdd' and passing necessary props */}
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

// Exporting the 'AddTask' component as the default export
export default AddTask;
