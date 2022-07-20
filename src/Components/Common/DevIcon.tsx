import * as Icons from 'react-icons/di';

type Props = {
  iconName: keyof typeof Icons;
  className?: string;
};

const DevIcon = ({ iconName, className }: Props) => {
  const IconComponent = Icons[iconName];
  return <IconComponent className={className || ''} />;
};

export default DevIcon;
