import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { S, TS, color, ms } from '../../themes';
import AppAvatar from '../../components/app-avatar';
import { AppStackScreenProps } from '../../navigation';
import { ArrowLeft } from '../../../assets/icons';
import { MessStore } from '../../request-store/mess-store';
import { Inbox } from '../../models/mess/mess';

interface InboxScreenProps extends AppStackScreenProps<'InboxScreen'> {}

const InboxScreen = ({ navigation, route }: InboxScreenProps) => {
  const inboxId = route.params?.inboxId;
  const data = MessStore.listSelectData.find(item => item.id === inboxId);
  const [messages, setMessages] = useState<Inbox[]>(data?.inbox || []);
  const [input, setInput] = useState<string>('');

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage: Inbox = {
        id: (messages.length + 1).toString(),
        text: input,
        avatarUrl:
          'https://smilemedia.vn/wp-content/uploads/2023/05/cach-tao-dang-chup-anh-ngoi-1.jpg',
        role: 1,
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  const renderMessage = ({ item }: { item: Inbox }) => (
    <View
      style={
        item.role === 0 ? styles.messageContainerLeft : styles.messageContainer
      }>
      {item.role === 0 && <AppAvatar size="xs" url={item.avatarUrl} />}
      <View style={item.role === 0 ? styles.messageLeft : styles.message}>
        <Text style={{ color: color.white }}>{item.text}</Text>
      </View>
      {item.role === 1 && <AppAvatar size="xs" url={item.avatarUrl} />}
    </View>
  );

  return (
    <SafeAreaView style={S.screen}>
      <View style={{ flex: 1, paddingHorizontal: ms(16) }}>
        <View style={[S.rowCenter, { paddingBottom: ms(12), gap: ms(12) }]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft />
          </TouchableOpacity>
          <View style={[S.row, { gap: ms(8) }]}>
            <AppAvatar size="md" url={data?.avatar} />
            <View>
              <Text style={[TS.textMdSemibold, { color: color.white }]}>
                {data?.name}
              </Text>
              <Text style={[TS.textXsMedium, { color: color.gray[300] }]}>
                hoạt động 10p trước
              </Text>
            </View>
          </View>
        </View>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={item => item.id}
          style={styles.messageList}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhập tin nhắn..."
            value={input}
            onChangeText={setInput}
          />
          <Button title="Gửi" onPress={sendMessage} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({
  messageList: {
    flex: 1,
    marginBottom: ms(10),
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: ms(1),
    justifyContent: 'flex-end', // Căn tin nhắn bên phải
  },
  message: {
    padding: ms(8),
    borderRadius: ms(5),
    marginHorizontal: ms(4),
    backgroundColor: color.gray[500],
    borderTopLeftRadius: ms(16),
    borderBottomLeftRadius: ms(16),
    borderTopRightRadius: ms(16),
    maxWidth: '70%', // Hạn chế chiều rộng của tin nhắn
  },
  messageContainerLeft: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: ms(1),
    justifyContent: 'flex-start', // Căn tin nhắn bên trái
  },
  messageLeft: {
    padding: ms(8),
    marginHorizontal: ms(4),
    borderRadius: ms(5),
    backgroundColor: color.gray[500],
    borderTopRightRadius: ms(16),
    borderBottomRightRadius: ms(16),
    borderTopLeftRadius: ms(16),
    maxWidth: '70%', // Hạn chế chiều rộng của tin nhắn
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.white,
    borderRadius: ms(12),
  },
  input: {
    flex: 1,
    borderWidth: ms(1),
    borderColor: '#ccc',
    borderRadius: ms(12),
    padding: ms(10),
    marginRight: 1,
  },
});
