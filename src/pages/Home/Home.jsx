import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Header from './Header'
import Contact from '../../components/Contacts/Contact'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div> 
      <Navbar/>
      <Header/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
