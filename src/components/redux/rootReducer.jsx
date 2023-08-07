import { combineReducers } from "redux";
import TaskReducer from "./task/taskReducer";
import ModeReducer from "./mode/modeReducer";
let RootReducer = combineReducers({
  task: TaskReducer,
  mode: ModeReducer,
});
export default RootReducer;
