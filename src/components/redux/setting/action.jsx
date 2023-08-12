import * as typeAction from "./typeOfAction";

export let changeMode = () => {
  return {
    type: typeAction.CHANGE_MODE,
  };
};
export let changePath = (path) => {
  return {
    type: typeAction.CHANGE_PATH,
    payload: path,
  };
};
