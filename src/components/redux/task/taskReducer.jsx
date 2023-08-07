import * as actions_type from "./typeOfAction";

let initialState = {
  inboxTask: [],
};

let TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions_type.ADD_TASK:
      return {
        inboxTask: [action.payload, ...state.inboxTask],
      };
    case actions_type.REMOVE_TASK:
      return {
        inboxTask: [
          ...state.inboxTask.filter((t) => t.id != action.payload.id),
        ],
      };
    case actions_type.MAKE_TASK_TO_IMPORTANT:
      return {
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
    case actions_type.MAKE_COMPLETED:
      return {
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
    case actions_type.MAKE_TODAY:
      return {
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
    default:
      return state;
  }
};

export default TaskReducer;
