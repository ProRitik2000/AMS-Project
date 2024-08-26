import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";
import Home from "./components/Home.js";
import  Login from "./components/Login.js";
import   Register from "./components/Register.js";

import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
