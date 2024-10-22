import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import * as yup from 'yup';
import { AppImages } from '../../../assets/images';
import { AppButton, AppInput } from '../../components';
import { AppStackScreenProps } from '../../navigation';
import { S, TS, color, ms } from '../../themes';
import { Calendar } from '../../../assets/icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface LoginScreenProps extends AppStackScreenProps<'LoginScreen'> {}
const LoginScreen = ({ navigation, route }: LoginScreenProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const schema = yup.object().shape({
    username: yup.string().trim().required('Vui lòng không để trống'),
    password: yup.string().trim().required('Vui lòng không để trống'),
  });
  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      username: 'admin',
      password: 'admin',
    },
  });
  const onSubmit = async (data: { username: string; password: string }) => {
    // const res = await Authentication.login({
    //   username: data.username,
    //   password: data.password,
    //   rememberMe: true,
    // });
    // if (res.data) {
    //   Authentication.setAccessToken(res.data.id_token);
    //   navigation.replace('BottomSheetStack');
    // }
    navigation.replace('DashboardScreen');
  };

  return (
    <SafeAreaView style={S.screen}>
      <View style={styles.container}>
        <FastImage style={styles.logo} source={AppImages.vietnam} />
        <AppInput
          control={control}
          name={'username'}
          title="Email"
          placeholder="Điền mã nhân viên"
          autoCapitalize="none"
          require
        />
        <AppInput
          control={control}
          name={'password'}
          type={'password'}
          title="Mật khẩu"
          placeholder="Mật khẩu"
          containerStyle={{ marginTop: ms(16), marginBottom: ms(24) }}
          autoCapitalize="none"
          require
        />
        <AppButton
          title="Đăng nhập"
          onPress={handleSubmit(onSubmit)}
          loading={loading}
          outLine="gray"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.forgotPass}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ms(30),
  },
  logo: {
    height: ms(140),
    width: ms(280),
    marginTop: ms(70),
    marginBottom: ms(40),
    alignSelf: 'center',
  },
  forgotPass: {
    ...TS.textMdSemibold,
    color: color.white,
    textAlign: 'center',
    marginTop: ms(16),
  },
});
