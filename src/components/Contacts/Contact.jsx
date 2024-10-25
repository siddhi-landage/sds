import React from 'react'
import './Contact.css'
import photo from '../../assets/worker.png'
import Card from '../Card/Card'

const workers = [
  { name: 'John Doe', role: 'Plumber', img: photo, contactno:"+12345678" , email:"workcoep.com" , rating: 7 },
  { name: 'Jane Smith', role: 'Electrician', img:photo, contactno:"+12345678"  ,email:"workcoep.com" , rating: 3 },
  { name: 'Mark Lee', role: 'Carpenter', img:photo, contactno:"+12345678", email:"workcoep.com", rating: 5 },
  { name: 'John Doe', role: 'Cleaner', img:photo, contactno:"+12345678", email:"workcoep.com", rating: 9},
  { name: 'Jane Smith', role: 'Cleaner', img:photo, contactno:"+12345678" ,email:"workcoep.com", rating: 6},
  { name: 'Mark Lee', role: 'Cleaner', img:photo, contactno:"+12345678" , email:"workcoep.com" , rating: 4 },
]

const Contact = ( { showLogin , setShowLogin}) => {
  console.log("showlogin status in conatact page;");
  console.log(showLogin);
  return (
    <div className='Contact' id='contact' style={{marginTop :showLogin ? '0vh' : '100vh'} }>
       <div className='Intro'>
          <h1> Our Team members:</h1>
          <hr/>
       </div>
    <div className="workers-list">
      {workers.map((worker, index) => (
        <Card
          key={index}
          name={worker.name}
          role={worker.role}
          img={worker.img}
          contactno= { worker.contactno}
          email={worker.email}
          rating={worker.rating}  // Pass initial rating value
        />
      ))}
      </div>
  </div>
  );
};

export default Contact
