import React, { memo } from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SvgHeart = (props: SvgProps) => (
  <Svg width={24} height={24} fill={'#0D1011'} {...props}>
    <Path d="M21.25 9.938c0 5.93-8.48 10.312-9.25 10.312S2.75 15.867 2.75 9.937c0-4.124 2.57-6.187 5.139-6.187S12 5.297 12 5.297s1.542-1.547 4.111-1.547 5.139 2.063 5.139 6.188" />
  </Svg>
);
export default memo(SvgHeart);
