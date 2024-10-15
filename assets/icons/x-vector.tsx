import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const XVector = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.24261 0.757377L0.757324 9.24266M9.24261 9.24261L0.757324 0.757324"
      stroke={props.color || '#28303F'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default XVector;
