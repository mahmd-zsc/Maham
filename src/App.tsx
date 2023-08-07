import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./components/inbox/inbox";
import Today from "./components/today/today";
import Importatnt from "./components/important/importatnt";
import Completed from "./components/completed/completed";
import Upcoming from "./components/assigned/assigned"; // Corrected typo in import
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/Header";
import { Provider, useSelector } from "react-redux";
import Assigned from "./components/assigned/assigned";
interface RootState {
  mode: {
    mode: boolean;
  };
  // Other reducers...
}
function App() {
  const mode = useSelector((state: RootState) => state.mode.mode);
  console.log(mode);

  return (
    <div
      className={`App flex h-screen overflow-hidden ${!mode ? "dark" : ""} `}
    >
      <BrowserRouter>
        <Navbar />
        <div className="second flex flex-col flex-1 px-4 sm:px-10 bg-[#eee] dark:bg-[#041C32]">
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
