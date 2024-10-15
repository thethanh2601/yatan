import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { S, ms } from '../themes';
import { NavBar } from '../components';
import { AppStackScreenProps } from '../navigation';

interface NotificationScreenProps
  extends AppStackScreenProps<'NotificationScreen'> {}

const NotificationScreen = ({ navigation, route }: NotificationScreenProps) => {
  return (
    <SafeAreaView style={S.screen}>
      <NavBar title="Thông báo" onTouchBtnBack={navigation.goBack} />
      <View
        style={{ gap: ms(24), marginHorizontal: ms(16), marginTop: ms(36) }}>
        {/* <AppInput
        control={control}
        name={'username'}
        title="Mã nhân viên/ Email"
        placeholder="Điền mã nhân viên"
        autoCapitalize="none"
        require
      />
      <AppButton
        title="Gửi yêu cầu"
        // onPress={handleSubmit(onSubmit)}
        // loading={loading}
      /> */}
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
