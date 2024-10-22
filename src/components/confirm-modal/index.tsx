import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { AlertCircle } from '../../../assets/icons';
import { color, ms, S, TS } from '../../themes';
import { AppButton } from '../app-button';

export interface ConfirmModalRef {
  show: () => void;
  hide: () => void;
}

interface IConfirmModalProps {
  onConfirm: () => void;
  onAbort?: () => void;
  type?: 'gray' | 'primary' | 'error' | 'warning';
  title: string;
  content?: string;
  confirmBtnTitle?: string;
  abortBtnTitle?: string;
}

const ConfirmModal = forwardRef(
  (
    {
      onAbort,
      onConfirm,
      type = 'gray',
      title,
      content,
      confirmBtnTitle = 'Xác nhận',
      abortBtnTitle = 'Huỷ',
    }: IConfirmModalProps,
    ref,
  ) => {
    const [visible, setVisible] = useState<boolean>(false);
    const onClose = () => {
      setVisible(false);
    };
    useImperativeHandle(
      ref,
      () => ({
        show: () => {
          setVisible(true);
        },
        hide: () => {
          onClose();
        },
      }),
      [],
    );

    return (
      <Modal
        isVisible={visible}
        backdropOpacity={0.8}
        onBackdropPress={() => {
          onClose();
        }}>
        <View style={styles.container}>
          {/* <View style={[styles.circle1, { backgroundColor: color[type][50] }]}>
            <View
              style={[styles.circle2, { backgroundColor: color[type][100] }]}>
              <AlertCircle height={20} width={20} color={color[type][600]} />
            </View>
          </View> */}
          <Text style={TS.textLgSemibold}>{title}</Text>
          {content ? (
            <Text
              style={[TS.textSm, { color: color.gray[600], marginTop: ms(4) }]}>
              {content}
            </Text>
          ) : null}
          <AppButton
            title={confirmBtnTitle}
            containerStyle={{
              backgroundColor: color[type][700],
              borderColor: color[type][700],
              marginBottom: ms(16),
              marginTop: ms(24),
            }}
            onPress={() => {
              onClose();
              onConfirm();
            }}
          />
          <AppButton
            outLine="primary"
            title={abortBtnTitle}
            onPress={() => {
              onClose();
              onAbort && onAbort();
            }}
          />
        </View>
      </Modal>
    );
  },
);

export default ConfirmModal;

const styles = StyleSheet.create({
  container: {
    paddingVertical: ms(20),
    paddingHorizontal: ms(16),
    borderRadius: ms(16),
    backgroundColor: color.white,
  },
  circle1: {
    height: ms(48),
    width: ms(48),
    borderRadius: ms(80),
    backgroundColor: color.error[100],
    ...S.centerAll,
    marginBottom: ms(12),
  },
  circle2: {
    height: ms(36),
    width: ms(36),
    borderRadius: ms(80),
    backgroundColor: color.error[200],
    ...S.centerAll,
  },
});
