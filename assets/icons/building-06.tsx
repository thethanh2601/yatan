import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Building06 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      opacity={0.12}
      d="M3 14.2C3 13.0799 3 12.5198 3.21799 12.092C3.40973 11.7157 3.71569 11.4097 4.09202 11.218C4.51984 11 5.0799 11 6.2 11H11V21H3V14.2Z"
      fill={props.color || '#667085'}
    />
    <Path
      d="M11 11H6.2C5.07989 11 4.51984 11 4.09202 11.218C3.71569 11.4097 3.40973 11.7157 3.21799 12.092C3 12.5198 3 13.0799 3 14.2V21M21 21V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H14.2C13.0799 3 12.5198 3 12.092 3.21799C11.7157 3.40973 11.4097 3.71569 11.218 4.09202C11 4.51984 11 5.0799 11 6.2V21M22 21H2M14.5 7H17.5M14.5 11H17.5M14.5 15H17.5"
      stroke={props.color || '#667085'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Building06;