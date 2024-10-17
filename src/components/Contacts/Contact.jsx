import React from 'react'
import './Contact.css'
import photo from '../../assets/Premium Vector _ Cleaning Service Logo Template Design Vector, Emblem, Design Concept, Creative Symbol, Icon.jpeg'
import Card from '../Card/Card'

const workers = [
  { name: 'John Doe', role: 'Plumber', img: photo, contactno:"+12345678" , email:"workcoep.com" , rating: 7 },
  { name: 'Jane Smith', role: 'Electrician', img:photo, contactno:"+12345678"  ,email:"workcoep.com" , rating: 3 },
  { name: 'Mark Lee', role: 'Carpenter', img:photo, contactno:"+12345678", email:"workcoep.com", rating: 5 },
  { name: 'John Doe', role: 'Cleaner', img:photo, contactno:"+12345678", email:"workcoep.com", rating: 9},
  { name: 'Jane Smith', role: 'Cleaner', img:photo, contactno:"+12345678" ,email:"workcoep.com", rating: 5},
  { name: 'Mark Lee', role: 'Cleaner', img:photo, contactno:"+12345678" , email:"workcoep.com" , rating: 7 },
]

const Contact = () => {
  return (
    <div className='Contact'>
       <div className='Intro'>
          <h1> Our Team memebers:</h1>
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
