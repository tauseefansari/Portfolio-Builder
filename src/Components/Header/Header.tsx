import { FC } from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png';
import './Header.css';
import HeaderSocial from './HeaderSocial';

const Header: FC = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Tauseef Ansari</h1>
        <h5 className="text-light">React Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="personal">
          <img src={ME} alt="Personal" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
