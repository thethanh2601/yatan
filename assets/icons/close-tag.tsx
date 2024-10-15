import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CloseTag = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13.5 6.5L6.5 13.5M6.5 6.5L13.5 13.5"
      stroke={props.color || '#98A2B3'}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CloseTag;
