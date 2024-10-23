import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar_2 from '../../components/Navbar_2/Navbar_2';
import './Student_comp';
import profile from '../../../../Warden/src/assets/profile.jpeg';
import upl_img from '../../../../Warden/src/assets/upload_area.png';
import { ToastContainer } from 'react-toastify';

function Student_comp() {
  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: '',
    Room: '',
    description: '',
    category: '',
    person: ''
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const CloseForm = () => {
    setShowForm(false);
  }

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent form refresh
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('Room', data.Room);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('person', data.person);
    formData.append('image', image);

    try {
      const response = await axios.post(`http://localhost:4000/api/complaint/add`, formData); // Assuming the `url` value
      if (response.data.success) {
        setData({
          name: '',
          Room: '',
          description: '',
          category: '',
          person: ''
        });
        setImage(null);
        toast.success(response.data.message);
        console.log(response.data.message);
        CloseForm(); // Close form after successful submission
      } else {
        console.error('Failed to add complaint', response.data.message);
        toast.error('Failed to add complaint');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="App">
      <Navbar_2 src={profile} />
      <ToastContainer/>
      <div className="content">
        <button className="add-complaint-button" onClick={handleButtonClick}>
          Add Complaint
        </button>
        {showForm && (
          <form className="flex-col" onSubmit={onSubmit}>
            <div className="add-img-upload flex-row">
              <p>Upload Image</p>
              <label htmlFor="image">
                <img src={image ? URL.createObjectURL(image) : upl_img} alt="" />
              </label>
              <input
                onChange={(event) => setImage(event.target.files[0])}
                type="file"
                id="image"
                hidden
                required
              />
            </div>

            <div className="add-sub flex-row">
              <p>Name</p>
              <input
                onChange={handleOnChange}
                value={data.name}
                type="text"
                name="name"
                placeholder="Type here"
              />
            </div>

            <div className="add-room flex-row">
              <p>Room</p>
              <input
                onChange={handleOnChange}
                value={data.Room}
                type="number"
                name="Room"
                placeholder="Type here"
              />
            </div>

            <div className="add-desc flex-row">
              <p>Description</p>
              <textarea
                onChange={handleOnChange}
                value={data.description}
                name="description"
                rows="6"
                placeholder="Write here"
              />
            </div>

            <div className="add-category-price flex-row">
              <p>Category</p>
              <select onChange={handleOnChange} name="category">
                <option value="Clean">Clean</option>
                <option value="Electrical">Electrical</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Any Damages">Any Damages</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="add-your-pos flex-row">
              <p>Position</p>
              <input
                onChange={handleOnChange}
                value={data.person}
                type="text"
                name="person"
                placeholder="Type here"
              />
            </div>
            <button type="submit" className="add-btn">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Student_comp;
