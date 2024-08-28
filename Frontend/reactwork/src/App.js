import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
// import AssetManager from "./components/AssetManager.js";
import AssetForm from "./components/AssetForm.js";
// import AssetList from "./components/AssetList.js";
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
          <Route path="/AssetForm" element={<AssetForm />} />
          <Route path="/AssetTable" element={<AssetTable />} />
          {/* <Route path="/AssetManager" element={<AssetManager />} /> */}
          {/* <Route path="/AssetList" element={<AssetList/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
