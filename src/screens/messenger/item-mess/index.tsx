import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { S, TS, color, ms } from '../../../themes';
import { Message } from '../../../models/mess/mess';
import AppAvatar from '../../../components/app-avatar';

interface ItemMessProps {
  item: Message;
  onItemPress: (item: Message) => void;
}
const ItemMess: React.FC<ItemMessProps> = ({ item, onItemPress }) => {
  const lastMessage = item.inbox[item.inbox.length - 1];

  return (
    <TouchableOpacity
      style={{ marginBottom: ms(12) }}
      onPress={() => onItemPress(item)}>
      <View style={[S.row, { gap: ms(12) }]}>
        <AppAvatar size="lg" url={item.avatar} />
        <View>
          <Text style={styles.textName}>{item.name}</Text>

          <Text style={item.status ? styles.text : styles.textTrue}>
            {lastMessage.role === 0 ? item.name : 'Bạn'}: {lastMessage.text}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemMess;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.gray[100],
    padding: ms(12),
    borderRadius: ms(24),
  },
  containerTrue: {
    backgroundColor: color.gray[500],
    padding: ms(12),
    borderRadius: ms(24),
  },

  textName: {
    ...TS.textLgSemibold,
    color: color.white,
  },
  text: {
    ...TS.textSmMedium,
    color: color.gray[400],
  },
  textTrue: {
    ...TS.textSmMedium,
    color: color.gray[100],
  },
});
