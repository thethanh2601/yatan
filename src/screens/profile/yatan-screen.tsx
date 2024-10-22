import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { S, color, ms } from '../../themes';
import ItemHome from '../../components/item-home';
import { IComment, Item } from '../../models/new-post/newPost';
import { AppStackParamList, AppStackScreenProps } from '../../navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NewStore } from '../../request-store/newpost-store';
import { BottomSheetApp, BottomSheetAppRef } from '../../components';
import { CloseTag } from '../../../assets/icons';
import AppAvatar from '../../components/app-avatar';

const YatanScreen = () => {
  const navigation =
    useNavigation<NavigationProp<AppStackParamList, 'ProfileScreen'>>();
  const [selectedComments, setSelectedComments] = useState<IComment[]>([]);
  const { height } = Dimensions.get('window');
  const refBottomSheet = useRef<BottomSheetAppRef>();
  const data = NewStore.listSelectData;
  const ICommentPress = (comments: IComment[]) => {
    setSelectedComments(comments); //
    refBottomSheet.current?.show();
  };
  return (
    <View style={[S.center, { paddingHorizontal: ms(22), paddingTop: ms(12) }]}>
      <FlatList<Item>
        data={data}
        renderItem={({ item }) => (
          <ItemHome
            data={item}
            onItemPress={() => {}}
            ICommentPress={() => ICommentPress(item.comment)}
            isFollow={false}
          />
        )}
        keyExtractor={item => item.id} // Đảm bảo sử dụng keyExtractor
        showsVerticalScrollIndicator={false} // Ẩn thanh cuộn ngang (tùy chọn)
      />
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
    </View>
  );
};

export default YatanScreen;

const styles = StyleSheet.create({
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
