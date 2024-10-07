import React, { memo } from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SvgBookingIconSelected = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#0D1011"
      fillRule="evenodd"
      d="M4 4.75A2.75 2.75 0 0 1 6.75 2h10.5A2.75 2.75 0 0 1 20 4.75v7.876A6 6 0 0 0 12.531 22H6.75A2.75 2.75 0 0 1 4 19.25V4.75Zm3 1A.75.75 0 0 1 7.75 5h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 7 5.75Zm0 4A.75.75 0 0 1 7.75 9h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 7 9.75Z"
      clipRule="evenodd"
    />
    <Path
      fill="#0D1011"
      fillRule="evenodd"
      d="M16.5 13a4.5 4.5 0 1 0 2.623 8.157l.838.865a.75.75 0 1 0 1.078-1.044l-.86-.887A4.5 4.5 0 0 0 16.5 13Zm-3 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default memo(SvgBookingIconSelected);
