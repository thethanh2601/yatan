import {
  Alert,
  FlatList,
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef } from 'react';
import { S, TS, color, ms } from '../../themes';
import { Eye, MessageTextSquare02, Plus, Send } from '../../../assets/icons';
import { BottomSheetApp, BottomSheetAppRef } from '../bottom-sheet-app';

export interface IComment {
  id: string;
  name: string;
  avata: string;
  title: string;
}
export interface Item {
  id: string;
  name: string;
  avata: string;
  date: string;
  title: string;
  follow: boolean;
  image: string[];
  like: number;
  comment: IComment[];
}
interface ItemHomeProps {
  data: Item;
  onItemPress: (item: Item) => void;
  ICommentPress: (item: IComment[]) => void;
}

const ItemHome: React.FC<ItemHomeProps> = ({
  data,
  onItemPress,
  ICommentPress,
}) => {
  const onShare = async (id: string) => {
    try {
      const result = await Share.share({
        message: id + ': đây là thông tin mật bạn muốn next nó đi đâu ?',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log(`Chia sẻ với loại hoạt động: ${result.activityType}`);
        } else {
          console.log('Chia sẻ thành công!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Đã đóng hộp thoại chia sẻ.');
      }
    } catch (error: any) {
      Alert.alert('Lỗi khi chia sẻ:', error.message);
    }
  };

  return (
    <View style={{ marginBottom: ms(20) }}>
      <View style={[S.rowSpaceBetween, { width: '100%' }]}>
        <TouchableOpacity
          style={[S.rowCenter, { gap: ms(2) }]}
          onPress={() => onItemPress(data)}>
          <View style={{ position: 'relative', width: ms(50), height: ms(50) }}>
            <Image source={{ uri: data.avata }} style={styles.ItemAvata} />
            <Plus style={styles.icon} />
          </View>
          <View>
            <Text style={styles.textName}>{data.name}</Text>
            <Text style={styles.text}>{data.title}</Text>
          </View>
        </TouchableOpacity>
        <View></View>
      </View>
      <FlatList
        data={data.image} // Sử dụng data.images
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.ItemImage} />
        )}
        horizontal // Thay đổi để hiển thị theo chiều ngang
        showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang (tùy chọn)
        // contentContainerStyle={{ paddingHorizontal: 10 }} // Tùy chọn thêm padding
      />

      <View style={styles.bottom}>
        <TouchableOpacity style={[S.rowCenter, { gap: ms(8) }]}>
          <Eye />
          <Text style={styles.text}>{data.like}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[S.rowCenter, { gap: ms(8) }]}
          onPress={() => ICommentPress(data.comment)}>
          <MessageTextSquare02 />
          <Text style={styles.text}>{data.comment.length}</Text>
        </TouchableOpacity>
        <Send onPress={() => onShare(data.name)} />
      </View>
    </View>
  );
};

export default ItemHome;
const styles = StyleSheet.create({
  ItemAvata: {
    width: ms(40),
    height: ms(40),
    borderRadius: ms(99),
  },
  ItemImage: {
    width: ms(200),
    height: ms(300),
    borderRadius: ms(8),
    marginTop: ms(8),
    marginRight: ms(12),
    marginBottom: ms(16),
  },
  icon: {
    position: 'absolute', // Đặt vị trí tuyệt đối cho biểu tượng
    bottom: ms(5), // Căn chỉnh xuống đáy
    right: 0, // Căn chỉnh bên phải
    width: ms(20), // Kích thước cho biểu tượng (tuỳ chọn)
    height: ms(20), // Kích thước cho biểu tượng (tuỳ chọn)
  },
  textName: {
    ...TS.textMdMedium,
    color: color.white,
  },
  text: {
    color: color.white,
  },
  bottom: {
    ...S.rowCenterSpaceBetween,
    paddingHorizontal: ms(20),
    width: '100%',
  },
});
