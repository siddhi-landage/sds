// App.jsx
import React , {useState }from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from '../src/components/Navbar/Navbar.jsx';
import Notice from '../src/pages/Notice/Notice.jsx';
import General from '../src/pages/General/General.jsx';
import Home from '../src/pages/Home/Home.jsx';
import StoreContextProvider from '../src/Context/StoreContext'; // Import your context provider
import Footer from './components/Footer/Footer.jsx';
import Student_comp from '../src/pages/Student_comp/Student_comp.jsx';
import Worker_comp from './pages/Worker_comp/Worker_comp.jsx';
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => { 
  return (
  <GoogleOAuthProvider clientId="121631675823-qh00gv4pq8uks1bsvl7om61altuhvb7h.apps.googleusercontent.com">
    <StoreContextProvider>
        <div className='app'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Notice' element={<Notice/>} />
              <Route path='/General' element={<General/>} />
              <Route path='/Student' element={<Student_comp/>}/>
              <Route path='/Worker'  element={<Worker_comp/>}/>
            </Routes>
          <Footer/>
        </div>
    </StoreContextProvider>
   </GoogleOAuthProvider>
  );
};

export default App;
