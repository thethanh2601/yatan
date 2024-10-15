import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const MessageTextSquare02 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      opacity={0.12}
      d="M2.5 6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86502C3.01217 3.39462 3.39462 3.01217 3.86502 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V11C17.5 12.4001 17.5 13.1002 17.2275 13.635C16.9878 14.1054 16.6054 14.4878 16.135 14.7275C15.6002 15 14.9001 15 13.5 15H11.4031C10.8831 15 10.6231 15 10.3743 15.051C10.1537 15.0963 9.94017 15.1712 9.73957 15.2737C9.51347 15.3892 9.31043 15.5517 8.90434 15.8765L6.91646 17.4668C6.56973 17.7442 6.39636 17.8829 6.25045 17.8831C6.12356 17.8832 6.00352 17.8255 5.92436 17.7263C5.83333 17.6123 5.83333 17.3903 5.83333 16.9463V15C5.05836 15 4.67087 15 4.35295 14.9148C3.49022 14.6836 2.81635 14.0098 2.58519 13.147C2.5 12.8291 2.5 12.4416 2.5 11.6667V6.5Z"
      fill="#B93815"
    />
    <Path
      d="M5.83333 7.08333H10M5.83333 10H12.5M5.83333 15V16.9463C5.83333 17.3903 5.83333 17.6123 5.92436 17.7263C6.00352 17.8255 6.12356 17.8832 6.25045 17.8831C6.39636 17.8829 6.56973 17.7442 6.91646 17.4668L8.90434 15.8765C9.31043 15.5517 9.51347 15.3892 9.73957 15.2737C9.94017 15.1712 10.1537 15.0963 10.3743 15.051C10.6231 15 10.8831 15 11.4031 15H13.5C14.9001 15 15.6002 15 16.135 14.7275C16.6054 14.4878 16.9878 14.1054 17.2275 13.635C17.5 13.1002 17.5 12.4001 17.5 11V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86502C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9001 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V11.6667C2.5 12.4416 2.5 12.8291 2.58519 13.147C2.81635 14.0098 3.49022 14.6836 4.35295 14.9148C4.67087 15 5.05836 15 5.83333 15Z"
      stroke={props.color || 'white'}
      strokeWidth={1.66667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default MessageTextSquare02;
