import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Reload = (props: SvgProps) => (
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
      d="M14.59 1.29914C14.9771 1.15161 15.4104 1.34578 15.558 1.73283L16.7361 4.82359C16.8494 5.12092 16.7628 5.45739 16.52 5.66304C16.2771 5.86868 15.931 5.89873 15.6564 5.738C14.5836 5.11008 13.335 4.74996 12 4.74996C7.99594 4.74996 4.75 7.99589 4.75 12C4.75 13.3217 5.10304 14.5588 5.71946 15.6244C5.92687 15.983 5.80435 16.4418 5.4458 16.6492C5.08726 16.8566 4.62846 16.734 4.42105 16.3755C3.67612 15.0877 3.25 13.5925 3.25 12C3.25 7.16747 7.16751 3.24996 12 3.24996C12.9386 3.24996 13.8434 3.39798 14.6918 3.67204L14.1563 2.26709C14.0088 1.88004 14.203 1.44667 14.59 1.29914ZM18.5542 7.35075C18.9127 7.14335 19.3715 7.26587 19.5789 7.62441C20.3239 8.91219 20.75 10.4074 20.75 12C20.75 16.8324 16.8325 20.75 12 20.75C11.0614 20.75 10.1566 20.6019 9.30814 20.3279L9.84367 21.7328C9.9912 22.1199 9.79704 22.5532 9.40999 22.7008C9.02294 22.8483 8.58958 22.6541 8.44204 22.2671L7.26392 19.1763C7.15058 18.879 7.2372 18.5425 7.48001 18.3369C7.72282 18.1312 8.06897 18.1012 8.34358 18.2619C9.41641 18.8898 10.665 19.25 12 19.25C16.0041 19.25 19.25 16.004 19.25 12C19.25 10.6782 18.897 9.44112 18.2805 8.3755C18.0731 8.01696 18.1957 7.55816 18.5542 7.35075Z"
      fill={props.color || '#344054'}
    />
  </Svg>
);
export default Reload;