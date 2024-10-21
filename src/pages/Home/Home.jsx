import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import Contact from '../../components/Contacts/Contact'
import Navbar from '../../components/Navbar/Navbar.jsx'

const Home = () => {
  return (
    <div> 
       <Navbar />
      <Header/>
      <Contact/>
    </div>
  )
}

export default Home
