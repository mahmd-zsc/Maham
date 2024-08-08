import * as actions_type from "./typeOfAction";

let initialState = {
  inboxTask: [],
};

try {
  const storedTasks = JSON.parse(window.localStorage.getItem("task"));
  if (Array.isArray(storedTasks)) {
    initialState.inboxTask = storedTasks;
  }
} catch (error) {
  console.error("Failed to parse tasks from localStorage:", error);
}

let TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions_type.ADD_TASK:
      const newStateAfterAdd = {
        inboxTask: [action.payload, ...state.inboxTask],
      };
      window.localStorage.setItem(
        "task",
        JSON.stringify(newStateAfterAdd.inboxTask)
      );
      return newStateAfterAdd;
    case actions_type.REMOVE_TASK:
      const newStateAfterRemove = {
        inboxTask: [
          ...state.inboxTask.filter((t) => t.id !== action.payload.id),
        ],
      };
      window.localStorage.setItem(
        "task",
        JSON.stringify(newStateAfterRemove.inboxTask)
      );
      return newStateAfterRemove;
    case actions_type.MAKE_TASK_TO_IMPORTANT:
      const newStateAfterImportant = {
        inboxTask: state.inboxTask.map((t) => {
          if (t.id === action.payload.id) {
            return {
              ...t,
              important: !t.important,
            };
          } else {
            return t;
          }
        }),
      };
      window.localStorage.setItem(
        "task",
        JSON.stringify(newStateAfterImportant.inboxTask)
      );
      return newStateAfterImportant;
    case actions_type.MAKE_COMPLETED:
      const newStateAfterCompleted = {
        inboxTask: state.inboxTask.map((t) => {
          if (t.id === action.payload.id) {
            return {
              ...t,
              completed: !t.completed,
            };
          } else {
            return t;
          }
        }),
      };
      window.localStorage.setItem(
        "task",
        JSON.stringify(newStateAfterCompleted.inboxTask)
      );
      return newStateAfterCompleted;
    case actions_type.MAKE_TODAY:
      const newStateAfterToday = {
        inboxTask: state.inboxTask.map((t) => {
          if (t.id === action.payload.id) {
            return {
              ...t,
              today: !t.today,
            };
          } else {
            return t;
          }
        }),
      };
      window.localStorage.setItem(
        "task",
        JSON.stringify(newStateAfterToday.inboxTask)
      );
      return newStateAfterToday;
    default:
      return state;
  }
};

export default TaskReducer;
