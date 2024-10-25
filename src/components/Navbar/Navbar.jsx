import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/coep-removebg-preview.png';
import bellicon from '../../assets/bell-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Login from '../Login/Login.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext.jsx';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

// Properly destructuring props
const Navbar = ({ showLogin, setShowLogin }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const { token } = useContext(StoreContext); // Access token from context

  // Check for token on component mount or refresh
  useEffect(() => {
    const storedToken = localStorage.getItem('token'); // Retrieve token from localStorage
    if (storedToken) {
      setIsLoggedIn(true); // Set user as logged in
      setShowLogin(false); // Hide login form
    }
  }, [token]);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    if (isLoggedIn) {
      setShowSidebar((prev) => !prev);
    }
  };

  // Show login form when login button is clicked
  const handleLoginButtonClick = () => {
    if (isLoggedIn) {
      // Log out logic here
      localStorage.removeItem('token');
      // settoken("");
      // navigate("/"); // Remove token from localStorage
      setIsLoggedIn(false); // Set user as logged out
      toast.success("You have logged out successfully!"); // Show Toastify message
    } else {
      setShowLogin(true); // Show login form
    }
  };

  const handleClick = () => {
    window.location.href = "http://localhost:5174";
  }
  
  const handleLogin = () => {
    setShowLogin(false); 
    setIsLoggedIn(true);
    localStorage.setItem('token', 'dummy_token'); 
    toast.success("Login successful!"); 
  };

  return (
    <>
      <div className='navbar'>
        <div className='nav-left'>
          <Link to='/'><img className='navbar-img' src={logo} alt="logo" /></Link>
        </div>
        <div className='nav-mid'>
          <ul className='menu'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/Notice'><li>Notice Board</li></Link>
              {/* <h2 onClick={handleClick}> Warden </h2> */}
            </ul>
        </div>
        <div className="navbar-right">
          {/* Login/Logout Button */}
          <button type="button" className="add-btn" onClick={handleLoginButtonClick}>
            {isLoggedIn ? 'Logout' : 'Login'} {/* Show Logout if logged in, else Login */}
          </button>

          <div className="bell-icon">
            <img src={bellicon} alt="bell" />
            <div className="dot"></div>
          </div>
          <div className='bar' onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>

      {/* Show Login component if showLogin is true */}
      {showLogin && <Login onLogin={handleLogin} />}

      {/* Show Sidebar when logged in */}
      {isLoggedIn && showSidebar && <Sidebar onClose={toggleSidebar} />}

      {/* Toastify Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};

export default Navbar;
