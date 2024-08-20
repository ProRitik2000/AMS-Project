import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
// import SignUp from "./SignUp.js";
// import Header from "./Header.js";
import SignUp from "./SignUp.js";
import SignIn from './SignIn.js'


import "./App.css";


function App() {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <Header /> */}
      <div className="container border bg-transparent rounded-1  p-5 mx-auto " style={{ width: "400px", height:"550px"}}>
        {/* <Header /> */}

        <br></br>
        <br></br>
      

        <Router>
          <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

// BrowserRouter as Router: Iska use Browser ke URL ko handle karne ke liye kiya jata hai.
// Routes: Ye wrapper component hai jo Route components ko hold karta hai.
// Route: Ye define karta hai ki kis URL path par kaun sa component render hoga.

// Navigation ke liye Link component ya useNavigate hook ka use karo.
// Programmatically navigate karne ke liye useNavigate ka use hota hai.