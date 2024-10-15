import React, { ReactNode } from 'react';
import {
  DimensionValue,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { BackButton } from './back-button/back-button';
import { S, TS, color, ms } from '../../themes';

export type NavBarProps = {
  title?: string /* nav bar title */;
  contentColor?: string /* color of title and back button */;
  disableSafeAreaTop?: boolean /* add padding top to make nav bar safe area */;
  hideBtnBack?: boolean;
  renderRightComponent?: () => ReactNode /* render right view */;
  onTouchBtnBack?: () => void /* custom btn back callback, by default, the navigation will go back if the back button is pressed*/;
  titleStyle?: TextStyle[] | TextStyle;
  containerStyle?: ViewStyle[] | ViewStyle;
  height?: DimensionValue | undefined;
  renderCenterComponent?: () => ReactNode;
  btnBackTitle?: string;
  btnBackTitleStyle?: TextStyle[] | TextStyle;
  isCloseBtn?: boolean;
  showDivider?: boolean;
};

export function NavBar(props: NavBarProps) {
  const btnBackInvisible = props.hideBtnBack || !props.onTouchBtnBack;
  const styles = StyleSheet.create({
    title: {
      ...TS.textLgSemibold,
      ...props.titleStyle,
      color: props.contentColor || color.gray[50],
    },
  });

  return (
    <View
      style={[
        S.row,
        {
          backgroundColor: color.gray[900],
          height: props.height || ms(48),
          alignItems: 'center',
          borderBottomWidth: props.showDivider ? ms(1) : 0,
          borderColor: color.gray[200],
          paddingHorizontal: ms(16),
          gap: ms(8),
          ...props.containerStyle,
        },
      ]}>
      <View style={[S.rowCenter, S.flex1, { gap: ms(8) }]}>
        {/* ICON BACK */}
        <View>
          {!props.hideBtnBack && props.onTouchBtnBack ? (
            <BackButton
              color={props.contentColor}
              onTouchBtnBack={props.onTouchBtnBack}
              title={props.btnBackTitle}
              titleStyle={props.btnBackTitleStyle}
              isCloseBtn={props.isCloseBtn}
            />
          ) : null}
        </View>

        {/* TITLE */}
        <View style={S.flex1}>
          {props.title ? (
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
          ) : (
            props.renderCenterComponent?.()
          )}
        </View>
      </View>

      {/* RIGHT SPACE */}
      <View>{props.renderRightComponent?.()}</View>
    </View>
  );
}
