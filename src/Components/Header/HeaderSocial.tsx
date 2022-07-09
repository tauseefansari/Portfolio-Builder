import { FC } from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

const HeaderSocial: FC = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocial;
