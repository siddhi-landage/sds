import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header.jsx'
import Contact from './components/Contacts/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Contact/>
      <Footer/>
      {/* <Card name="xyz" img={photo} contactno="+9098521" email="workcoep.com" role={2} rating={7} /> */}
    </div>
  )
}

export default App
