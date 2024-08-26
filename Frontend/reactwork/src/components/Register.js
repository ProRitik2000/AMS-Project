import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';
function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleRegister = async (e) => {
    e.preventDefault();

      // Check if email and password fields are empty
      if (!email || !password || !username) {
        swal({
          title: 'Error!',
          text: 'All the fields are required.',
          icon: 'warning',
        buttons: 'OK'
        });
        return;
      }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        username,
        email,
        password
      });
 
      if (response.data.success) {
        swal({
          title: 'Success!',
          text: 'Registration successful!',
          icon: 'success',
          buttons: 'OK'
        });
      } else {
        swal({
          title: 'Failed!',
          text: 'Registration failed!',
          icon: 'error',
          buttons: 'OK'
        });
      }

      
    } catch (error) {
      console.error('Error during registration:', error);
      swal({
        title: 'Error!',
        text: 'An error occurred during registration.',
        icon: 'error',
        buttons: 'OK'
      });
    }
  };
 

  return (
    <>
      <div
        className="container bg-transparent rounded-1 p-5 mx-auto"
        style={{
          width: "400px",
          height: "550px",
          border: "1px solid #000000",
          outline: "1px solid #000000",
          marginTop: "13%",
        }}
      >
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row justify-content-center align-items-center">
            <div className="col justify-content-center align-items-center">
              <div className="form-container box">
                <form onSubmit={handleRegister}>
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
                  <br />
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      style={{ width: "135%", marginLeft: "-40px" }}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ width: "135%", marginLeft: "-40px" }}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ width: "135%", marginLeft: "-40px" }}
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                  <br />
                  <div className="mb-4 d-flex text-center gap-2">
                    <h6 style={{ color: "white", marginTop: "2px" }}>
                      Already have an account?
                    </h6>
                    <a href="/login" >
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

export default Register;
