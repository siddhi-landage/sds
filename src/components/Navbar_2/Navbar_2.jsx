import React from 'react'
import logo from '../../assets/coep-removebg-preview.png'
import './Navbar_2.css'

const Navbar_2 = ( {src}) => {
  return (
    <div className='Nav'>
        <img className="logo" src={logo} alt="coep_logo" />
        <h1> COEP Technological University</h1>
        <img className="profile" src={src} alt = "profile"/>
    </div>
  )
}

export default Navbar_2;
