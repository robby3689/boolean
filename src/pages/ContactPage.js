import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0f1r7fc',         // ✅ Correct Service ID
      'template_gusmhxu',        // ✅ Correct Template ID
      form.current,
      'jcYmv1bBqUk32C4U3'        // ✅ Your Public Key
    )
    .then((result) => {
        alert("✅ Message sent successfully!");
        form.current.reset();
    }, (error) => {
        alert("❌ Failed to send message. Please try again.");
        console.error(error.text);
    });
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you. Fill the form below:</p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="title" placeholder="Subject" required />
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="phone" placeholder="Phone Number (optional)" />
        <textarea name="message" placeholder="Your Message" required rows="5" />
        <input type="hidden" name="time" value={new Date().toLocaleString()} />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
