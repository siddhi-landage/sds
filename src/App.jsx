import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header.jsx'
import Contact from './components/Contacts/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Header/>
      <Contact/>
      <Footer/> 
    </div>
  )
}

export default App
