import React from 'react'
import './Sidebar.css'
import items from '../../assets/data.json'
import SidebarItem from "../SiderbarItem/SidebarItem.jsx"

const Sidebar = () => {
    console.log(items)
  return (
    <div className='sidebar'>
         {items.map((item , index) => <SidebarItem key={index} item={item} />)} 
    </div>
  )
}

export default Sidebar
