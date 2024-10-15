import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { S, ms } from '../../themes';
import { Eye, MessageTextSquare02, Plus, Send } from '../../../assets/icons';
import { ItemHomeProps, styles } from '.';

export const ItemHome: React.FC<ItemHomeProps> = ({
  data,
  onItemPress,
  ICommentPress,
}) => {
  const Share = (id: string) => {};
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={{ marginBottom: ms(20) }}>
      <View style={[S.rowSpaceBetween, { width: '100%' }]}>
        <TouchableOpacity
          style={[S.rowCenter, { gap: 16 }]}
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
        )} // Sử dụng index làm key
        horizontal // Thay đổi để hiển thị theo chiều ngang
        showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang (tùy chọn)
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
        <Send onPress={() => Share(data.avata)} />
      </View>
    </View>
  );
};
