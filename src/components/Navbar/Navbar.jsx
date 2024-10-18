import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/coep-removebg-preview.png';
import bellicon from '../../assets/bell.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Login from '../Login/Login.jsx'

const Navbar = ( {oonShowLogin }) => {
  const[showLogin, setshowlogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Login will appear in 1 sec");
      setshowlogin(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log('showLogin state has changed:', showLogin);
  }, [showLogin]);

  const toggle = () => {
    setshowsidebar(!showsidebar);
  };

  const handlelogin = () => {
    setshowlogin(false);
  };

  return (
    <>
      <div className='navbar'>
        <div className='nav-left'>
          <img className='navbar-img' src={logo} alt="logo" />
          <ul className='menu'>
            <li>Home</li>
            <li>Contacts</li>
            <li>Notice Section</li>
            <li>General Discussion</li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="bell-icon">
            <img src={bellicon} alt="bell" />
            <div className="dot"></div>
          </div>
          <div className='bar' onClick={toggle}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>

      {showLogin  && <Login onLogin={handlelogin}/>}
    </>
  );
};

export default Navbar;
