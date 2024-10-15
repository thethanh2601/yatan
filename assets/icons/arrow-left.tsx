import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowLeft = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M19 12.5H5M5 12.5L12 19.5M5 12.5L12 5.5"
      stroke={props.color || '#F5F5F6'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ArrowLeft;
