import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ChatNegative = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.10398 10H12.8957M10.0137 2.5H10.9859C15.128 2.5 18.4859 5.85786 18.4859 10C18.4859 14.1421 15.128 17.5 10.9859 17.5H5.847C4.00605 17.5 2.51367 16.0076 2.51367 14.1667V10C2.51367 5.85786 5.87154 2.5 10.0137 2.5Z"
      stroke={props.color || '#B93815'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ChatNegative;
