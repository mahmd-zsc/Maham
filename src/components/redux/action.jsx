// import * as typeAction from "./typeOfAction";
import * as typeAction from "./typeOfAction";

export let addTask = (task) => {
  return {
    type: typeAction.ADD_TASK,
    payload: task,
  };
};
export let removeTask = (task) => {
  return {
    type: typeAction.REMOVE_TASK,
    payload: task,
  };
};
export let editTask = (task) => {
  return {
    type: typeAction.EDIT_TASK,
    payload: task,
  };
};
export let makeImportant = (task) => {
  return {
    type: typeAction.MAKE_TASK_TO_IMPORTANT,
    payload: task,
  };
};
export let makeCompleted = (task) => {
  return {
    type: typeAction.MAKE_COMPLETED,
    payload: task,
  };
};
export let makeToday = (task) => {
  return {
    type: typeAction.MAKE_TODAY,
    payload: task,
  };
};
