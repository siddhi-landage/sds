import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/coep-removebg-preview.png';
import bellicon from '../../assets/bell.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  const [showsidebar, setshowsidebar] = useState(false);

  const toggle = () => {
    setshowsidebar(!showsidebar);
  };

  const closeSidebar = () => {
    setshowsidebar(false); // Function to close the sidebar
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

      {/* Conditionally render the Sidebar */}
      {showsidebar && <Sidebar onClose={closeSidebar} />}
    </>
  );
};

export default Navbar;
