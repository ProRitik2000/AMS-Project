import React from "react";
// import { Link } from "react-router-dom";
import SignIn from "./SignIn";

function SignUp() {
  return (
    <>
      <div
        className="container  bg-transparent rounded-1  p-5 mx-auto "
        style={{ width: "400px", height: "550px",border:"1px solid #000000", outline: "1px solid #000000" }}
      >
        <div className="container d-flex  justify-content-center align-items-center ">
          <div className="row justify-content-center align-items-center  ">
            <div className="col justify-content-center align-items-center">
              <div className="form-container box">
                <form>
                  <div
                    className="text-center mb-4 text-black bg-warning rounded-3 p-1"
                    style={{
                      fontFamily: "Montserrat",
                      width: "135%",
                      marginLeft: "-40px",
                    }}
                  >


                    
                    <h3>SignUp</h3>
                  </div>
                  <br></br>
                  <div className="mb-4 ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      style={{ width: "135%", marginLeft: "-40px" }}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      style={{ width: "135%", marginLeft: "-40px" }}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      style={{ width: "135%", marginLeft: "-40px" }}
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                  <br></br>
                  <div className="mb-4 d-flex text-center gap-2">
                    <h6 style={{ color: "white", marginTop: "2px" }}>
                      Already have an account
                    </h6>
                    {/* <button type="submit" className="btn btn-secondary" onClick={Login()}>SignIn</button> */}

                    <a href="SignIn" onClick={SignIn()} type="submit">
                      SignIn
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
