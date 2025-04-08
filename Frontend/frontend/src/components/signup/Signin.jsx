import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate
import HeadingComp from './headingcomp';
import './signup.css';   
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Importing ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Importing CSS for the toast

const Signin = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await axios.post("http://localhost:1000/api/v1/sign-in", inputs);
        console.log(response);

        // Assuming the response contains the username in the data
        const { username } = response.data; // Extract username from response
        const {email } = response.data;

        // Show success message
        toast.success("Login successful!");

        // Save username and signed in status to local storage
        localStorage.setItem("username", username);
        localStorage.setItem("email", email); // Save email in local storage
        localStorage.setItem("isSignedIn", "true"); // Save signed in status

        // Redirect to home page after successful login
        setTimeout(() => {
            navigate("/"); // Redirect to home page
        }, 2000); // Optional delay for the toast to be visible

    } catch (error) {
        console.error("Error during login:", error);
        // Show error message based on error response
        if (error.response && error.response.data) {
            toast.error(error.response.data.message || "Login failed. Please try again.");
        } else {
            toast.error("Server error. Please try again later.");
        }
    }
};

  return (
    <div className='signup'>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 column d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column w-100 p-5'>
              <input className='p-2 my-3 input-signup'
                type='text'
                name='email'
                placeholder='Enter your email'
                onChange={change}
                value={inputs.email}
              />

              <input className='p-2 my-3 input-signup'
                type='password'
                name='password'
                placeholder='Enter your Password'
                onChange={change}
                value={inputs.password}
              />
            </div>
            <div>
              <button className='d-flex btn-signup p-2' onClick={submit}>Sign In</button>
            </div>
          </div>
          <div className='col-lg-4 column col-left d-flex justify-content-center align-items-center'>
            <HeadingComp first={"Sign"} second={"In"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
