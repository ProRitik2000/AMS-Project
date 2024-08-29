import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import AddAsset from "./components/AddAsset.js";
import AssetTable from "./components/AssetTable.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddAsset" element={<AddAsset />} />
          <Route path="/AssetTable" element={<AssetTable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
