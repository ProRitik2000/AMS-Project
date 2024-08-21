import React from "react";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Profile from "../Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App(){
    return(
        <>
        <Router>
<Routes>
<Route path="/" element={<SignUp />} />
<Route path="/SignIn" element={<SignIn/>} />
<Route path="/Profile" element={<Profile/>}/>

</Routes>
</Router>
        </>
    )

}


