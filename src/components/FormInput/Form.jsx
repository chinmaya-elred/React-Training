import React, { useState } from "react";
import './Form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div className="form-container">
      <h1>React Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData.length > 0 && (
        <div className="submitted-data">
          <h2>Submitted Data</h2>
          {submittedData.map((data, index) => (
            <div key={index} className="card">
              <h3>Submission {index + 1}</h3>
              <p>First Name: {data.firstName}</p>
              <p>Last Name: {data.lastName}</p>
              <p>Email: {data.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Form;
