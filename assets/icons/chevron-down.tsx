import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ChevronDown = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5 7.5L10 12.5L15 7.5"
      stroke={props.color || '#CDD5DF'}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ChevronDown;
