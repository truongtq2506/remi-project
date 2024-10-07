import React, { FC, memo } from 'react';

import RNText from '@/components/rn-text/rn-text';

interface ITabLabel {
  title: string;
  focused?: boolean;
}

const TabLabel: FC<ITabLabel> = ({ title, focused }) => {
  const color = focused ? '#0D1011' : '#282C2E';
  const fontWeight = focused ? '600' : '400';
  return <RNText text={title} color={color} fontWeight={fontWeight} />;
};

export default memo(TabLabel);
