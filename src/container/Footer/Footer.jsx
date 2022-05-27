import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:virajjerry123@gmail.com" className="p-text">virajjerry123@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 928 468 0743" className="p-text">+91 928 468 0743</a>
        </div>
        <div className="app__footer-card">
          <img src={images.whatsapp} alt="whatsapp" />
          <a 
          href="https://wa.me/+919284680743"
          className="p-text"
          target='_blank'
          aria-label='WhatsApp'
          rel="noopener noreferrer"
           >Connnect with me on WhatsApp
           </a>
        </div>
        <div className="app__footer-card">
          <img src={images.telegram} alt="Telegram" />
          <a 
          href="https://t.me/+919284680743"
          className="p-text"
          target='_blank'
          aria-label='Telegram'
          rel="noopener noreferrer"
           >Connnect with me on Telegram
           </a>
        </div>
      </div>
      {!isFormSubmitted ? (
      <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
        {/* <div > */}
         <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} required/>
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} required/>
          </div>
          <div>
            <textarea
              required
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="p-text">{!loading ? 'Send Message' : 'Sending...'}</button>
        {/* </div> */}
      </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  "app__whitebg"
);