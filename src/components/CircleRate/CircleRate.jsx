import React from 'react'
import { CircularProgressbar , buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './CircleRate.css'

const CircleRate = ({rating}) => {
  return (
    <div className='circle-rate'>
         <CircularProgressbar
                value={rating}  // Progress bar value (the current rating)
                maxValue={10}   // Maximum value for the progress bar (10 in this case)
                text={rating}   // The text shown inside the circle (the rating number itself)
                styles={buildStyles({  // Custom styles for the progress bar
                    pathColor:   // Color of the progress bar based on the rating
                        rating < 5 ? "red" 
                        : rating < 7 ? "orange" 
                        : "green",   // Dynamic color change based on rating
                })}
            />
    </div>
  )
}

export default CircleRate
