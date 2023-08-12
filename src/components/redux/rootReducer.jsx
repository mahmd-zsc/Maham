import { combineReducers } from "redux";
import TaskReducer from "./task/taskReducer";
import ModeReducer from "./setting/modeReducer";
let RootReducer = combineReducers({
  task: TaskReducer,
  mode: ModeReducer,
});
export default RootReducer;
