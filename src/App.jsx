// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from '../src/components/Navbar/Navbar.jsx';
import Notice from '../src/pages/Notice/Notice.jsx';
import General from '../src/pages/General/General.jsx';
import Home from '../src/pages/Home/Home.jsx';
import StoreContextProvider from '../src/Context/StoreContext'; // Import your context provider
import Footer from './components/Footer/Footer.jsx';
import Student_comp from '../src/pages/Student_comp/Student_comp.jsx';

const App = () => {
  return (
    <StoreContextProvider>
        <div className='app'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Notice' element={<Notice/>} />
              <Route path='/General' element={<General/>} />
              <Route path='/Student' element={<Student_comp/>}/>
            </Routes>
          <Footer/>
        </div>
    </StoreContextProvider>
  );
}

export default App;
