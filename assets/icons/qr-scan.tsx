import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const QrScan = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.33342 4.7915C5.75812 4.7915 5.29175 5.25787 5.29175 5.83317V6.6665C5.29175 7.01168 5.01193 7.2915 4.66675 7.2915C4.32157 7.2915 4.04175 7.01168 4.04175 6.6665V5.83317C4.04175 4.56752 5.06776 3.5415 6.33342 3.5415H14.6667C15.9324 3.5415 16.9584 4.56752 16.9584 5.83317V6.6665C16.9584 7.01168 16.6786 7.2915 16.3334 7.2915C15.9882 7.2915 15.7084 7.01168 15.7084 6.6665V5.83317C15.7084 5.25787 15.242 4.7915 14.6667 4.7915H6.33342ZM14.6667 15.2082C15.242 15.2082 15.7084 14.7418 15.7084 14.1665V13.3332C15.7084 12.988 15.9882 12.7082 16.3334 12.7082C16.6786 12.7082 16.9584 12.988 16.9584 13.3332V14.1665C16.9584 15.4322 15.9324 16.4582 14.6667 16.4582L6.33341 16.4582C5.06776 16.4582 4.04175 15.4322 4.04175 14.1665V13.3332C4.04175 12.988 4.32157 12.7082 4.66675 12.7082C5.01193 12.7082 5.29175 12.988 5.29175 13.3332V14.1665C5.29175 14.7418 5.75812 15.2082 6.33341 15.2082L14.6667 15.2082ZM2.16675 9.37484C1.82157 9.37484 1.54175 9.65466 1.54175 9.99984C1.54175 10.345 1.82157 10.6248 2.16675 10.6248H18.8334C19.1786 10.6248 19.4584 10.345 19.4584 9.99984C19.4584 9.65466 19.1786 9.37484 18.8334 9.37484H2.16675Z"
      fill={props.color || '#28303F'}
    />
  </Svg>
);
export default QrScan;