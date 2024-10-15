import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Calendar = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2.5 7.49996H17.5M6.66667 1.66663V4.16663M13.3333 1.66663V4.16663M5.83333 18.3333H14.1667C16.0076 18.3333 17.5 16.8409 17.5 15V6.24996C17.5 4.40901 16.0076 2.91663 14.1667 2.91663H5.83333C3.99238 2.91663 2.5 4.40901 2.5 6.24996V15C2.5 16.8409 3.99238 18.3333 5.83333 18.3333Z"
      stroke={props.color || '#667085'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Calendar;
