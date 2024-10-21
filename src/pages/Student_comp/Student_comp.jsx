import React, { useState } from 'react'
import up_img from '../../assets/upload_area.png'
import Navbar_2 from '../../components/Navbar_2/Navbar_2';
import './Student_comp.css'
import profile from '../../../../Warden/src/assets/profile.jpeg'

function Student_comp() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
           <Navbar_2 src = {profile} />
      <div className="content">
        <button className="add-complaint-button" onClick={handleButtonClick}>
          Add Complaint
        </button>
        {showForm && (
          <form className="complaint-form">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Complaint:
              <textarea name="complaint"></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Student_comp;