import * as actions from "./action";

let initialState = {
  inboxTask: [],
};

let inboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.addTask:
      return {
        inboxTask: [...state.inboxTask, action.payload],
      };
    case actions.removeTask:
      return {
        inboxTask: [state.inboxTask.filter((t) => t.id !== action.payload.id)],
      };
    default:
      return state;
  }
};
