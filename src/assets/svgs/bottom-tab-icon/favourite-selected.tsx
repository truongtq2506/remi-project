import React, { memo } from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SvgFavouriteIconSelected = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#0D1011"
      d="M21.25 9.938c0 5.93-8.48 10.312-9.25 10.312-.77 0-9.25-4.383-9.25-10.313 0-4.124 2.57-6.187 5.139-6.187C10.459 3.75 12 5.297 12 5.297s1.542-1.547 4.111-1.547c2.57 0 5.139 2.063 5.139 6.188Z"
    />
  </Svg>
);
export default memo(SvgFavouriteIconSelected);
