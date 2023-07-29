import * as typeAction from "./typeOfAction";

export let addTask = (task) => {
  return {
    type: typeAction.ADD_INBOX_TASK,
    payload: task,
  };
};
export let removeTask = (task) => {
  return {
    type: typeAction.REMOVE_INBOX_TASK,
    payload: task,
  };
};
export let editTask = (task) => {
  return {
    type: typeAction.EDIT_INBOX_TASK,
    payload: task,
  };
};
export let makeImportant = (task) => {
  return {
    type: typeAction.MAKE_INBOX_TASK_TO_IMPORTANT,
    payload: task,
  };
};
