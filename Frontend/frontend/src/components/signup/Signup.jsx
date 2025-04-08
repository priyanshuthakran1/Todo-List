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
    username: "",
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
      const response = await axios.post("http://localhost:1000/api/v1/register", inputs);
      console.log(response);

      // Clear inputs after successful submission
      setInputs({
        email: "",
        username: "",
        password: ""
      });

      // Show success message
      toast.success("Registration successful!");

      // Redirect to Sign-In page after a slight delay
      setTimeout(() => {
        navigate("/signin"); // Adjust the path to your Sign-In page
      }, 2000); // Optional delay for the toast to be visible

    } catch (error) {
      console.error("Error during registration:", error);
      // Show error message based on error response
      if (error.response && error.response.data) {
        toast.error(error.response.data.error || "Registration failed. Please try again.");
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
                type='email'
                name='email'
                placeholder='Enter your email'
                onChange={change}
                value={inputs.email}
              />

              <input className='p-2 my-3 input-signup'
                type='text'
                name='username'
                placeholder='Enter your Username'
                onChange={change}
                value={inputs.username}
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
              <button className='d-flex btn-signup p-2' onClick={submit}>Sign Up</button>
            </div>
          </div>
          <div className='col-lg-4 column col-left d-flex justify-content-center align-items-center'>
            <HeadingComp first={"Sign"} second={"Up"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
