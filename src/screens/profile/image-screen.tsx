import { View, Text } from 'react-native';
import React from 'react';
import { AppStackParamList, AppStackScreenProps } from '../../navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const ImageScreen = () => {
  const navigation =
    useNavigation<NavigationProp<AppStackParamList, 'ProfileScreen'>>();
  return (
    <View>
      <Text>ImageScreen</Text>
    </View>
  );
};

export default ImageScreen;
