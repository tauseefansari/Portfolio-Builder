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
          <Link smooth to="home">
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="about">
            About
          </Link>
        </li>
        <li>
          <Link smooth to="experience">
            Experience
          </Link>
        </li>
        <li>
          <Link smooth to="skills">
            Skills
          </Link>
        </li>
        <li>
          <Link smooth to="portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link smooth to="testimonials">
            Testimonials
          </Link>
        </li>
        <li>
          <Link smooth to="contact">
            Contact
          </Link>
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
