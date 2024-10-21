import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/coep-removebg-preview.png';
import bellicon from '../../assets/bell.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Login from '../Login/Login.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx'; // Make sure to import the Sidebar component
import {Link , useNavigate} from 'react-router-dom';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Login will appear in 1 sec");
      setShowLogin(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log('showLogin state has changed:', showLogin);
  }, [showLogin]);

  const toggleSidebar = () => {
    if (isLoggedIn) {
      setShowSidebar((prev) => !prev); // Only toggle if logged in
    }
  };

  const handleLogin = () => {
    setShowLogin(false);
    setIsLoggedIn(true); // Update the login state on successful login
  };

  return (
    <>
      <div className='navbar'>
        <div className='nav-left'>
         <Link to='/'><img className='navbar-img' src={logo} alt="logo" /></Link> 
          <ul className='menu'>
            <li>Home</li>
            <Link to='/Notice'><li>Notice Section</li></Link>
            <li>General Discussion</li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="bell-icon">
            <img src={bellicon} alt="bell" />
            <div className="dot"></div>
          </div>
          <div className='bar' onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      
      {showLogin && <Login onLogin={handleLogin} />}
      {showSidebar && <Sidebar onClose={toggleSidebar} />} {/* Assuming you have a Sidebar component */}
    </>
  );
};

export default Navbar;
