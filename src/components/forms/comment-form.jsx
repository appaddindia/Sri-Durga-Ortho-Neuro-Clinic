import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

const CommentForm = ({ data, doctorData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  console.log("doctorData", doctorData);

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
      setSuccess("");
      return;
    }

    const data = {
      toke: "1dytfchtgfghvyhvvhvh",
      toemail: [
        "vinayak@appaddindia.com",
        "info@appadd.in",
        "sridurgaorthoneuroclinic@gmail.com",
      ],
      name: name,
      message: message,
      email: email,
      phone: phone,
    };

    try {
      const response = await axios.post(
        "https://email.appaddindia.net/company",
        data
      );
      console.log(response.data);
      setSuccess("Your message has been sent successfully!");
      setError("");
      // Reset form fields after submission
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setError(
        "An error occurred while sending your message. Please try again."
      );
      setSuccess("Message is send");
    }
  };
  return (
    <>
      <div
        style={{
          padding: "30px 25px",
          backgroundColor: "#f0fff0",
          borderRadius: "8px",
        }}
        className="postbox__comment-form"
      >
        {/* <h3 className="postbox__comment-form-title">Leave a Quation</h3> */}
        {/* <p style={{marginBottom:"15px"}}>
          Your email address will not be published. Required fields are marked *
        </p> */}
        <div>
          <div className="row">
            {/* {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>} */}
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="postbox__comment-input">
                {doctorData?.map((item, index) => (
                  <div key={index}>
                    {item.doctorDetails && (
                      <>
                        <img
                          src={item.doctorDetails.image}
                          style={{ width: "100%" }}
                          alt=""
                        />
                        <h4 style={{ marginTop: "10px" }}>
                          {item.doctorDetails.name}
                        </h4>
                        <span>{item.doctorDetails.designation}</span>
                        <p>{item.doctorDetails.qualification}</p>
                        <div
                          className="postbox__comment-btn"
                          style={{ textAlign: "center" }}
                        >
                          <a href={item.doctorDetails.link}>
                            <button className="tp-btn">View Profile</button>
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
