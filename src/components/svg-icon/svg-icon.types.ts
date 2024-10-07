import React from 'react';

import type { ViewProps } from 'react-native';
import type { SvgProps } from 'react-native-svg';

export type Svg = React.FunctionComponent<SvgProps>;
export type SvgUrl = { url: string };

export type SvgIcon = Svg | SvgUrl;

export interface IconProps extends Pick<ViewProps, 'id'> {
  /**
   * Accept react-native-svg
   * or
   * SVG url from network, eg: https://cdn.pgimgs.com/hive-ui/static/v0.1.29/pg-icons/search.svg
   *
   * @see https://github.com/kristerkari/react-native-svg-transformer
   * @see https://react-svgr.com/docs/webpack/
   *
   * or use the prebuild @propertyguru/hive-icons
   */
  icon: SvgIcon;
  color?: string;
  width?: number;
  height?: number;
}
