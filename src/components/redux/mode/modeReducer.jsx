import * as actions_type from "./typeOfAction";

// Make sure to set a default mode value here if localStorage.getItem("mode") returns null or undefined.
let initialState = {
  mode: localStorage.getItem("mode") || "default_mode",
};

let ModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions_type.CHANGE_MODE:
      return {
        ...state, // Spread the existing state to avoid losing other properties
        mode: !state.mode, // Update the mode using the negation of the current mode
      };
    default:
      return state; // Return the existing state for any other action
  }
};

export default ModeReducer;
