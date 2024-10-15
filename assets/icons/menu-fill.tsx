import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const MenuFill = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 4C15.3954 4 14.5 4.89543 14.5 6V8C14.5 9.10457 15.3954 10 16.5 10H18.5C19.6046 10 20.5 9.10457 20.5 8V6C20.5 4.89543 19.6046 4 18.5 4H16.5ZM6.5 14C5.39543 14 4.5 14.8954 4.5 16V18C4.5 19.1046 5.39543 20 6.5 20H8.5C9.60457 20 10.5 19.1046 10.5 18V16C10.5 14.8954 9.60457 14 8.5 14H6.5ZM4.5 6C4.5 4.89543 5.39543 4 6.5 4H8.5C9.60457 4 10.5 4.89543 10.5 6V8C10.5 9.10457 9.60457 10 8.5 10H6.5C5.39543 10 4.5 9.10457 4.5 8V6ZM16.5 14C15.3954 14 14.5 14.8954 14.5 16V18C14.5 19.1046 15.3954 20 16.5 20H18.5C19.6046 20 20.5 19.1046 20.5 18V16C20.5 14.8954 19.6046 14 18.5 14H16.5Z"
      fill={props.color || '#9E77ED'}
    />
  </Svg>
);
export default MenuFill;
