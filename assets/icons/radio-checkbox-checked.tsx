import * as React from 'react';
import Svg, { SvgProps, Rect, Circle } from 'react-native-svg';
const RadioCheckboxChecked = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.5} y={0.5} width={19} height={19} rx={9.5} fill="#F9F5FF" />
    <Circle cx={10} cy={10} r={4} fill={props.color || '#E04F16'} />
    <Rect
      x={0.5}
      y={0.5}
      width={19}
      height={19}
      rx={9.5}
      stroke={props.color || '#E04F16'}
    />
  </Svg>
);
export default RadioCheckboxChecked;
