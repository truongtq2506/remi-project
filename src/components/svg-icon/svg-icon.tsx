import React, { memo } from 'react';

import { SvgUri as RNSvg } from 'react-native-svg';

import type { IconProps, Svg, SvgUrl } from './svg-icon.types';

const DefaultIconSize = 24;

const SvgIcon: React.FC<IconProps> = ({
  id,
  icon,
  width = DefaultIconSize,
  height = DefaultIconSize,
  color,
}) => {
  const { url } = icon as SvgUrl;

  if (url) {
    return (
      <RNSvg id={id} uri={url} fill={color} width={width} height={height} />
    );
  }

  const C = icon as Svg;

  return <C id={id} fill={color} width={width} height={height} />;
};

export default memo(SvgIcon);
