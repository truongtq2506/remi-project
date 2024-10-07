import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

const SvgArrowLeft = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} fill={'#0D1011'} {...props}>
      <Path
        fillRule="evenodd"
        d="m4.8 12.8.1.1 4.8 4.9a.7.7 0 1 1-1 1L3.8 14c-1-1-1-2.8 0-4l4.9-4.7a.7.7 0 0 1 1 1L5 11.2h-.1 15.4a.7.7 0 1 1 0 1.6z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export default memo(SvgArrowLeft);
