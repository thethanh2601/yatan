import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ChevronLeft = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.5 15L7.5 10L12.5 5"
      stroke={props.color || '#ACACAC'}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ChevronLeft;
