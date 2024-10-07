import { SvgIcon } from '@/components/svg-icon';
import { ColorValue } from 'react-native';

export type TabBarIconProps = {
  focused: boolean;
  selectedIcon: SvgIcon;
  unSelectedIcon: SvgIcon;
  size?: number;
  color?: ColorValue;
};
