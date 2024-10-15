import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SortCircle = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M3.43944 5.87673C3.16425 6.18631 3.19214 6.66037 3.50173 6.93556C3.81131 7.21075 4.28537 7.18286 4.56056 6.87327L3.43944 5.87673ZM5.50518 4.68167L4.94462 4.1834L4.94462 4.1834L5.50518 4.68167ZM8.49482 4.68167L9.05538 4.1834V4.1834L8.49482 4.68167ZM8.49482 19.3183L9.05538 19.8166L8.49482 19.3183ZM10.5606 18.1233C10.8357 17.8137 10.8079 17.3396 10.4983 17.0644C10.1887 16.7893 9.71463 16.8171 9.43944 17.1267L10.5606 18.1233ZM5.50518 19.3183L4.94462 19.8166L5.50518 19.3183ZM4.56056 17.1267C4.28537 16.8171 3.81131 16.7893 3.50173 17.0644C3.19214 17.3396 3.16425 17.8137 3.43944 18.1233L4.56056 17.1267ZM4.56056 6.87327L6.06574 5.17994L4.94462 4.1834L3.43944 5.87673L4.56056 6.87327ZM7.93426 5.17994L9.43944 6.87327L10.5606 5.87673L9.05538 4.1834L7.93426 5.17994ZM9.05538 19.8166L10.5606 18.1233L9.43944 17.1267L7.93426 18.8201L9.05538 19.8166ZM6.06574 18.8201L4.56056 17.1267L3.43944 18.1233L4.94462 19.8166L6.06574 18.8201ZM7.93426 18.8201C7.43702 19.3794 6.56298 19.3794 6.06574 18.8201L4.94462 19.8166C6.03855 21.0473 7.96145 21.0473 9.05538 19.8166L7.93426 18.8201ZM6.06574 5.17994C6.56298 4.62055 7.43702 4.62055 7.93426 5.17994L9.05538 4.1834C7.96145 2.95273 6.03855 2.95273 4.94462 4.1834L6.06574 5.17994ZM17 9.25C15.7574 9.25 14.75 8.24264 14.75 7H13.25C13.25 9.07107 14.9289 10.75 17 10.75V9.25ZM19.25 7C19.25 8.24264 18.2426 9.25 17 9.25V10.75C19.0711 10.75 20.75 9.07107 20.75 7H19.25ZM17 4.75C18.2426 4.75 19.25 5.75736 19.25 7H20.75C20.75 4.92893 19.0711 3.25 17 3.25V4.75ZM17 3.25C14.9289 3.25 13.25 4.92893 13.25 7H14.75C14.75 5.75736 15.7574 4.75 17 4.75V3.25ZM17 19.25C15.7574 19.25 14.75 18.2426 14.75 17H13.25C13.25 19.0711 14.9289 20.75 17 20.75V19.25ZM19.25 17C19.25 18.2426 18.2426 19.25 17 19.25V20.75C19.0711 20.75 20.75 19.0711 20.75 17H19.25ZM17 14.75C18.2426 14.75 19.25 15.7574 19.25 17H20.75C20.75 14.9289 19.0711 13.25 17 13.25V14.75ZM17 13.25C14.9289 13.25 13.25 14.9289 13.25 17H14.75C14.75 15.7574 15.7574 14.75 17 14.75V13.25ZM6.25 4V20H7.75V4H6.25Z"
      fill={props.color || '#344054'}
    />
  </Svg>
);
export default SortCircle;