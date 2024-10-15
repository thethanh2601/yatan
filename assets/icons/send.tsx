import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Send = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.1579 2.5H3.84253C1.94952 2.5 0.962918 4.69624 2.24691 6.05195L4.82148 8.77034C5.19175 9.16129 5.39736 9.67382 5.39736 10.2059V15.3794C5.39736 17.3946 8.01354 18.2695 9.28292 16.6788L17.872 5.91578C18.9814 4.52559 17.9649 2.5 16.1579 2.5Z"
      stroke={props.color || 'white'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Send;
