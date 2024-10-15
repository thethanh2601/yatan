import * as React from 'react';
import Svg, { SvgProps, Circle, Ellipse } from 'react-native-svg';
const MenuCircleVertical = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      cx={13.9583}
      cy={10.2083}
      r={1.04167}
      transform="rotate(90 13.9583 10.2083)"
      fill={props.color || '#344054'}
    />
    <Circle
      cx={9.79158}
      cy={10.2083}
      r={1.04167}
      transform="rotate(90 9.79158 10.2083)"
      fill={props.color || '#344054'}
    />
    <Ellipse
      cx={5.62508}
      cy={10.2083}
      rx={1.04167}
      ry={1.04167}
      transform="rotate(90 5.62508 10.2083)"
      fill={props.color || '#344054'}
    />
  </Svg>
);
export default MenuCircleVertical;
