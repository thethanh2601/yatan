import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const Gmail = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      x={2.1665}
      y={2.5}
      width={16.6667}
      height={15}
      rx={4}
      stroke={props.color || '#B93815'}
      strokeWidth={1.5}
    />
    <Path
      d="M2.1665 5.8335L8.00106 10.5011C9.46193 11.6698 11.5377 11.6698 12.9986 10.5011L18.8332 5.8335"
      stroke={props.color || '#B93815'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Gmail;
