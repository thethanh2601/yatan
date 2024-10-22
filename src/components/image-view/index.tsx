import React, { useRef } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { S, color, ms } from '../../themes';
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
  PinchGestureHandler,
} from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';
import { XClose } from '../../../assets/icons';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { useModal } from '../modal-image-view';

const { width, height } = Dimensions.get('screen');

const cardLength = width * 0.8;
const spacing = width * 0.02;
const sizeCardLength = (width - (cardLength + spacing)) / 2;
const snapToInterval = cardLength + spacing * 2;

interface IProps {
  images: string[];
}

export const ImageViewScreen = ({ images }: IProps) => {
  const { closeModal } = useModal();

  const scrollX = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const resetAnimation = () => {
    Animated.parallel([
      Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
      Animated.spring(translateX, { toValue: 0, useNativeDriver: true }),
      Animated.spring(translateY, { toValue: 0, useNativeDriver: true }),
    ]).start();
  };

  return (
    <View>
      <View style={S.center}>
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true },
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={snapToInterval}
          disableIntervalMomentum={true}
          disableScrollViewPanResponder={true}
          decelerationRate={0.8}
          data={images}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * snapToInterval,
              index * snapToInterval,
              (index + 1) * snapToInterval,
            ];
            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.8, 1, 0.8],
            });
            return (
              <Animated.View
                style={[
                  styles.carouselItemContainer,
                  {
                    marginLeft: index === 0 ? sizeCardLength : spacing,
                    marginRight:
                      index === images.length - 1 ? sizeCardLength : spacing,
                    transform: [{ scaleY: scale }],
                  },
                ]}>
                <Image source={{ uri: item }} style={styles.carouselItem} />
              </Animated.View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItemContainer: {
    height: 300,
    width: cardLength,
    overflow: 'hidden',
    borderRadius: 15,
  },
  carouselItem: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageContainer: {
    ...S.flex1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: ms(140),
    marginHorizontal: ms(8),
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 16,
  },
  closeContainer: {
    position: 'absolute',
    zIndex: 1000,
    padding: ms(8),
    backgroundColor: color.gray[400],
    top: 0,
    right: 0,
    margin: ms(16),
    borderRadius: ms(8),
  },
});

export default ImageViewScreen;
