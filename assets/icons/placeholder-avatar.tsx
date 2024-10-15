import * as React from 'react';
import Svg, { SvgProps, Rect, G, Path } from 'react-native-svg';
const PlaceholderAvatar = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect width={64} height={64} rx={32} fill="#F2F4F7" />
    <G opacity={0.08}>
      <Rect
        x={0.375}
        y={0.375}
        width={63.25}
        height={63.25}
        rx={31.625}
        stroke="#101828"
        strokeWidth={0.75}
      />
    </G>
    <Path
      d="M42.6663 44C42.6663 42.1392 42.6663 41.2089 42.4367 40.4518C41.9196 38.7473 40.5857 37.4134 38.8812 36.8963C38.1241 36.6667 37.1938 36.6667 35.333 36.6667H28.6663C26.8056 36.6667 25.8752 36.6667 25.1182 36.8963C23.4136 37.4134 22.0797 38.7473 21.5627 40.4518C21.333 41.2089 21.333 42.1392 21.333 44M37.9997 26C37.9997 29.3137 35.3134 32 31.9997 32C28.686 32 25.9997 29.3137 25.9997 26C25.9997 22.6863 28.686 20 31.9997 20C35.3134 20 37.9997 22.6863 37.9997 26Z"
      stroke={props.color || '#475467'}
      strokeWidth={2.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default PlaceholderAvatar;
