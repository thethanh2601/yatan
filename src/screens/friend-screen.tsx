import moment from 'moment';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DateType } from 'react-native-ui-datepicker';
import { AppButton, NavBar } from '../components';
import AppCalendar from '../components/app-calendar';
import { AppStackScreenProps } from '../navigation';
import { S, TS, color, ms } from '../themes';

interface FriendScreenScreenProps extends AppStackScreenProps<'FriendScreen'> {}

const FriendScreen = ({ navigation, route }: FriendScreenScreenProps) => {
  const [date, setDate] = useState<DateType>(moment().toDate());

  return (
    <SafeAreaView style={S.screen}>
      <NavBar title="Lịch sử chấm công" onTouchBtnBack={navigation.goBack} />
      <AppCalendar date={date} setDate={setDate} />

      <View style={[S.rowCenter, { gap: ms(12), marginHorizontal: ms(16) }]}>
        <View style={styles.selectedDate}>
          <Text style={styles.selectedDateText}>
            {moment(date?.toString()).format('DD/MM/YYYY')}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.currentDate}
          onPress={() => setDate(moment().toDate())}>
          <Text style={styles.currentDateText}>Hôm nay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FriendScreen;

const styles = StyleSheet.create({
  selectedDate: {
    ...S.flex1,
    ...S.rowCenter,
    backgroundColor: color.gray[900],
    borderWidth: ms(1),
    borderColor: color.gray[700],
    borderRadius: ms(8),
    height: ms(40),
    paddingHorizontal: ms(12),
    paddingVertical: ms(8),
  },
  currentDate: {
    ...S.rowCenter,
    backgroundColor: color.gray[800],
    borderWidth: ms(1),
    borderColor: color.gray[700],
    borderRadius: ms(8),
    height: ms(40),
    paddingHorizontal: ms(16),
  },
  selectedDateText: {
    ...TS.textMdMedium,
    color: color.gray[200],
  },
  currentDateText: {
    ...TS.textMdMedium,
    color: color.gray[50],
  },
});
