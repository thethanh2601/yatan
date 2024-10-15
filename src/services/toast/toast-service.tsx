import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import Toast, {
  ToastConfigParams,
  ToastShowParams,
} from 'react-native-toast-message';
import { S, TS, color, ms } from '../../themes';
import { Utils } from '../../utils';
import { AlertCircle } from '../../../assets/icons';

const VISIBILITY_TIME = 3000;

enum ToastType {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

type ToastComponentProps = {
  type: ToastType;
  title?: string;
  caption?: string;
};

interface IToastComponentColor {
  backgroundIconColor: string;
  iconColor: string;
}

function ToastComponent(props: ToastComponentProps) {
  const mapToastColor: { [key in ToastType]: IToastComponentColor } = {
    [ToastType.INFO]: {
      backgroundIconColor: color.success[25],
      iconColor: color.success[600],
    },
    [ToastType.SUCCESS]: {
      backgroundIconColor: color.success[100],
      iconColor: color.success[500],
    },
    [ToastType.WARNING]: {
      backgroundIconColor: color.warning[25],
      iconColor: color.warning[600],
    },
    [ToastType.ERROR]: {
      backgroundIconColor: color.error[25],
      iconColor: color.error[600],
    },
  };

  const iconProps: SvgProps = {
    height: ms(24),
    width: ms(24),
    color: mapToastColor[props.type].iconColor,
  };

  const mapToastIcon: { [key in ToastType]: JSX.Element } = {
    [ToastType.INFO]: <AlertCircle {...iconProps} />,
    [ToastType.SUCCESS]: <AlertCircle {...iconProps} />,
    [ToastType.WARNING]: <AlertCircle {...iconProps} />,
    [ToastType.ERROR]: (
      <AlertCircle {...iconProps} height={ms(16)} width={ms(16)} />
    ),
  };

  const styles = StyleSheet.create({
    modal: {
      width: '100%',
    },
    container: {
      ...S.rowCenter,
      padding: ms(16),
      borderRadius: ms(16),
      marginHorizontal: ms(24),
      backgroundColor: color.white,
    },
    iconContainer: {
      ...S.centerAll,
      height: ms(40),
      width: ms(40),
      borderRadius: ms(20),
      backgroundColor: mapToastColor[props.type].backgroundIconColor,
    },
    textContainer: {
      ...S.flex1,
      marginLeft: ms(12),
    },
    title: {
      ...TS.textSmSemibold,
    },
    caption: {
      ...TS.textSmRegular,
      color: color.gray[100],
    },
  });

  return (
    <View style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>{mapToastIcon[props.type]}</View>
        <View style={styles.textContainer}>
          {props.title ? (
            <Text style={styles.title}>{props.title || ''}</Text>
          ) : (
            ''
          )}
          {props.caption ? (
            <Text style={styles.caption}>{props.caption || ''}</Text>
          ) : (
            ''
          )}
        </View>
      </View>
    </View>
  );
}

export const toastConfig: {
  [key in ToastType]: (
    props: ToastConfigParams<ToastShowParams>,
  ) => JSX.Element;
} = {
  SUCCESS: ({ text1, text2 }) => (
    <ToastComponent title={text1} caption={text2} type={ToastType.SUCCESS} />
  ),
  INFO: ({ text1, text2 }) => (
    <ToastComponent title={text1} caption={text2} type={ToastType.INFO} />
  ),
  WARNING: ({ text1, text2 }) => (
    <ToastComponent title={text1} caption={text2} type={ToastType.WARNING} />
  ),
  ERROR: ({ text1, text2 }) => (
    <ToastComponent title={text1} caption={text2} type={ToastType.ERROR} />
  ),
};

const toastOptions: ToastShowParams = {
  type: ToastType.SUCCESS,
  position: 'top',
  text1: '',
  text2: '',
  visibilityTime: VISIBILITY_TIME,
  autoHide: true,
  bottomOffset: ms(40),
  props: {},
  onShow: () => {},
  onHide: () => {},
  onPress: () => {},
};

export const ToastService = {
  showSuccess: (message: string, helpText?: string) => {
    if (Utils.isString(message)) {
      Toast.show({
        ...toastOptions,
        text1: message,
        text2: helpText,
      });
    }
  },
  showInfo: (message: string, helpText?: string) => {
    if (Utils.isString(message)) {
      Toast.show({
        ...toastOptions,
        type: ToastType.INFO,
        text1: message,
        text2: helpText,
      });
    }
  },
  showWarning: (message: string, helpText?: string) => {
    if (Utils.isString(message)) {
      Toast.show({
        ...toastOptions,
        type: ToastType.WARNING,
        text1: message,
        text2: helpText,
      });
    }
  },
  showError: (message: string, helpText?: string) => {
    if (Utils.isString(message)) {
      Toast.show({
        ...toastOptions,
        type: ToastType.ERROR,
        text1: message,
        text2: helpText,
      });
    }
  },
};
