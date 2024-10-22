import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';
import { round } from 'lodash';
import { TS, color, ms } from '../themes';
import { useModal } from './modal-image-view';

const { width } = Dimensions.get('window');
const gap = ms(16);
const imageSize = round(width - gap * 3 - ms(16) * 2) / 4; // change ms(16) to current outer container padding- margin in here we fix this

interface IListImageProps {
  images: string[] | undefined;
  title?: string;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
}
const ListImage = ({
  title,
  images = [],
  titleStyle,
  containerStyle,
}: IListImageProps) => {
  const { openModal } = useModal();
  // useEffect(() => {
  //   if (images) {
  //     const listSource: Source[] = images.map(item => ({ uri: item }));
  //     FastImage.preload(listSource);
  //   }
  // }, []);
  return (
    <View style={containerStyle}>
      {title && <Text style={[styles.label, { ...titleStyle }]}>{title}</Text>}
      <View style={[styles.listImage, { gap }]}>
        {images.length ? (
          images.map((img, index) => (
            <TouchableOpacity
              onPress={() => {
                openModal(images);
              }}
              key={img ? `image-${index}` : `empty-${index}`}
              style={{
                height: imageSize,
                width: imageSize,
              }}>
              {img && (
                <FastImage
                  source={{ uri: img }}
                  style={styles.image}
                  resizeMode="cover"
                />
              )}
            </TouchableOpacity>
          ))
        ) : (
          <Text
            style={[
              TS.textSm,
              {
                color: color.gray[800],
              },
            ]}>
            Không có ảnh
          </Text>
        )}
      </View>
    </View>
  );
};

export default ListImage;

const styles = StyleSheet.create({
  label: {
    ...TS.textLgSemibold,
    color: color.gray[900],
    marginBottom: ms(16),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  listImage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    // Chú ý rằng margin đã được tính ở mỗi View con
  },
});
