import React, { memo } from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

const SvgBookingIconUnSelected = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#282C2E"
      fillRule="evenodd"
      d="M6.75 3.5c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25h3.5a.75.75 0 0 1 0 1.5h-3.5A2.75 2.75 0 0 1 4 19.25V4.75A2.75 2.75 0 0 1 6.75 2h10.5A2.75 2.75 0 0 1 20 4.75v6a.75.75 0 0 1-1.5 0v-6c0-.69-.56-1.25-1.25-1.25H6.75ZM8 6.75A.75.75 0 0 1 8.75 6h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 6.75Zm0 4a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Zm8.5 3.75a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-4.5 3a4.5 4.5 0 1 1 8.18 2.591l.859.887a.75.75 0 1 1-1.078 1.044l-.838-.865A4.5 4.5 0 0 1 12 17.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default memo(SvgBookingIconUnSelected);
