import React from 'react';
import FastImage from 'react-native-fast-image';
import { color, ms } from '../../themes';
import { TouchableOpacity, ViewStyle } from 'react-native';
import XVector from '../../../assets/icons/x-vector';
import { AppImages } from '../../../assets/images';

export interface IImageProps {
  uri?: string;
  style?: ViewStyle | ViewStyle[];
  onPress?: () => void;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  borderRadius?: number;
  onRemoveItem?: (uri: string) => void;
}

export const AppImage = (props: IImageProps) => {
  const { uri, style, onPress, size = 'lg', onRemoveItem } = props;
  const imageSize = (function () {
    switch (size) {
      case 'xxs':
        return ms(32);
      case 'xs':
        return ms(48);
      case 'sm':
        return ms(64);
      case 'md':
        return ms(104);
      case 'lg':
        return ms(160);
      case 'xl':
        return ms(168);
      default:
        return size;
    }
  })();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{
        borderWidth: uri ? 0 : ms(1),
        borderColor: color.gray[50],
        alignSelf: 'flex-start',
        ...style,
      }}>
      {onRemoveItem && uri ? (
        <TouchableOpacity
          onPress={() => {
            onRemoveItem(uri);
          }}
          style={{
            borderRadius: ms(16),
            backgroundColor: 'rgba(255, 255, 255, 0.40)',
            padding: ms(8),
            zIndex: 10,
            position: 'absolute',
            right: 0,
          }}>
          <XVector height={ms(16)} width={ms(16)} />
        </TouchableOpacity>
      ) : null}

      <FastImage
        source={uri ? { uri: uri } : AppImages.logo}
        style={{
          height: imageSize,
          width: imageSize,
          borderRadius: ms(8),
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};
