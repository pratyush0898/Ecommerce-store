import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Page/Login/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
