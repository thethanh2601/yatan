import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Data01 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      opacity={0.12}
      d="M12 8.00015C16.9706 8.00015 21 6.65701 21 5.00015V19C21 20.66 17 22 12 22C7 22 3 20.66 3 19V5.00015C3 6.65701 7.02944 8.00015 12 8.00015Z"
      fill={props.color || 'black'}
    />
    <Path
      d="M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.66 17 22 12 22C7 22 3 20.66 3 19V5M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12"
      stroke={props.color || 'black'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Data01;
