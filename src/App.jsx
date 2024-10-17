import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header.jsx'
import Card from './components/Card/Card.jsx'
import Contact from './components/Contacts/Contact.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Contact/>
      {/* <Card name="xyz" img={photo} contactno="+9098521" email="workcoep.com" role={2} rating={7} /> */}
    </div>
  )
}

export default App
