import React from "react";
import '../css/Contact.css'
function Contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3459.9744515213793!2d77.89352101435696!3d29.865010633983236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sIIT%20Roorkee!5e0!3m2!1sen!2sin!4v1669439633774!5m2!1sen!2sin"
        width="90%"
        height="350"
        style={{ border: 0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <form action="https://formspree.io/f/mwkzjnwq" method="post">
        <input name="username" placeholder="User name" type='text' required autoComplete="off"/>
        <input name="email" placeholder="Email" type='text' required autoComplete="off"/>
        <textarea name="msg" placeholder="Write your message here" col='30' row='10' required />
        <input type='submit'/>
      </form>
    </div>
  );
}

export default Contact;
