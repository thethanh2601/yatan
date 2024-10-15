import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const DirectionRight01 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.53151 6.41438C9.20806 6.67313 9.15562 7.1451 9.41438 7.46855L13.0396 12L9.41438 16.5315C9.15562 16.855 9.20806 17.3269 9.53151 17.5857C9.85495 17.8444 10.3269 17.792 10.5857 17.4685L14.5857 12.4685C14.8048 12.1946 14.8048 11.8054 14.5857 11.5315L10.5857 6.53151C10.3269 6.20806 9.85495 6.15562 9.53151 6.41438Z"
      fill={props.color || '#344054'}
    />
  </Svg>
);
export default DirectionRight01;
