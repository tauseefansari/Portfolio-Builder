import { FC } from 'react';
import { Link } from 'react-scroll';
import { Navigation as NavigationProps } from 'modals/configuration';
import DynamicIcon from 'Common/DynamicIcon';
import 'Components/Navigation/Navigation.css';

type Props = {
  navigationObj: NavigationProps;
};

const Navigation: FC<Props> = (props) => {
  const { links } = props.navigationObj;

  return (
    <nav>
      {links.map((link, i) => (
        <Link
          key={`Navigation_${i}`}
          activeClass="active"
          smooth
          spy
          to={link.id}
          className="tooltip"
          data-tooltip={link.title}
        >
          <DynamicIcon iconName={link.iconName || 'Error'} />
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
