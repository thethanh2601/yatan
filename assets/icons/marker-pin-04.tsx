import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const MarkerPin04 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      opacity={0.12}
      d="M12 17C13.5 14 18 12.0637 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 12.0637 10.5 14 12 17Z"
      fill={props.color || '#667085'}
    />
    <Path
      d="M5 14.2864C3.14864 15.1031 2 16.2412 2 17.5C2 19.9853 6.47715 22 12 22C17.5228 22 22 19.9853 22 17.5C22 16.2412 20.8514 15.1031 19 14.2864M18 8C18 12.0637 13.5 14 12 17C10.5 14 6 12.0637 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z"
      stroke={props.color || '#667085'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default MarkerPin04;
