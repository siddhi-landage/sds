import React from 'react'
import './Notice.css'

const Notice = () => {
  return (
    <div className="notice-section">
      <h2>Notices</h2>
      <table className="notice-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
           <h2>  notice  </h2>
          {/* {notices.map((notice, index) => (
            <tr key={index}>
              <td>{notice.title}</td>
              <td>{new Date(notice.date).toLocaleDateString()}</td>
              <td>{notice.description}</td>
              <td><img src={notice.image} alt={notice.title} className="notice-img" /></td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Notice
