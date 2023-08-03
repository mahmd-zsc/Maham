import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./components/inbox/inbox";
import Today from "./components/today/today";
import Importatnt from "./components/important/importatnt";
import Completed from "./components/completed/completed";
import Upcaming from "./components/assigned/assigned";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/Header";
import { Provider } from "react-redux";
import Assigned from "./components/assigned/assigned";

function App() {
  return (
    <div className="App flex h-screen ">
      <BrowserRouter>
        <Navbar />
        <div className=" second flex flex-col flex-1 px-4 sm:px-10 bg-[#eee] ">
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
