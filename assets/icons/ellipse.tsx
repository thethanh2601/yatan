import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';
const Ellipse = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    {...props}>
    <Circle cx="4" cy="4" r="4" fill={props.color || '#E36F2D'} />
  </Svg>
);
export default Ellipse;
