"use client"
import React, { useState } from "react";
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    website: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, number, message, website } = formData;
    if (!name || !email || !number || !message || !website) {
      return "All fields are required.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Please enter a valid email address.";
    }
    if (!/^\d[\d\s-]*$/.test(number)) {
      return "Please enter a valid phone number.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess('');
      return;
    }

    const data = {
      toke: "1dytfchtgfghvyhvvhvh", // Corrected key
      toemail: ["vinayak@appaddindia.com","info@appadd.in","sridurgaorthoneuroclinic@gmail.com"],
      name: formData.name,
      message: formData.message,
      email: formData.email,
      phone: formData.number,
      department: formData.website
    };

    try {
      const response = await axios.post('https://email.appaddindia.net/company', data);
      console.log(response.data);
      setSuccess('Your message has been sent successfully!');
      setError('');
      setFormData({ name: '', email: '', number: '', website: '', message: '' }); // Reset form
    } catch (error) {
      console.error(error);
      setError('An error occurred while sending your message. Please try again.');
      setSuccess('');
    }
  };

  return (
    <>
      <div className="contactform__list mb-60">
        <form onSubmit={handleSubmit} id="contact-form" method="post">
          <div className="row">
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="number"
                  type="tel" // Changed to tel for better UX
                  placeholder="Enter your number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contactform__input mb-30">
                <input
                  name="website"
                  type="text"
                  placeholder="Enter department name"
                  value={formData.website}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input mb-30">
                <textarea
                  name="message"
                  placeholder="Type your comment"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contactform__input mb-30-btn">
                <button type="submit" className="tp-btn">
                  Send Message
                </button>
              </div>
              <p className="ajax-response"></p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
