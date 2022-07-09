import { FC } from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer: FC = () => {
  return (
    <footer>
      <Link smooth to="home" className="footer__logo">
        Tauseef Ansari
      </Link>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com/tauseef-ansari" rel="noreferrer" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/tauseefansari" rel="noreferrer" target="_blank">
          <BsGithub />
        </a>
        <a href="https://facebook.com/tauseef51" rel="noreferrer" target="_blank">
          <BsFacebook />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Tauseef Ansari All right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
