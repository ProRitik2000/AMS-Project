import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import SignUp from "./SignUp.js";
// import Header from "./Header.js";
import SignUp from "./SignUp.js";
import SignIn from "./SignIn.js";
import Profile from "./Profile.js";
import {Navbar,Nav,NavDropdown,Container} from "react-bootstrap"


import "./App.css";

function App() {
  return (
    <>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// BrowserRouter as Router: Iska use Browser ke URL ko handle karne ke liye kiya jata hai.
// Routes: Ye wrapper component hai jo Route components ko hold karta hai.
// Route: Ye define karta hai ki kis URL path par kaun sa component render hoga.

// Navigation ke liye Link component ya useNavigate hook ka use karo.
// Programmatically navigate karne ke liye useNavigate ka use hota hai.
