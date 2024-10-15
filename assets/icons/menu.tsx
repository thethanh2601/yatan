import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Menu = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.5 6C14.5 4.89543 15.3954 4 16.5 4H18.5C19.6046 4 20.5 4.89543 20.5 6V8C20.5 9.10457 19.6046 10 18.5 10H16.5C15.3954 10 14.5 9.10457 14.5 8V6Z"
      stroke={props.color || '#667085'}
      strokeWidth={1.5}
    />
    <Path
      d="M4.5 16C4.5 14.8954 5.39543 14 6.5 14H8.5C9.60457 14 10.5 14.8954 10.5 16V18C10.5 19.1046 9.60457 20 8.5 20H6.5C5.39543 20 4.5 19.1046 4.5 18V16Z"
      stroke={props.color || '#667085'}
      strokeWidth={1.5}
    />
    <Path
      d="M4.5 6C4.5 4.89543 5.39543 4 6.5 4H8.5C9.60457 4 10.5 4.89543 10.5 6V8C10.5 9.10457 9.60457 10 8.5 10H6.5C5.39543 10 4.5 9.10457 4.5 8V6Z"
      stroke={props.color || '#667085'}
      strokeWidth={1.5}
    />
    <Path
      d="M14.5 16C14.5 14.8954 15.3954 14 16.5 14H18.5C19.6046 14 20.5 14.8954 20.5 16V18C20.5 19.1046 19.6046 20 18.5 20H16.5C15.3954 20 14.5 19.1046 14.5 18V16Z"
      stroke={props.color || '#667085'}
      strokeWidth={1.5}
    />
  </Svg>
);
export default Menu;
