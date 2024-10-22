import {
  Alert,
  FlatList,
  Image,
  Modal,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { S, TS, color, ms } from '../../themes';
import {
  CloseTag,
  Eye,
  MessageTextSquare02,
  Plus,
  PlusCircle,
  Send,
} from '../../../assets/icons';
import ConfirmModal, { ConfirmModalRef } from '../confirm-modal';
import { IComment, Item } from '../../models/new-post/newPost';
import { NewStore } from '../../request-store/newpost-store';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

interface ItemHomeProps {
  data: Item;
  onItemPress: (item: Item) => void;
  ICommentPress: (item: IComment[]) => void;
  isFollow: boolean;
}

const ItemHome: React.FC<ItemHomeProps> = ({
  data,
  onItemPress,
  ICommentPress,
  isFollow = false,
}) => {
  const modalConfirmRef = useRef<ConfirmModalRef>(null);
  const [likeCount, setLikeCount] = useState(data.like);
  const [follow, setFollow] = useState(data.follow);
  const [like, setLike] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImagePress = (index: number) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const onSwipeGesture = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationX > 50) {
        setSelectedImageIndex(prev => Math.max(prev - 1, 0));
      } else if (event.nativeEvent.translationX < -50) {
        setSelectedImageIndex(prev =>
          Math.min(prev + 1, data.image.length - 1),
        );
      }
    }
  };

  const handleLike = () => {
    setLike(pre => !pre);
    if (!like) {
      setLikeCount(pre => pre + 1);
    } else {
      setLikeCount(pre => pre - 1);
    }
  };

  const handleToggleFollow = (id: string) => {
    NewStore.toggleFollow(id);
    setFollow(pri => !pri);
  };
  const handleFollow = () => {
    if (!data.follow && isFollow) {
      modalConfirmRef.current?.show();
    } else {
      onItemPress(data);
    }
  };

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
  useEffect(() => {
    NewStore.getListData;
  }, [follow]);

  return (
    <View style={{ marginBottom: ms(20) }}>
      <View style={[S.rowSpaceBetween, { width: '100%' }]}>
        <TouchableOpacity
          style={[S.rowCenter, { gap: ms(2) }]}
          onPress={() => onItemPress(data)}>
          <TouchableOpacity
            style={{ position: 'relative', width: ms(50), height: ms(50) }}
            onPress={handleFollow}>
            <Image source={{ uri: data.avata }} style={styles.ItemAvata} />
            {!data.follow && isFollow ? (
              <View style={styles.icon}>
                <PlusCircle />
              </View>
            ) : null}
          </TouchableOpacity>
          <View>
            <Text style={styles.textName}>{data.name}</Text>
            <Text style={styles.text}>{data.title}</Text>
          </View>
        </TouchableOpacity>
        <View></View>
      </View>

      <FlatList
        data={data.image}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleImagePress(index)}>
            <Image source={{ uri: item }} style={styles.ItemImage} />
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.bottom}>
        <TouchableOpacity style={[S.rowCenter, { gap: ms(8) }]}>
          <Eye onPress={handleLike} />
          <Text style={styles.text}>{likeCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[S.rowCenter, { gap: ms(8) }]}
          onPress={() => ICommentPress(data.comment)}>
          <MessageTextSquare02 />
          <Text style={styles.text}>{data.comment.length}</Text>
        </TouchableOpacity>
        <Send onPress={() => onShare(data.name)} />
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={handleCloseModal}
            style={styles.closeButton}>
            <CloseTag width={ms(40)} height={ms(40)} />
          </TouchableOpacity>
          <PanGestureHandler onHandlerStateChange={onSwipeGesture}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: data.image[selectedImageIndex] }}
                style={styles.modalImage}
              />
            </View>
          </PanGestureHandler>
        </View>
      </Modal>

      <ConfirmModal
        ref={modalConfirmRef}
        title={'Theo dõi ' + data.name + '?'}
        onConfirm={() => handleToggleFollow(data.id)}
        confirmBtnTitle={'Theo dõi'}
        abortBtnTitle={'Huỷ'}
      />
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
    bottom: ms(8), // Căn chỉnh xuống đáy
    right: 4, // Căn chỉnh bên phải
    width: ms(20), // Kích thước cho biểu tượng (tuỳ chọn)
    height: ms(20), // Kích thước cho biểu tượng (tuỳ chọn)
    backgroundColor: 'white',
    borderRadius: ms(20),
    alignItems: 'center',
    justifyContent: 'center',
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: ms(80),
    right: ms(4),
    zIndex: 10,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
