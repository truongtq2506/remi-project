import React, { memo } from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SvgHomeIconSelected = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#0D1011"
      d="M13.815 2.347a2.75 2.75 0 0 0-3.63 0l-6.25 5.492A2.75 2.75 0 0 0 3 9.905v8.345A2.75 2.75 0 0 0 5.75 21h2.41a1.75 1.75 0 0 0 1.75-1.75V17a2 2 0 0 1 2-2H12a2 2 0 0 1 2 2v2.25c0 .967.784 1.75 1.75 1.75h2.5A2.75 2.75 0 0 0 21 18.25V9.905c0-.79-.34-1.544-.935-2.066l-6.25-5.492Z"
    />
  </Svg>
);
export default memo(SvgHomeIconSelected);
