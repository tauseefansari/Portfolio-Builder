import { FC } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import './Contact.css';

const Contact: FC = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option_icon" />
            <h4>Email</h4>
            <h5>tauseeftanvir@gmail.com</h5>
            <a href="mailto:tauseeftanvir@gmail.com" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option_icon" />
            <h4>Messenger</h4>
            <h5>Tauseef Ansari</h5>
            <a href="https://m.me/tauseef51" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option_icon" />
            <h4>WhatsApp</h4>
            <h5>9321391048</h5>
            <a href="https://wa.me/+919321391048" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form
          data-bss-recipient="08bc627ccb59602b5627f027ea4a6ace"
          data-bss-subject="Contact Portfolio"
        >
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows={7} placeholder="Your Message"></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
