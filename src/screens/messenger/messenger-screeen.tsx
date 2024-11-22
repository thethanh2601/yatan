import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { S, TS, color, ms } from '../../themes';
import { ArrowLeft } from '../../../assets/icons';
import { AppStackScreenProps } from '../../navigation';
import AppAvatar from '../../components/app-avatar';
import { constant } from 'lodash';
import { MessStore } from '../../request-store/mess-store';
import { Message } from '../../models/mess/mess';
import ItemMess from './item-mess';

interface MessengerScreenProps
  extends AppStackScreenProps<'MessengerScreeen'> {}

const MessengerScreen = ({ navigation }: MessengerScreenProps) => {
  const data = MessStore.listSelectData;
  const onItemPress = (item: Message) => {
    navigation.navigate('InboxScreen', { inboxId: item.id });
  };
  return (
    <SafeAreaView style={S.screen}>
      <View style={{ padding: ms(12) }}>
        <TouchableOpacity
          onPress={() => {
            navigation.replace('DashboardScreen');
          }}>
          <ArrowLeft />
        </TouchableOpacity>
      </View>
      <FlatList<Message>
        data={data}
        renderItem={({ item }) => (
          <ItemMess item={item} onItemPress={onItemPress} />
        )}
        keyExtractor={item => item.id} // Đảm bảo sử dụng keyExtractor
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: ms(24) }} // Tùy chọn thêm padding
      />
    </SafeAreaView>
  );
};

export default MessengerScreen;

const styles = StyleSheet.create({});
