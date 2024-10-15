import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Invoice = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3 6C3 3.79086 4.79086 2 7 2H17C19.2091 2 21 3.79086 21 6V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V6Z"
      stroke={props.color || '#344054'}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M17 7L7 7"
      stroke={props.color || '#344054'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 12L7 12"
      stroke={props.color || '#344054'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 17L7 17"
      stroke={props.color || '#344054'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Invoice;
