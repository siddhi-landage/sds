import React, { useContext , useState} from 'react'
import './Notice.css'
import { StoreContext } from '../../Context/StoreContext';
import Navbar_2 from '../../components/Navbar_2/Navbar_2.jsx';
import clean from '../../assets/clean.jpg'
const Notice = () => {
  const {notice_list , url } = useContext(StoreContext)
  return (
    <div className='complete'>
        <Navbar_2 src ={clean}/>
        <div className="notice-section">
             <table className="notice-table">
               <thead>
                  <tr>
                    <th>Sr.no</th>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Image</th>
                   </tr>
              </thead>
        <tbody>
          {notice_list.map((notice, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{new Date(notice.Date).toLocaleDateString()}</td>
              <td>{notice.subject}</td>
              <td><img src={`http://localhost:4000/images/${notice.image}`} alt={notice.subject} className="notice-img" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Notice
