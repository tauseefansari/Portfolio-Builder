import { FC } from 'react';
import { Link } from 'react-scroll';
import { Footer as FooterProps, Social } from 'modals/configuration';
import DynamicIcon from 'Common/DynamicIcon';
import 'Components/Footer/Footer.css';

type Props = {
  footerObj: FooterProps;
  socials: Social[];
};

const Footer: FC<Props> = (props) => {
  const { id, header, links, copyright } = props.footerObj;
  const { socials } = props;

  return (
    <footer id={id}>
      <Link smooth to="home" className="footer__logo">
        {header}
      </Link>
      <ul className="permalinks">
        {links.map((link, i) => (
          <li key={`FooterLink_${i}`}>
            <Link smooth to={link.id}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="footer__socials">
        {socials.map((social, i) => (
          <a key={`FooterSocial_${i}`} href={social.url} rel="noreferrer" target="_blank">
            <DynamicIcon iconName={social.iconName} />
          </a>
        ))}
      </div>
      <div className="footer__copyright">
        <small>&copy; {copyright}</small>
      </div>
    </footer>
  );
};

export default Footer;
