import React, { memo } from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SvgHomeIconUnSelected = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#282C2E"
      fillRule="evenodd"
      d="M12.825 3.474a1.25 1.25 0 0 0-1.65 0l-6.25 5.492a1.25 1.25 0 0 0-.425.939v8.345c0 .69.56 1.25 1.25 1.25h3a.25.25 0 0 0 .25-.25v-2.5A2.75 2.75 0 0 1 11.75 14h.5A2.75 2.75 0 0 1 15 16.75v2.5c0 .138.112.25.25.25h3c.69 0 1.25-.56 1.25-1.25V9.905c0-.36-.155-.702-.425-.939l-6.25-5.492Zm-2.64-1.127a2.75 2.75 0 0 1 3.63 0l6.25 5.492A2.75 2.75 0 0 1 21 9.905v8.345A2.75 2.75 0 0 1 18.25 21h-3a1.75 1.75 0 0 1-1.75-1.75v-2.5c0-.69-.56-1.25-1.25-1.25h-.5c-.69 0-1.25.56-1.25 1.25v2.5A1.75 1.75 0 0 1 8.75 21h-3A2.75 2.75 0 0 1 3 18.25V9.905c0-.79.34-1.544.935-2.066l6.25-5.492Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default memo(SvgHomeIconUnSelected);
