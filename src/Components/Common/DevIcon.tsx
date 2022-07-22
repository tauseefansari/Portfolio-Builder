import * as Icons from 'react-icons/di';

type Props = {
  iconName: keyof typeof Icons;
  className?: string;
  restProps?: any;
};

const DevIcon = ({ iconName, className, ...restProps }: Props) => {
  const IconComponent = Icons[iconName];
  return <IconComponent {...restProps} className={className || ''} />;
};

export default DevIcon;
