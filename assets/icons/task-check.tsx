import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const TaskCheck = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3 18L3 6C3 3.79086 4.79086 2 7 2L12.3431 2C13.404 2 14.4214 2.42143 15.1716 3.17157L19.8284 7.82843C20.5786 8.57857 21 9.59599 21 10.6569L21 18C21 20.2091 19.2091 22 17 22L7 22C4.79086 22 3 20.2091 3 18Z"
      stroke={props.color || '#344054'}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M14 2L14 5C14 7.20914 15.7909 9 18 9L21 9"
      stroke={props.color || '#344054'}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Path
      d="M9 14L10.7528 15.4023C11.1707 15.7366 11.7777 15.6826 12.1301 15.2799L15 12"
      stroke={props.color || '#344054'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default TaskCheck;
