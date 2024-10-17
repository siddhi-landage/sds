import React from 'react';
import './Navbar.css';
import logo from '../../assets/coep-removebg-preview.png';
import bellicon from  '../../assets/bell.jpeg';
const Navbar = () => {
  return (
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
        {/* <button>Sign In</button> */}
      </div>
    </div>
  );
};

export default Navbar;
