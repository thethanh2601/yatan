import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const CheckboxChecked = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.5} y={0.5} width={15} height={15} rx={3.5} fill="#F9F5FF" />
    <Path
      d="M12 5L6.5 10.5L4 8"
      stroke={props.color || '#EF6820'}
      strokeWidth={1.6666}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Rect
      x={0.5}
      y={0.5}
      width={15}
      height={15}
      rx={3.5}
      stroke={props.color || '#EF6820'}
    />
  </Svg>
);
export default CheckboxChecked;
