import React, { useContext , useState} from 'react';
import './Sidebar.css';
import items from '../../assets/data.json';
import SidebarItem from '../SiderbarItem/SidebarItem.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; // Ensure correct icon import
import { StoreContext } from '../../Context/StoreContext.jsx';
import { Link , useNavigate } from "react-router-dom";

const Sidebar = ({ onClose }) => {
  const { token , settoken} = useContext( StoreContext) ;
  const navigate = useNavigate();

  const logout = () => {
      localStorage.removeItem("token");
      alert("user logout done");
      onClose();
      // navigate("/");
  }
  return (
    <div className='cover'>
      <div className='sidebar'>
        {/* Close button with onClick event to trigger onClose */}
        <div className='close-icon' onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        
        {/* Render the sidebar items */}
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))} 
          <button className='logout'  onClick={logout}> LogOut </button>
      </div>
    </div>
  );
};

export default Sidebar;
