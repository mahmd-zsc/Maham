import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inbox from "./components/inbox/inbox";
import Today from "./components/today/today";
import Importatnt from "./components/important/importatnt";
import Completed from "./components/completed/completed";
import Upcaming from "./components/upcaming/upcaming";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App flex h-screen ">
      <BrowserRouter>
        <Navbar />
        <div className=" flex-1 px-4 sm:px-10  ">
          <Header />
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/today" element={<Today />} />
            <Route path="/important" element={<Importatnt />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/upcaming" element={<Upcaming />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
