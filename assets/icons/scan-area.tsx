import * as React from 'react';
import { panGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ScanArea = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 331 331"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M2 50V10C2 5.58172 5.58172 2 10 2H50"
      stroke={props.color || '#B692F6'}
      strokeWidth={4}
      strokeLinecap="round"
    />
    <Path
      d="M50 329L10 329C5.58172 329 2 325.418 2 321L2 281"
      stroke={props.color || '#B692F6'}
      strokeWidth={4}
      strokeLinecap="round"
    />
    <Path
      d="M281 2L321 2C325.418 2 329 5.58172 329 10L329 50"
      stroke={props.color || '#B692F6'}
      strokeWidth={4}
      strokeLinecap="round"
    />
    <Path
      d="M329 281L329 321C329 325.418 325.418 329 321 329L281 329"
      stroke={props.color || '#B692F6'}
      strokeWidth={4}
      strokeLinecap="round"
    />
  </Svg>
);
export default ScanArea;
