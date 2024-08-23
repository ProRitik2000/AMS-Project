import React from "react";
import Profile from "./Profile.js";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/profile");
  };

  return (
    <>
      <div
        className="container  bg-transparent rounded-1  p-5 mx-auto "
        style={{ width: "400px", height: "550px",border:"1px solid #000000", outline: "1px solid #000000"  }}
      >
        <div
          className="text-center mb-4 text-black bg-warning rounded-3 p-1"
          style={{
            fontFamily: "Montserrat",
            width: "102%",
            marginLeft: "-3px",
          }}
        >
          <h3>SignIn</h3>
        </div>
        <br></br>
        <div className="mb-4" id="SignIn">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            style={{ width: "102%", marginLeft: "-3px" }}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            style={{ width: "102%", marginLeft: "-3px" }}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            onClick={handleLogin}
            className="btn btn-primary"
          >
            LogIn
          </button>
        </div>
      </div>

      {/* </form> */}
    </>
  );
}

export default SignIn;
