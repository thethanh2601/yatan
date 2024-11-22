import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { S, TS, color, ms } from '../../themes';
import { AppStackScreenProps } from '../../navigation';
import { ArrowLeft } from '../../../assets/icons';
import { AppButton } from '../../components';
import ConfirmModal, { ConfirmModalRef } from '../../components/confirm-modal';
import { NewStore } from '../../request-store/newpost-store';
import { observer } from 'mobx-react-lite';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import YatanScreen from './yatan-screen';
import ImageScreen from './image-screen';
import RepostScreen from './repost-screen';

interface ProfileScreenProps extends AppStackScreenProps<'ProfileScreen'> {}
const { width, height } = Dimensions.get('window');
const TAB_WIDTH = width / 3;

const ProfileScreen = ({ navigation, route }: ProfileScreenProps) => {
  const profileId = route.params?.profileId;
  const dataItem = NewStore.listSelectData.find(item => item.id === profileId);
  const [follow, setFollow] = useState(dataItem?.follow);
  const [show, setShow] = useState(true); // Trạng thái điều khiển show/hide
  const modalConfirmRef = useRef<ConfirmModalRef>(null);

  const translateX = useSharedValue(0);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    translateX.value = withSpring(index * TAB_WIDTH);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <YatanScreen profileId={profileId} />;
      case 1:
        return <ImageScreen />;
      case 2:
        return <RepostScreen />;
      default:
        return null;
    }
  };

  const onOpenFollow = async () => {
    if (dataItem?.follow) {
      modalConfirmRef.current?.show();
    } else {
      if (dataItem?.id) {
        NewStore.toggleFollow(dataItem?.id);
        setFollow(pri => !pri);
      }
    }
  };

  const onFollow = async (id: string) => {
    NewStore.toggleFollow(id);
    setFollow(pri => !pri);
  };

  useEffect(() => {
    NewStore.listSelectData;
  }, [follow]);

  const handleScroll = (event: any) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const screenHeight = height;

    // Kiểm tra khi cuộn lên 1/3 chiều cao màn hình
    if (contentOffsetY > screenHeight / 3) {
      setShow(false);
    }
  };

  return (
    <SafeAreaView style={[S.screen]}>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        {/* Lắng nghe sự kiện cuộn */}
        {show ? (
          <View style={{ padding: ms(13) }}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.replace('DashboardScreen');
                }}>
                <ArrowLeft />
              </TouchableOpacity>
              <View style={styles.container}>
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{dataItem?.name}</Text>
                  <Text style={styles.nameId}>{dataItem?.nickname}</Text>
                  <Text style={styles.bio}>{dataItem?.biography}</Text>
                  <Text style={styles.bio}>
                    {dataItem?.numFollowers + ' người theo dõi'}
                  </Text>
                </View>
                <Image
                  source={{
                    uri: dataItem?.avata,
                  }}
                  style={styles.profileImage}
                />
              </View>
            </View>
            <View
              style={[S.rowCenterSpaceBetween, { paddingHorizontal: ms(26) }]}>
              <AppButton
                outLine="gray"
                title={dataItem?.follow ? 'Đang theo dõi' : 'Theo dõi'}
                size="md"
                containerStyle={{
                  backgroundColor: dataItem?.follow
                    ? color.gray[300]
                    : color.black,
                  borderColor: color.black,
                  width: ms(150),
                }}
                titleStyle={{
                  color: dataItem?.follow ? color.gray[600] : color.white,
                }}
                onPress={onOpenFollow}
              />
              <AppButton
                outLine="gray"
                title={'Nhắn tin'}
                size="md"
                containerStyle={{
                  backgroundColor: color.gray[300],
                  borderColor: color.black,
                  width: ms(150),
                }}
                titleStyle={{ color: color.black }}
                onPress={() => {
                  navigation.navigate('InboxScreen', { inboxId: '12' });
                }}
              />
            </View>
          </View>
        ) : null}
        <View style={styles.containerTab}>
          <View style={styles.tabContainer}>
            <Animated.View style={[styles.tabIndicator, animatedStyle]} />
            {['Yatan', 'Ảnh', 'Đăng Lại'].map((tab, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleTabPress(index)}
                style={styles.tab}>
                <Text
                  style={[
                    styles.tabText,
                    activeTab === index && styles.activeTabText,
                  ]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.contentContainer}>{renderContent()}</View>
        </View>
      </ScrollView>

      <ConfirmModal
        ref={modalConfirmRef}
        title={'Bỏ theo dõi?'}
        onConfirm={() => onFollow(profileId)}
        confirmBtnTitle={'Bỏ theo dõi'}
        abortBtnTitle={'Huỷ'}
      />
    </SafeAreaView>
  );
};

export default observer(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textContainer: {
    marginLeft: ms(10),
    flex: 1,
    gap: ms(2),
  },
  profileImage: {
    width: ms(70),
    height: ms(70),
    borderRadius: ms(99),
  },
  name: {
    ...TS.displayXsSemibold,
    fontWeight: 'bold',
    color: color.white,
  },
  nameId: {
    ...TS.textMdSemibold,
    color: color.gray[200],
  },
  bio: {
    color: color.gray[200],
  },
  containerTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: ms(4),
  },
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
    height: 30,
  },
  tab: {
    width: TAB_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: color.gray[400],
  },
  activeTabText: {
    fontWeight: 'bold',
    color: color.gray[100],
  },
  tabIndicator: {
    position: 'absolute',
    width: TAB_WIDTH,
    height: 2,
    backgroundColor: color.gray[100],
    bottom: 0,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
