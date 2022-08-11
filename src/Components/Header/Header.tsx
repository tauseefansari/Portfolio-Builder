import { FC } from 'react';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import { Link } from 'react-scroll';
import './Header.css';
import { imagePath } from '../../Helpers/Helpers';
import { Header as HeaderProps, Social } from '../../modals/configuration';

type Props = {
  headerObj: HeaderProps;
  socials: Social[];
  contactId: string;
};

const Header: FC<Props> = (props) => {
  const { id, header, title, subTitle, letsTalkBtn, downloadCVBtn, headerImage } = props.headerObj;
  const { socials, contactId } = props;

  return (
    <header id={id}>
      <div className="container header__container">
        <h5>{header}</h5>
        <h1>{title}</h1>
        <h5 className="text-light">{subTitle}</h5>
        <CTA letsTalk={letsTalkBtn} downloadCV={downloadCVBtn} />
        <HeaderSocial socials={socials} />
        <div className="personal">
          <img src={imagePath(headerImage)} alt="Personal" />
        </div>
        <Link smooth to={contactId} className="scroll__down">
          Scroll Down
        </Link>
      </div>
    </header>
  );
};

export default Header;
