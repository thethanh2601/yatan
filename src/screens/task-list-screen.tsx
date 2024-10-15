import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { S, ms } from '../themes';
import {
  AppButton,
  AppInput,
  AppSelect,
  ISelectItem,
  NavBar,
} from '../components';
import { AppStackScreenProps } from '../navigation';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface TaskListScreenProps extends AppStackScreenProps<'TaskListScreen'> {}

const TaskListScreen = ({ navigation, route }: TaskListScreenProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const schema = yup.object().shape({
    username: yup.string().trim().required('Vui lòng không để trống'),
    note: yup.string().trim().required('Vui lòng không để trống'),
  });
  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      username: 'admin',
      note: 'admin1992',
    },
  });
  const data: ISelectItem[] = [
    { key: 1, value: 'value1', label: 'Label 1' },
    { key: 2, value: 'value2', label: 'Label 2' },
  ];
  return (
    <SafeAreaView style={S.screen}>
      <NavBar title="Danh sách công việc" onTouchBtnBack={navigation.goBack} />
      <View style={{ gap: ms(24), marginHorizontal: ms(16) }}>
        <AppSelect
          enableHeader
          name={'project'}
          control={control}
          title={'Project'}
          placeholder={'Project'}
          data={data}
          // iconLeft
          // onEndReached={() => {
          //   if (province)
          //     RegionStore.getListData(false, {
          //       parentCode: province.value,
          //     });
          // }}

          // loading={RegionStore.loading}
          // disable={RegionStore.loading || !province}
        />
      </View>
    </SafeAreaView>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({});
