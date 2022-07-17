import { FC } from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const HeaderSocial: FC = () => {
  const configuration = useSelector((state: RootState) => state.config.configuration);
  const { linkedIn, github, facebook } = configuration.links;

  return (
    <div className="header__socials">
      <a href={linkedIn} rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href={github} rel="noreferrer" target="_blank">
        <BsGithub />
      </a>
      <a href={facebook} rel="noreferrer" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocial;
