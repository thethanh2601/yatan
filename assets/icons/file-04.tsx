import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const File04 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M11.6666 1.89121V5.33332C11.6666 5.80003 11.6666 6.03339 11.7574 6.21165C11.8373 6.36845 11.9648 6.49593 12.1216 6.57583C12.2999 6.66666 12.5332 6.66666 12.9999 6.66666H16.442M16.6666 8.32351V14.3333C16.6666 15.7335 16.6666 16.4335 16.3941 16.9683C16.1544 17.4387 15.772 17.8212 15.3016 18.0608C14.7668 18.3333 14.0667 18.3333 12.6666 18.3333H7.33325C5.93312 18.3333 5.23306 18.3333 4.69828 18.0608C4.22787 17.8212 3.84542 17.4387 3.60574 16.9683C3.33325 16.4335 3.33325 15.7335 3.33325 14.3333V5.66666C3.33325 4.26653 3.33325 3.56646 3.60574 3.03168C3.84542 2.56128 4.22787 2.17882 4.69828 1.93914C5.23306 1.66666 5.93312 1.66666 7.33325 1.66666H10.0097C10.6212 1.66666 10.9269 1.66666 11.2147 1.73573C11.4698 1.79697 11.7136 1.89798 11.9373 2.03506C12.1896 2.18966 12.4058 2.40585 12.8382 2.83823L15.495 5.49508C15.9274 5.92746 16.1436 6.14365 16.2982 6.39594C16.4353 6.61962 16.5363 6.86349 16.5975 7.11858C16.6666 7.4063 16.6666 7.71203 16.6666 8.32351Z"
      stroke={props.color || '#98A2B3'}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default File04;
