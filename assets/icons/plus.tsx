import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Plus = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 6V18M18 12L6 12"
      stroke={props.color || 'white'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Plus;
