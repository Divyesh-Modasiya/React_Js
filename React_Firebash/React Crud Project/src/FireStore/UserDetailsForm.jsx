
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure your EmailJS settings and template ID match these fields
    emailjs
      .send(
        'service_9716f14', // Replace with your EmailJS service ID
        'template_7nkthtg', // Replace with your EmailJS template ID
        {
          from_name: formData.name, // Field name must match your template variables in EmailJS
          reply_to: formData.email,
          message: formData.message,
        },
        'L_wFF-RbMTI2SzGdt' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div>
      <h2>User Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserDetailsForm;
