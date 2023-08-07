import React from "react";
import { createStore } from "redux";
import TaskReducer from "./task/taskReducer";
import RootReducer from "./rootReducer";

export let Store = createStore(RootReducer);
