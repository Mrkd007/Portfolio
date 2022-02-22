import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_46jbiuy', 'template_yx6mbbc', form.current, 'user_r3a5JTBcfc9Xnu5BfxFnc')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__conatiner">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>krishnadevashish17@gmail.com</h5>
            <a href="mailto:krishnadevashish17@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Krishna Devasish</h5>
            <a href="https://m.me/MrKD17" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+917077364854</h5>
            <a href="https://api.whatsapp.com/send?phone=+917978423156" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={(e) => {sendEmail(e)}}>
          <input type="text" name="name" id="userName" placeholder='Your Full Name' required />
          <input type="email" name="email" id="userEmail" placeholder='Your Email' required />
          <textarea name="message" id="userMessage" rows="7" placeholder='Your Message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact