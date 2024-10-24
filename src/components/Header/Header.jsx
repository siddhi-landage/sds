import React from 'react'
import './Header.css'
import photo from '../../assets/coep hostel.jpg'
import New from '../New/New.jsx'
const Header = ({showlogin ,  showtext ,  setShowLogin , setshowtext}) => {
  return (
    <div className='Header'>
      {showlogin ? <></> : <New/>}
    </div>
  )
}

export default Header
