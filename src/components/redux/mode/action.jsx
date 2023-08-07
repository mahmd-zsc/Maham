import * as typeAction from "./typeOfAction";

export let changeMode = () => {
  return {
    type: typeAction.CHANGE_MODE,
  };
};
