import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { color } from '../../themes/colors';
import { ms } from '../../themes/platform';
import { TS } from '../../themes/text-style';
import { AppTouchableOpacity } from '../app-touchable-opacity';

export type ButtonProps = {
  title?: string;
  titleStyle?: TextStyle[] | TextStyle;
  containerStyle?: ViewStyle[] | ViewStyle;
  onPress?: () => void;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  outLine?: 'gray' | 'primary';
  children?: React.ReactNode;
};

export function AppButton(props: ButtonProps) {
  const isDisable = props.disabled || props.loading;
  const { size = 'lg' } = props;

  const mappingPaddingSizeButton = () => {
    switch (size) {
      case 'xs':
        return { paddingHorizontal: ms(12), paddingVertical: ms(6) };
      case 'sm':
        return { paddingHorizontal: ms(12), paddingVertical: ms(8) };
      case 'md':
        return { paddingHorizontal: ms(14), paddingVertical: ms(10) };
      case 'lg':
        return { paddingHorizontal: ms(16), paddingVertical: ms(10) };
      case 'xl':
        return { paddingHorizontal: ms(18), paddingVertical: ms(12) };
      case '2xl':
        return { paddingHorizontal: ms(18), paddingVertical: ms(12) };
      default:
        return { paddingHorizontal: ms(16), paddingVertical: ms(10) };
    }
  };

  const mappingTitleStyleButton = () => {
    switch (size) {
      case 'xs':
        return TS.textXsSemibold;
      case 'sm':
        return TS.textSmSemibold;
      case 'md':
        return TS.textSmSemibold;
      case 'lg':
        return TS.textMdSemibold;
      case 'xl':
        return TS.textMdSemibold;
      case '2xl':
        return TS.textLgSemibold;
      default:
        return TS.textMdSemibold;
    }
  };

  const mappingOutlineColor = () => {
    switch (props.outLine) {
      case 'gray':
        return {
          color: color.white,
          backgroundColor: color.gray[600],
          borderColor: color.gray[700],
        };
      case 'primary':
        return {
          color: color.black,
          backgroundColor: color.gray[50],
          borderColor: color.gray[50],
        };

      default:
        return {
          color: color.gray[700],
          backgroundColor: color.white,
          borderColor: color.gray[300],
        };
    }
  };

  const styles = StyleSheet.create({
    titleDefault: {
      ...mappingTitleStyleButton(),
      color: isDisable ? color.gray[400] : color.white,
    },
    containerDefault: {
      borderRadius: ms(360),
      ...mappingPaddingSizeButton(),
      backgroundColor: isDisable ? color.gray[100] : color.primary[600],
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: ms(1),
      borderColor: isDisable ? color.gray[200] : color.primary[600],
    },
    titleOutLine: {
      ...mappingTitleStyleButton(),
      color: mappingOutlineColor().color,
    },
    outLineContainer: {
      borderRadius: ms(360),
      ...mappingPaddingSizeButton(),
      backgroundColor: mappingOutlineColor().backgroundColor,
      opacity: isDisable ? 0.3 : 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: ms(1),
      borderColor: mappingOutlineColor().borderColor,
    },
  });

  const title = (
    <Text
      style={[
        props.outLine ? styles.titleOutLine : styles.titleDefault,
        props.titleStyle,
      ]}>
      {props.title}
    </Text>
  );
  const leftIcon = props.iconLeft ? props.iconLeft : <View />;
  const rightIcon = props.iconRight ? props.iconRight : <View />;
  const loadingIcon = props.loading ? (
    <ActivityIndicator
      color={props.loadingColor || color.primary[500]}
      style={{ marginLeft: ms(4) }}
    />
  ) : (
    <View />
  );

  return (
    <AppTouchableOpacity
      disabled={isDisable}
      style={[
        props.outLine ? styles.outLineContainer : styles.containerDefault,
        props.containerStyle,
      ]}
      onPress={props.onPress}>
      {leftIcon}
      {title}
      {props.children}
      {rightIcon}
      {loadingIcon}
    </AppTouchableOpacity>
  );
}
