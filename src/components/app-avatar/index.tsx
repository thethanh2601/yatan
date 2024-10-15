import React from 'react';
import { StyleProp, StyleSheet, View } from 'react-native';
import FastImage, { ImageStyle, Source } from 'react-native-fast-image';
import { SvgProps } from 'react-native-svg';
import { VerifiedTick } from '../../../assets/icons';
import { AppImages } from '../../../assets/images';
import { ms } from '../../themes';

interface IAvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
  verified?: boolean;
  url?: string;
}

const AppAvatar = (props: IAvatarProps) => {
  const mappingAvatarSize = (): StyleProp<ImageStyle> => {
    switch (size) {
      case 'xs':
        return { height: ms(24), width: ms(24) };
      case 'sm':
        return { height: ms(32), width: ms(32) };
      case 'md':
        return { height: ms(40), width: ms(40) };
      case 'lg':
        return { height: ms(48), width: ms(48) };
      case 'xl':
        return { height: ms(56), width: ms(56) };
      case '2xl':
        return { height: ms(64), width: ms(64) };
      default:
        return { height: ms(size), width: ms(size) };
    }
  };

  const mappingIconSize = (): SvgProps => {
    switch (size) {
      case 'xs':
        return { height: ms(10), width: ms(10) };
      case 'sm':
        return { height: ms(12), width: ms(12) };
      case 'md':
        return { height: ms(14), width: ms(14) };
      case 'lg':
        return { height: ms(16), width: ms(16) };
      case 'xl':
        return { height: ms(18), width: ms(18) };
      case '2xl':
        return { height: ms(20), width: ms(20) };
      default:
        return { height: ms(20), width: ms(20) };
    }
  };

  const { verified = false, size = 'xs', url } = props;
  return (
    <View>
      {verified ? (
        <VerifiedTick {...mappingIconSize()} style={styles.icon} />
      ) : null}
      <FastImage
        source={url ? { uri: url } : AppImages.logo}
        style={[styles.avatar, mappingAvatarSize()]}
        resizeMode="cover"
      />
    </View>
  );
};

export default AppAvatar;

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    right: 0,
  },
  avatar: {
    borderRadius: ms(100),
  },
});
