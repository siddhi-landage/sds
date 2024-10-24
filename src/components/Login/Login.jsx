import React, { useState, useContext } from 'react';
import './Login.css';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { StoreContext } from '../../Context/StoreContext.jsx';
import axios from "axios";

const Login = ({ onLogin }) => {
  const [showsidebar, setshowsidebar] = useState(false);
  const [currentState, setCurrentState] = useState("login");
   
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { url, token , settoken } = useContext(StoreContext);
  
  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newurl = url;
    newurl += currentState === "login" ? "/api/user/login" : "/api/user/register";
    
    try {
      const response = await axios.post(newurl, data);
      if (response.data.success) {
        settoken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setshowsidebar(true);
        onLogin();
      } else {
        alert(response.data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Login/Registration error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleSidebarClose = () => {
    setshowsidebar(false);
  };

  return (
    <div className="login-page">
      <div className="login-modal">
        <h2>{currentState}</h2>
        
        <form onSubmit={handleSubmit}>
          {currentState !== "login" && 
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control one"
                placeholder="Enter name"
                name="name"
                value={data.name}
                onChange={onChange}
                required
              />
            </div>
          }
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control one"
              placeholder="Enter email"
              name="email"
              value={data.email}
              onChange={onChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter a strong password"
              name="password"
              value={data.password}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="termsCheck" />
            <label className="form-check-label" htmlFor="termsCheck">
              By continuing, I agree to the terms of use & conditions
            </label>
          </div>
          <button type="submit" className="btn-login">
            {currentState === "login" ? "Login" : "Sign Up"}
          </button>
          <p>
            {currentState === "login"
              ? <>Create a new Account? <span onClick={() => setCurrentState("Sign up")}>Click here</span></>
              : <>Already have an Account? <span onClick={() => setCurrentState("login")}>Login here</span></>
            }
          </p>
        </form>
        {showsidebar && <Sidebar onClose={handleSidebarClose} />}
      </div>
    </div>
  );
};

export default Login;
