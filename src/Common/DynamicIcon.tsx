import * as Icons from '@mui/icons-material';

type Props = {
  iconName: keyof typeof Icons;
  className?: string;
  restProps?: any;
};

const DynamicIcon = ({ iconName, className, ...restProps }: Props) => {
  const IconComponent = Icons[iconName];
  return <IconComponent {...restProps} className={className || ''} />;
};

export default DynamicIcon;
