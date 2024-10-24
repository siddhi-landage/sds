import React , {useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import Contact from '../../components/Contacts/Contact'
import Navbar from '../../components/Navbar/Navbar.jsx'

const Home = () => {
  const [ showLogin , setShowLogin ] = useState(false);

  return (
    <div> 
       <Navbar showLogin = {showLogin} setShowLogin={setShowLogin}/>
      <Header showlogin={showLogin} setShowLogin={setShowLogin} />
      <Contact showLogin={showLogin} setShowLogin={setShowLogin}/>
    </div>
  )
}

export default Home
