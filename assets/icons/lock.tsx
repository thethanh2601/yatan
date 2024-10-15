import * as React from 'react';
import Svg, {SvgProps, Rect, Circle, Path} from 'react-native-svg';
const Lock = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      x={4}
      y={7}
      width={16}
      height={14}
      rx={4}
      stroke={props.color || '#667085'}
      strokeWidth={1.5}
    />
    <Circle
      cx={12}
      cy={14}
      r={2}
      stroke={props.color || '#667085'}
      strokeWidth={1.5}
    />
    <Path
      d="M16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7"
      stroke={props.color || '#667085'}
      strokeWidth={1.5}
    />
  </Svg>
);
export default Lock;
