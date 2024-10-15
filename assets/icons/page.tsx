import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Page = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0 4C0 1.79086 1.79086 0 4 0H20L32 12V36C32 38.2091 30.2091 40 28 40H4C1.79086 40 0 38.2091 0 36V4Z"
      fill={props.color || '#D92D20'}
    />
    <Path
      opacity={0.3}
      d="M20 0L32 12H24C21.7909 12 20 10.2091 20 8V0Z"
      fill="white"
    />
  </Svg>
);
export default Page;
