import React, { FC, memo } from 'react';
import { TabBarIconProps } from './types';
import SvgIcon from '@/components/svg-icon';

const TabBarIcon: FC<TabBarIconProps> = ({
  focused,
  selectedIcon,
  unSelectedIcon,
}) => <SvgIcon icon={focused ? selectedIcon : unSelectedIcon} />;

export default memo(TabBarIcon);
