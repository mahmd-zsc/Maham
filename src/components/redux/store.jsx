import React from "react";
import { createStore } from "redux";
import InboxReducer from "./inboxReducer";

export let Store = createStore(InboxReducer);
