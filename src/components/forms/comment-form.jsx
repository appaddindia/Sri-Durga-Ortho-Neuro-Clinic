import React, { useState } from "react";
import axios from 'axios';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateForm = () => {
    if (!name || !email || !phone || !message) {
      return "All fields are required.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Please enter a valid email address.";
    }
    if (!/^\d+$/.test(phone)) {
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
      toke: "1dytfchtgfghvyhvvhvh",
      toemail: ["vinayak@appaddindia.com","info@appadd.in","sridurgaorthoneuroclinic@gmail.com"],
      name: name,
      message: message,
      email: email,
      phone: phone
    };

    try {
      const response = await axios.post('https://email.appaddindia.net/company', data);
      console.log(response.data);
      setSuccess('Your message has been sent successfully!');
      setError('');
      // Reset form fields after submission
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error(error);
      setError('An error occurred while sending your message. Please try again.');
      setSuccess('Message is send');
    }
  };
  return (
    <>
      <div style={{padding:"30px 25px",backgroundColor:"#f0fff0",borderRadius:"8px"}} className="postbox__comment-form">
        <h3 className="postbox__comment-form-title">Leave a Quation</h3>
        <p style={{marginBottom:"15px"}}>
          Your email address will not be published. Required fields are marked *
        </p>
        <form onSubmit={handleSubmit}>
      <div className="row">
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <div className="col-xxl-12 col-xl-12 col-lg-12">
          <div className="postbox__comment-input">
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-xxl-12 col-xl-12 col-lg-12">
          <div className="postbox__comment-input">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-xxl-12 col-xl-6 col-lg-12">
          <div className="postbox__comment-input">
            <input
              type="text"
              placeholder="Enter your number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-input">
            <textarea
              placeholder="Type your comment"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="postbox__comment-btn">
            <button type="submit" className="tp-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
      </div>
    </>
  );
};

export default CommentForm;
