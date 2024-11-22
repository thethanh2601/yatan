import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { DateType } from 'react-native-ui-datepicker';
import { TabScreenProps } from '../../navigation';
import { S, TS, color, ms } from '../../themes';
import AppAvatar from '../../components/app-avatar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  CloseTag,
  Ellipse,
  Logout01,
  MessageTextSquare02,
  Notification,
} from '../../../assets/icons';
import ItemHome from '../../components/item-home';
import { BottomSheetApp, BottomSheetAppRef } from '../../components';
import { IComment, Item } from '../../models/new-post/newPost';
import { NewStore } from '../../request-store/newpost-store';
import { NotifiStore } from '../../request-store/notification-store';
import { INotification } from '../../models/notification/notification';

interface DashboardScreenProps extends TabScreenProps<'DashboardScreen'> {}

const DashboardScreen = ({ navigation, route }: DashboardScreenProps) => {
  const { height } = Dimensions.get('window');
  const [selectedComments, setSelectedComments] = useState<IComment[]>([]); // Thêm trạng thái cho bình luận
  const refBottomSheet = useRef<BottomSheetAppRef>();
  const [notifi, setNotifi] = useState(false);
  const data = NewStore.listSelectData;
  const dataNotifi: INotification[] = NotifiStore.listSelectData;
  const statusNotifi = dataNotifi.filter(notifi => !notifi.status);

  const onItemPress = (item: Item) => {
    navigation.navigate('ProfileScreen', { profileId: item.id });
  };
  const ICommentPress = (comments: IComment[]) => {
    setSelectedComments(comments); //
    refBottomSheet.current?.show();
  };
  const onNotifiPress = () => {
    navigation.replace('NotificationScreen');
  };

  useEffect(() => {
    NewStore.listSelectData;
    NotifiStore.listSelectData;
  }, [data, dataNotifi]);
  return (
    <SafeAreaView style={S.screen}>
      <View style={[{ paddingHorizontal: ms(16) }]}>
        <View style={[S.rowSpaceBetween]}>
          <View style={[S.row, { gap: ms(12) }]}>
            <AppAvatar
              size="lg"
              url={
                'https://cdnv2.tgdd.vn/mwg-static/common/News/1569295/tho-7-mau-1-2-0.jpg'
              }
            />
            <View style={{ justifyContent: 'center', gap: ms(4) }}>
              <Text
                style={[
                  TS.textMdMedium,
                  { fontWeight: 500, color: color.white },
                ]}>
                Thỏ bảy màu
              </Text>
              <Text
                style={[
                  TS.textXs,
                  { fontWeight: 400, color: color.gray[200] },
                ]}>
                Chiến binh tâm linh
              </Text>
            </View>
          </View>
          <View style={[S.rowCenterAll, { gap: ms(8) }]}>
            <TouchableOpacity style={styles.iconHeader} onPress={onNotifiPress}>
              <View style={{ position: 'relative' }}>
                {statusNotifi.length === 0 ? (
                  ''
                ) : (
                  <Ellipse
                    style={{
                      marginLeft: ms(12),
                      position: 'absolute',
                      zIndex: 1,
                    }}
                  />
                )}
                <Notification style={{ position: 'absolute', zIndex: 2 }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ padding: ms(10) }}
              onPress={() => navigation.navigate('MessengerScreeen')}>
              <MessageTextSquare02 />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            S.center,
            { gap: 16, marginBottom: ms(60), marginTop: ms(20) },
          ]}>
          {/* <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
            <Text style={styles.itemText}>Xin chào</Text>
          </TouchableOpacity> */}
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => (
              <ItemHome
                data={item}
                onItemPress={onItemPress}
                ICommentPress={() => ICommentPress(item.comment)}
                isFollow={true}
              />
            )}
            keyExtractor={item => item.id} // Đảm bảo sử dụng keyExtractor
            showsVerticalScrollIndicator={false} // Ẩn thanh cuộn ngang (tùy chọn)
            // contentContainerStyle={{ paddingHorizontal: 10 }} // Tùy chọn thêm padding
          />
        </View>
      </View>
      <BottomSheetApp ref={refBottomSheet} initialSnapPoints={[height]}>
        <SafeAreaView
          style={{ height: height, backgroundColor: color.gray[900] }}>
          <View style={{ paddingHorizontal: ms(16) }}>
            <View style={S.rowCenterSpaceBetween}>
              <View></View>
              <TouchableOpacity onPress={() => refBottomSheet.current?.close()}>
                <CloseTag height={ms(30)} width={ms(30)} />
              </TouchableOpacity>
            </View>
            {selectedComments.map(comment => (
              <View key={comment.id} style={{ marginBottom: ms(10) }}>
                <View style={styles.commentContainer}>
                  <AppAvatar size="sm" url={comment.avata} />
                  <View style={styles.commentTextContainer}>
                    <Text style={styles.commentUserName}>{comment.name}</Text>
                    <Text style={styles.commentText}>20 giờ trước </Text>
                  </View>
                </View>
                <Text style={[styles.commentText, { marginLeft: ms(40) }]}>
                  {comment.title}
                </Text>
              </View>
            ))}
          </View>
        </SafeAreaView>
      </BottomSheetApp>
    </SafeAreaView>
  );
};

export default observer(DashboardScreen);

const styles = StyleSheet.create({
  itemText: {
    ...TS.textSmSemibold,
    fontWeight: '500',
    color: color.white,
  },
  iconHeader: {
    padding: ms(10),
  },
  commentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  commentTextContainer: {
    marginLeft: 10,
  },
  commentUserName: {
    fontWeight: 'bold',
    color: color.gray[200],
  },
  commentText: {
    color: color.gray[200], // Hoặc màu bạn muốn
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 110,
    paddingHorizontal: 10,
  },
});
