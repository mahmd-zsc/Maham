import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./components/inbox";
import Today from "./components/today";
import Importatnt from "./components/importatnt";
import Completed from "./components/completed";
import Assigned from "./components/assigned"; // Corrected typo in import
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/Header";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.mode.mode);
  const task = useSelector((state) => state.task.inboxTask);
  useEffect(() => {
    window.localStorage.task = JSON.stringify(task);
  }, [task]);
  return (
    <div
      className={`App flex h-screen overflow-hidden ${!mode ? "dark" : ""} `}
    >
      <BrowserRouter>
        <Navbar />

        <div className="second flex flex-col flex-1 px-4 sm:px-10 bg-[#eae9e9] dark:bg-mainDark dark:text-white">
          <Header />

          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/today" element={<Today />} />
            <Route path="/important" element={<Importatnt />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/assigned" element={<Assigned />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
