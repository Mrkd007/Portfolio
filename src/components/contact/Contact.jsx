import React, { useRef } from 'react';
import './Contact.css'
import Phone from '../../img/Phone_icon.png';
import Email from '../../img/Email-icon.png';
import Address from '../../img/Address-icon.png';

function Contact() {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss the project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="Phone" className="c-icon" /> +91 7978423156
            </div>
            <div className="c-info-item">
              <img src={Email} alt="Email" className="c-icon" /> krishnadevashish17@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="Address" className="c-icon" /> Begur, Bengaluru, Karnatka - 560068
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>what's your story?</b> Get in touch. Always available for freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="user_name" placeholder="Name" />
            <input type="text" name="user_subject" placeholder="Subject" />
            <input type="email" name="user_email" placeholder="Email" />
            <textarea name="message" rows="5" placeholder="Message"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact