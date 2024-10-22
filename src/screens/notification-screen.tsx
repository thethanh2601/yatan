import React, { useEffect } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { S, ms } from '../themes';
import { NavBar } from '../components';
import { AppStackScreenProps } from '../navigation';
import { NotifiStore } from '../request-store/notification-store';
import { INotification } from '../models/notification/notification';
import { observer } from 'mobx-react-lite';
import { FlatList } from 'react-native-gesture-handler';

interface NotificationScreenProps
  extends AppStackScreenProps<'NotificationScreen'> {}

const NotificationScreen = ({ navigation }: NotificationScreenProps) => {
  const dataNotifi: INotification[] = NotifiStore.listSelectData;
  const onNotifiPress = () => {
    NotifiStore.updateStatus();
    navigation.replace('DashboardScreen');
  };
  const nextPage = (type: number, id: string) => {
    if (type == 0) {
      console.log(id + ' 0');
      // navigation.replace('DashboardScreen');
    } else if (type == 1) {
      console.log(id + ' 1');
      // navigation.replace('DashboardScreen');
    } else if (type == 2) {
      console.log(id + ' 2');
      // navigation.replace('DashboardScreen');
    } else {
      console.log(id + ' 2');
      // navigation.replace('DashboardScreen');
    }
  };

  useEffect(() => {
    NotifiStore.listSelectData;
  }, [dataNotifi]);
  return (
    <SafeAreaView style={S.screen}>
      <NavBar title="Thông báo" onTouchBtnBack={onNotifiPress} />
      <View style={[S.flex1, { gap: ms(24), marginHorizontal: ms(16) }]}>
        <FlatList
          data={dataNotifi}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.notificationCard,
                { backgroundColor: item.status ? '#f9f9f9' : '#e1f5fe' }, // Màu nền khác nhau
              ]}
              onPress={() => nextPage(item.type, item.id)}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.content}</Text>
                <Text style={styles.date}>
                  {new Date(item.date).toLocaleDateString()}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default observer(NotificationScreen);

const styles = StyleSheet.create({
  notificationCard: {
    flexDirection: 'row',
    marginBottom: 12,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    alignItems: 'center',
    padding: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  content: {
    fontSize: 15,
    color: '#666',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  noNotificationText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
    color: '#ccc',
  },
});
