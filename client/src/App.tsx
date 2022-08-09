import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./app.scss"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
