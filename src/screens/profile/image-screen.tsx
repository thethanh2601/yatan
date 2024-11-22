import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
  Button,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { AppStackParamList, AppStackScreenProps } from '../../navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { S, ms } from '../../themes';
import Svg, { Circle, G, Polygon, Text as SvgText } from 'react-native-svg';

const items = [
  'Phở',
  'Bún chả',
  'Gỏi cuốn',
  'Cơm tấm',
  'Bánh mì',
  'Chả giò',
  'Mì Quảng',
  'Bánh xèo',
  'Hủ tiếu',
  'Xôi gấc',
  'Bánh cuốn',
  'Lẩu Thái',
  'Chè đậu xanh',
  'Cá kho tộ',
  'Nem rán',
];
const ImageScreen = () => {
  const navigation =
    useNavigation<NavigationProp<AppStackParamList, 'ProfileScreen'>>();
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRandomize = () => {
    setIsLoading(true);
    setResult(null);

    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < items.length) {
        setResult(items[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        const randomIndex = Math.floor(Math.random() * items.length);
        setResult(`Kết quả: ${items[randomIndex]}`);
        setIsLoading(false);
      }
    }, 100); // Thay đổi giá trị này để điều chỉnh tốc độ chạy
  };

  return (
    <View style={styles.container}>
      {isLoading && <Text style={styles.loadingText}>Đang chạy...</Text>}
      {result && <Text style={styles.resultText}>{result}</Text>}
      <Button title="Lấy Kết Quả Random" onPress={handleRandomize} />
    </View>
  );
};
export default ImageScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    marginTop: 20,
    color: 'white',
  },
  resultText: {
    fontSize: 24,
    marginTop: 20,
    color: 'white',
  },
});
