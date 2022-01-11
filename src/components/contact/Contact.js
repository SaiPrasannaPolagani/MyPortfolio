import React, { useState } from "react";

import "./contact.css";

const Contact = () => {
  const [value, setValue] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    setValue(true);
  };
  return (
    <div className="row">
      <div className="left">
        <div className="img">
          <img src="assets/mailpic.jpg" alt="contact" />
        </div>
      </div>
      <div className="right">
        <div className="heading">
          <h1>Contact</h1>
        </div>
        <form className="form">
          <input type="text" placeholder="Email" className="input" />

          <textarea placeholder="Message" className="textarea" />
          <button type="submit" className="btn" onClick={handleSubmit}>
            Send Message
          </button>
          {value && <span> Thank you for your email, will reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
