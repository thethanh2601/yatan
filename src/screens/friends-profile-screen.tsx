import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { S, color, ms } from '../themes';
import { AppStackScreenProps } from '../navigation';
import { ArrowLeft } from '../../assets/icons';

interface FriendsProfileScreenProps
  extends AppStackScreenProps<'FriendsProfileScreen'> {}

const FriendsProfileScreen = ({
  navigation,
  route,
}: FriendsProfileScreenProps) => {
  return (
    <SafeAreaView style={[S.screen]}>
      <View style={{ padding: ms(13) }}>
        <ArrowLeft
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.container}>
          <Image
            source={{
              uri: 'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Xoài Non</Text>
          <Text style={styles.bio}>Thông tin cá nhân hoặc mô tả ngắn</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FriendsProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Tạo hình tròn
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.gray[200],
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
});
