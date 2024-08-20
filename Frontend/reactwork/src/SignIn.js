import React from "react";

function SignIn() {
  return (
    <>
      <div
                  className="text-center mb-4 text-black bg-warning rounded-3 p-1"
                  style={{ fontFamily: "Montserrat" }}
                >
                  <h3>SignIn</h3>
                </div>
<br></br>
      <div className="mb-4" id="SignIn">
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          style={{ width: "105%",marginLeft:"-10px" }}
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          style={{ width: "105%",marginLeft:"-10px" }}
        />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          LogIn
        </button>
      </div>
      {/* </form> */}
    </>
  );
}

export default SignIn;
