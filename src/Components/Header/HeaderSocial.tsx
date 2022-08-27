import { FC } from 'react';
import { Social } from 'modals/configuration';
import DynamicIcon from 'Common/DynamicIcon';

type Props = {
  socials: Social[];
};

const HeaderSocial: FC<Props> = (props) => {
  const { socials } = props;

  return (
    <div className="header__socials">
      {socials.map((social, i) => (
        <a key={`HeaderSocial_${i}`} href={social.url} rel="noreferrer" target="_blank">
          <DynamicIcon iconName={social.iconName} />
        </a>
      ))}
    </div>
  );
};

export default HeaderSocial;
