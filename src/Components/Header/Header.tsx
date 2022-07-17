import { FC } from 'react';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import { Link } from 'react-scroll';
import './Header.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { imagePath } from '../../Helpers/Helpers';

const Header: FC = () => {
  const configuration = useSelector((state: RootState) => state.config.configuration);
  const { me } = configuration.imagesPreload;
  const { header, title, subTitle } = configuration.home;

  return (
    <header id="home">
      <div className="container header__container">
        <h5>{header}</h5>
        <h1>{title}</h1>
        <h5 className="text-light">{subTitle}</h5>
        <CTA />
        <HeaderSocial />
        <div className="personal">
          <img src={imagePath(me)} alt="Personal" />
        </div>
        <Link smooth to="contact" className="scroll__down">
          Scroll Down
        </Link>
      </div>
    </header>
  );
};

export default Header;
