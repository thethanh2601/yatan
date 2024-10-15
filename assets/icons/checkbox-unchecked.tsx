import * as React from 'react';
import Svg, { SvgProps, Rect } from 'react-native-svg';
const CheckboxUnchecked = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.5} y={0.5} width={15} height={15} rx={3.5} fill="white" />
    <Rect
      x={0.5}
      y={0.5}
      width={15}
      height={15}
      rx={3.5}
      stroke={props.color || '#D0D5DD'}
    />
  </Svg>
);
export default CheckboxUnchecked;
