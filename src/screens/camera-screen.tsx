import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { S, TS, color, ms } from '../themes';
import { AppStackScreenProps, TabParamList } from '../navigation';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  PhotoFile,
  TakePhotoOptions,
  useCameraFormat,
  Point,
} from 'react-native-vision-camera';
import { ActivityIndicator } from 'react-native';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

interface CameraScreenProps extends AppStackScreenProps<'CameraScreen'> {}

const CameraScreen = ({ navigation, route }: CameraScreenProps) => {
  const { hasPermission, requestPermission } = useCameraPermission();
  const [isActive, setIsActive] = useState(false);
  const [photo, setPhoto] = useState<PhotoFile>();
  const camera = useRef<Camera>(null);
  const [flash, setFlash] = useState<TakePhotoOptions['flash']>('off');
  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });

  const format = useCameraFormat(device, [
    { videoAspectRatio: 4 / 3 }, // Đặt tỷ lệ khung hình là 4:3
    { videoResolution: { width: 2048, height: 1536 } }, // Độ phân giải 4:3
    { fps: 30 }, // Khung hình mỗi giây
  ]);

  const focus = useCallback((point: Point) => {
    const c = camera.current;
    if (c == null) return;
    c.focus(point);
  }, []);

  const gesture = Gesture.Tap().onEnd(({ x, y }) => {
    runOnJS(focus)({ x, y });
  });

  useFocusEffect(
    useCallback(() => {
      setIsActive(true);
      return () => {
        setIsActive(false);
      };
    }, []),
  );

  const onTakePicture = async () => {
    const photo = await camera.current?.takePhoto({
      flash,
      enableAutoRedEyeReduction: true,
    });
    setPhoto(photo);
    console.log('photo', photo);
  };

  const uploadPhoto = async () => {
    if (!photo) {
      return;
    }
    const result = await fetch(`file://${photo.path}`);
    const data = await result.blob();
    console.log('data', data);
  };

  if (!hasPermission) return <ActivityIndicator />;
  if (!device)
    return (
      <View
        style={[S.flex1, { alignItems: 'center', justifyContent: 'center' }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Không thể truy cập camera, xin vui lòng cấp quyền</Text>
        </TouchableOpacity>
      </View>
    );

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  return (
    <SafeAreaView style={S.screen}>
      <View style={{ flex: 1 }}>
        <View style={{ aspectRatio: 3 / 4 }}>
          <GestureDetector gesture={gesture}>
            <Camera
              ref={camera}
              style={StyleSheet.absoluteFill}
              device={device}
              format={format}
              isActive={isActive && !photo}
              photo={true}
            />
          </GestureDetector>
        </View>
        {photo ? (
          <>
            <Image
              source={{ uri: photo.path }}
              style={StyleSheet.absoluteFill}
            />
            <FontAwesome5
              onPress={() => setPhoto(undefined)}
              name="arrow-left"
              size={25}
              color="white"
              style={{ position: 'absolute', top: 30, left: 20 }}
            />

            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
              }}>
              <Pressable style={styles.btnUpload} onPress={uploadPhoto} />
            </View>
          </>
        ) : (
          <>
            <View style={{ position: 'absolute', top: 30, right: 20 }}>
              <Ionicons
                name={flash === 'off' ? 'flash-off' : 'flash'}
                onPress={() =>
                  setFlash(curValue => (curValue === 'off' ? 'on' : 'off'))
                }
                size={24}
                color="white"
              />
            </View>
            <Pressable style={styles.btnContainer} onPress={onTakePicture} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 150,
    width: 75,
    height: 75,
    backgroundColor: color.white,
    borderRadius: 75,
  },
  btnUpload: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 50,
    width: 75,
    height: 75,
    backgroundColor: color.error[300],
    borderRadius: 75,
  },
});
