import { FC } from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';
import { Link } from 'react-scroll';
import './Header.css';

const Header: FC = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Tauseef Ansari</h1>
        <h5 className="text-light">React & JS Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="personal">
          <img src={ME} alt="Personal" />
        </div>
        <Link smooth to="contact" className="scroll__down">
          Scroll Down
        </Link>
      </div>
    </header>
  );
};

export default Header;
