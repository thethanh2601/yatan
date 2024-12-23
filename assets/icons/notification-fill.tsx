import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const NotificationFill = (props: SvgProps) => (
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
      d="M12 3C8.77095 3 6.05382 5.49085 5.67964 8.79403L5.33476 11.8385C5.24906 12.595 4.94246 13.3069 4.45549 13.88C3.42209 15.0964 4.26081 17 5.83014 17H18.1699C19.7392 17 20.5779 15.0964 19.5445 13.88C19.0575 13.3069 18.7509 12.595 18.6652 11.8385L18.3204 8.79403C17.9462 5.49085 15.2291 3 12 3ZM14.9721 19.0715C14.5147 20.1992 13.3565 21 12 21C10.6435 21 9.48526 20.1992 9.02789 19.0715C9.00883 19.0245 9 18.974 9 18.9233C9 18.6895 9.18951 18.5 9.42329 18.5H14.5767C14.8105 18.5 15 18.6895 15 18.9233C15 18.974 14.9912 19.0245 14.9721 19.0715Z"
      fill={props.color || '#9E77ED'}
    />
  </Svg>
);
export default NotificationFill;
