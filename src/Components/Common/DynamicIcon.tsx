// MuiIcons[iconName as keyof typeof MuiIcons]
import * as Icons from '@mui/icons-material';
import React from 'react';

type DynamicIconProps = {
  iconName: keyof typeof Icons;
  className?: string;
};

const DynamicIcon = ({ iconName, className }: DynamicIconProps) => {
  const IconComponent = Icons[iconName];
  return <IconComponent className={className} />;
};

export default DynamicIcon;
