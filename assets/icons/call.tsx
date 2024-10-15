import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Call = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M18 15.8333V14.4617C18 13.7802 17.5851 13.1674 16.9523 12.9143L15.2572 12.2362C14.4524 11.9143 13.5352 12.263 13.1475 13.0383L13 13.3333C13 13.3333 10.9167 12.9167 9.25 11.25C7.58333 9.58333 7.16667 7.5 7.16667 7.5L7.46168 7.35249C8.23698 6.96484 8.58571 6.04761 8.26379 5.2428L7.58574 3.54768C7.33263 2.91492 6.71979 2.5 6.03828 2.5H4.66667C3.74619 2.5 3 3.24619 3 4.16667C3 11.5305 8.96954 17.5 16.3333 17.5C17.2538 17.5 18 16.7538 18 15.8333Z"
      stroke={props.color || '#B93815'}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);
export default Call;
