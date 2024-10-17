import React from 'react'
import './Card.css'
import CircleRate from '../CircleRate/CircleRate'

const Card = ({name ,img , contactno , email ,role , rating}) => {
  return (
    <div className='SingleCard'> 
       <img src={img} alt={`${name}'s img`} className='workerimg'/>
        <div className='Info'>
            <div className='rating'>
               <CircleRate rating={rating}/>
            </div>
            <div className='other'>
              <h2>Name : {name}</h2>
              <h2>Role:{role}</h2>
              <h2>Contact :{contactno}</h2>
              <h2>Email: {email}</h2>
            </div>
        </div>
    </div>
  )
}

export default Card
