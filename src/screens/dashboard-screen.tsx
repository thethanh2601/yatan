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
  View,
} from 'react-native';
import { DateType } from 'react-native-ui-datepicker';
import { TabScreenProps } from '../navigation';
import { S, TS, color, ms } from '../themes';
import AppAvatar from '../components/app-avatar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CloseTag, Ellipse, Logout01, Notification } from '../../assets/icons';
import ItemHome, { IComment, Item } from '../components/item-home';
import { BottomSheetApp, BottomSheetAppRef } from '../components';

interface DashboardScreenProps extends TabScreenProps<'DashboardScreen'> {}

const DashboardScreen = ({ navigation, route }: DashboardScreenProps) => {
  const { height } = Dimensions.get('window');
  const [notifi, setNotifi] = useState(false);
  const [date, setDate] = useState<DateType>(moment().toDate());
  const [selectedComments, setSelectedComments] = useState<IComment[]>([]); // Thêm trạng thái cho bình luận

  const refBottomSheet = useRef<BottomSheetAppRef>();

  const DATA: Item[] = [
    {
      id: '1',
      name: 'Xoài non',
      avata:
        'https://images2.thanhnien.vn/528068263637045248/2024/6/1/xoai-non-7-1717234424448524793660.jpeg',
      title: '2006',
      date: '16:24',
      image: [
        'https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-anh-dep-ve-du-lich-viet-nam-cho-dien-thoai-5-inkythuatso-08-14-13-53.jpg',
        'https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-anh-dep-ve-du-lich-viet-nam-cho-dien-thoai-2-inkythuatso-08-14-13-18.jpg',
        'https://images2.thanhnien.vn/528068263637045248/2024/6/1/xoai-non-7-1717234424448524793660.jpeg',
        'https://cdn-i.doisongphapluat.com.vn/resize/th/upload/2024/06/16/xoai-non-la-ai1-21223683.jpg',
      ],
      follow: false,
      like: 90,
      comment: [
        {
          id: '2039023',
          name: 'Mai Ngân',
          avata:
            'https://cdnphoto.dantri.com.vn/kORDAkSoS3Yox9gAeQyTOzFk1kw=/thumb_w/1920/2023/10/05/tttn6889-copy-1696489369175.jpg',
          title: 'đẹp ko nè',
        },
        {
          id: '2848904',
          name: 'Minh Nguyệt',
          avata:
            'https://cdnphoto.dantri.com.vn/VMuPPAn0dwo7icDtnbfff7NBgeA=/thumb_w/1920/2023/10/05/36472738964603545806843748075923560251034683n-1696491356088.jpg',
          title: 'đẹp thì lên đồ thôi',
        },
        {
          id: '2847896',
          name: 'Mai Hương',
          avata:
            'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
          title: 'Lên lịch thôi dì',
        },
      ],
    },
    {
      id: '2',
      name: 'Hoà mizy',
      avata:
        'https://images2.thanhnien.vn/528068263637045248/2024/6/1/xoai-non-7-1717234424448524793660.jpeg',
      title: 'Hạ Long',
      date: '16:24',
      image: [
        'https://cdn.nguyenkimmall.com/images/companies/_1/anh-dep-lam-hinh-nen-1.jpg',
        'https://i.pinimg.com/564x/be/ae/97/beae97e62496df410420ed5e58c7b456.jpg',
        'https://images2.thanhnien.vn/528068263637045248/2024/6/1/xoai-non-7-1717234424448524793660.jpeg',
        'https://cdn-i.doisongphapluat.com.vn/resize/th/upload/2024/06/16/xoai-non-la-ai1-21223683.jpg',
      ],
      follow: true,
      like: 80,
      comment: [
        {
          id: '2039023',
          name: 'Quế Trân',
          avata:
            'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
          title: '1100đ',
        },
        {
          id: '2848904',
          name: 'Nguyễn Linh',
          avata:
            'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
          title: 'xinh quá à',
        },
      ],
    },
    {
      id: '3',
      name: 'Linh Chi',
      avata:
        'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
      title: 'G9',
      date: '16:24',
      image: [
        'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
        'https://cdn-i.doisongphapluat.com.vn/resize/th/upload/2024/06/16/xoai-non-la-ai1-21223683.jpg',
      ],
      follow: true,
      like: 130,
      comment: [
        {
          id: '2039023',
          name: 'Đặng Phương',
          avata:
            'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
          title: 'Suy nghĩ non nớt',
        },
        {
          id: '2848904',
          name: 'Lan Liễu',
          avata:
            'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
          title: 'Uii cho con',
        },
      ],
    },
  ];

  const onItemPress = (item: Item) => {
    navigation.navigate('FriendsProfileScreen');
  };
  const ICommentPress = (comments: IComment[]) => {
    setSelectedComments(comments); //
    refBottomSheet.current?.show();
  };
  return (
    <SafeAreaView style={S.screen}>
      <View style={{ paddingHorizontal: ms(16) }}>
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
            <TouchableOpacity
              style={styles.iconHeader}
              onPress={() => navigation.navigate('NotificationScreen')}>
              <View style={{ position: 'relative' }}>
                {notifi ? (
                  <Ellipse
                    style={{
                      marginLeft: ms(12),
                      position: 'absolute',
                      zIndex: 1,
                    }}
                  />
                ) : null}
                <Notification style={{ position: 'absolute', zIndex: 2 }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ padding: ms(10) }}
              onPress={() => navigation.navigate('LoginScreen')}>
              <Logout01 />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[S.center, { gap: 16, marginBottom: ms(150) }]}>
          <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
            <Text style={styles.itemText}>Xin chào</Text>
          </TouchableOpacity>
          <FlatList<Item>
            data={DATA}
            renderItem={({ item }) => (
              <ItemHome
                data={item}
                onItemPress={onItemPress}
                ICommentPress={() => ICommentPress(item.comment)}
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
              <CloseTag onPress={() => refBottomSheet.current?.close()} />
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
});
