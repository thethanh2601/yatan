import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton, AppInput, NavBar } from '../../components';
import { S, ms } from '../../themes';
import * as yup from 'yup';
import { AppStackScreenProps } from '../../navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface ForgotPasswordScreenProps
  extends AppStackScreenProps<'ForgotPasswordScreen'> {}
const ForgotPasswordScreen = ({
  navigation,
  route,
}: ForgotPasswordScreenProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const schema = yup.object().shape({
    username: yup.string().trim().required('Vui lòng không để trống'),
  });
  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
    },
  });
  const onSubmit = async (data: { username: string }) => {
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
      <NavBar title="Quên mật khẩu" onTouchBtnBack={navigation.goBack} />
      <View
        style={{ gap: ms(24), marginHorizontal: ms(16), marginTop: ms(36) }}>
        <AppInput
          control={control}
          name={'username'}
          title=" Email"
          placeholder="Điền gmail"
          autoCapitalize="none"
          require
        />
        <AppButton
          title="Gửi yêu cầu"
          onPress={handleSubmit(onSubmit)}
          loading={loading}
          outLine="gray"
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({});
