import React from 'react';
import { StyleSheet, Text, TextStyle, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ArrowLeft from '../../../../assets/icons/arrow-left';
import XVector from '../../../../assets/icons/x-vector';
import { S, TS, color, ms } from '../../../themes';

export type BackButtonProps = {
  color?: string;
  size?: number;
  onTouchBtnBack: () => void;
  title?: string;
  titleStyle?: TextStyle | TextStyle[];
  isCloseBtn?: boolean;
};

export function BackButton(props: BackButtonProps) {
  const styles = StyleSheet.create({
    title: {
      marginHorizontal: ms(12),
      ...TS.textMdMedium,
      ...props.titleStyle,
      color: props.color || color.white,
    },
  });

  return (
    <TouchableOpacity
      style={S.rowCenter}
      onPress={() => {
        props.onTouchBtnBack();
      }}>
      {props.isCloseBtn ? (
        <XVector
          width={props.size || ms(24)}
          height={props.size || ms(24)}
          color={props.color || color.gray[50]}
        />
      ) : (
        <ArrowLeft
          width={props.size || ms(24)}
          height={props.size || ms(24)}
          color={props.color || color.gray[50]}
        />
      )}
      {props.title && (
        <Text style={styles.title} numberOfLines={1}>
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
