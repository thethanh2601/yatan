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
import { S } from '../../themes';

export type ButtonCrProps = {
  title?: string;
  titleStyle?: TextStyle[] | TextStyle;
  containerStyle?: ViewStyle[] | ViewStyle;
  onPress?: () => void;
  iconAbove?: JSX.Element; // Renamed to match the requirement
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
  size?: 'sm' | 'md' | 'lg';
  outLine?: 'secondary' | 'tertiary';
  children?: React.ReactNode;
};

export function AppButtonCenter(props: ButtonCrProps) {
  const isDisable = props.disabled || props.loading;
  const { size = 'md' } = props;

  const mappingPaddingSizeButton = () => {
    switch (size) {
      case 'sm':
        return {
          paddingHorizontal: ms(12),
          paddingVertical: ms(6),
          height: ms(32),
        };
      case 'md':
        return {
          paddingHorizontal: ms(18),
          paddingVertical: ms(8),
          height: ms(40),
        };
      case 'lg':
        return {
          paddingHorizontal: ms(22),
          paddingVertical: ms(14),
          height: ms(56),
        };
      default:
        return {
          paddingHorizontal: ms(18),
          paddingVertical: ms(8),
          height: ms(40),
        };
    }
  };

  const mappingTitleStyleButton = () => {
    switch (size) {
      case 'sm':
        return TS.textSmSemibold;
      case 'md':
        return TS.textMdSemibold;
      case 'lg':
        return TS.textLgSemibold;
      default:
        return TS.textMdSemibold;
    }
  };

  const mappingBorderRadius = () => {
    switch (size) {
      case 'sm':
        return ms(8);
      case 'md':
        return ms(10);
      case 'lg':
        return ms(12);
      default:
        return ms(10);
    }
  };

  const mappingOutlineColor = () => {
    switch (props.outLine) {
      case 'secondary':
        return {
          color: color.primary[300],
          backgroundColor: color.primary[900],
          borderColor: color.primary[700],
        };
      case 'tertiary':
        return {
          color: color.primary[200],
          backgroundColor: color.gray[800],
          borderColor: color.gray[700],
        };
      default:
        return {
          color: color.primary[300],
          backgroundColor: color.primary[900],
          borderColor: color.primary[700],
        };
    }
  };

  const styles = StyleSheet.create({
    titleDefault: {
      ...mappingTitleStyleButton(),
      color: isDisable ? color.gray[400] : color.gray[950],
    },
    containerDefault: {
      ...S.centerAll,
      ...mappingPaddingSizeButton(),
      borderRadius: mappingBorderRadius(),
      backgroundColor: isDisable ? color.gray[600] : color.primary[500],
      borderWidth: ms(1),
      borderColor: isDisable ? color.gray[600] : color.primary[500],
      alignItems: 'center', // Center items horizontally
      justifyContent: 'center', // Center items vertically
    },
    titleOutLine: {
      ...mappingTitleStyleButton(),
      color: isDisable ? color.gray[600] : mappingOutlineColor().color,
    },
    outLineContainer: {
      ...S.centerAll,
      ...mappingPaddingSizeButton(),
      borderRadius: mappingBorderRadius(),
      backgroundColor: isDisable
        ? color.gray[900]
        : mappingOutlineColor().backgroundColor,
      borderWidth: ms(1),
      borderColor: isDisable
        ? color.gray[800]
        : mappingOutlineColor().borderColor,
      alignItems: 'center', // Center items horizontally
      justifyContent: 'center', // Center items vertically
    },
    iconContainer: {
      padding: ms(8),

      // Space between icon and text
    },
    iconView: {
      backgroundColor: '#451705',
      width: ms(50),
      height: ms(50),
      borderRadius: ms(50),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: ms(16), // Space between icon and text
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
  const iconAbove = props.iconAbove ? (
    <View style={styles.iconView}>
      <View style={styles.iconContainer}>{props.iconAbove}</View>
    </View>
  ) : (
    <View />
  );

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
      {iconAbove}
      {title}
      {props.children}
      {loadingIcon}
    </AppTouchableOpacity>
  );
}
