import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const Search01 = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_347_1059)">
      <Path
        d="M18.3334 18.3334L16.6668 16.6667M1.66675 9.58342C1.66675 5.21116 5.21116 1.66675 9.58342 1.66675C13.9557 1.66675 17.5001 5.21116 17.5001 9.58342C17.5001 13.9557 13.9557 17.5001 9.58342 17.5001C5.21116 17.5001 1.66675 13.9557 1.66675 9.58342Z"
        stroke={props.color || '#667085'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_347_1059">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Search01;
