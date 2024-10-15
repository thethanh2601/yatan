import React from 'react';
import { StyleSheet, View } from 'react-native';
import DateTimePicker, { DateType } from 'react-native-ui-datepicker';
import { ChevronLeft, ChevronRight } from '../../../assets/icons';
import { TS, color, ms } from '../../themes';

const localeVI: ILocale = {
  name: 'vi',
  weekdays: [
    'Chủ Nhật',
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sáu',
    'Thứ Bảy',
  ],
  months: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  weekStart: 1, // Monday
  weekdaysShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  monthsShort: [
    'Th1',
    'Th2',
    'Th3',
    'Th4',
    'Th5',
    'Th6',
    'Th7',
    'Th8',
    'Th9',
    'Th10',
    'Th11',
    'Th12',
  ],
  weekdaysMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  ordinal: (n: number) => `${n}`,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm',
  },
  relativeTime: {
    future: 'trong %s',
    past: '%s trước',
    s: 'vài giây',
    m: 'một phút',
    mm: '%d phút',
    h: 'một giờ',
    hh: '%d giờ',
    d: 'một ngày',
    dd: '%d ngày',
    M: 'một tháng',
    MM: '%d tháng',
    y: 'một năm',
    yy: '%d năm',
  },
};

interface IAppCalendarProps {
  date: DateType;
  setDate: React.Dispatch<React.SetStateAction<DateType>>;
}

const AppCalendar = (props: IAppCalendarProps) => {
  const { date, setDate } = props;

  return (
    <View>
      <DateTimePicker
        mode="single"
        date={date}
        onChange={params => setDate(params.date)}
        locale={localeVI}
        firstDayOfWeek={1}
        calendarTextStyle={styles.calendarTextStyle}
        selectedItemColor={color.primary[500]}
        headerButtonColor={'#ACACAC'}
        headerButtonSize={ms(16)}
        headerTextStyle={styles.headerTextStyle}
        todayTextStyle={styles.todayTextStyle}
        buttonPrevIcon={
          <ChevronLeft
            height={ms(20)}
            width={ms(20)}
            style={{ margin: ms(8) }}
          />
        }
        buttonNextIcon={
          <ChevronRight
            height={ms(20)}
            width={ms(20)}
            style={{ margin: ms(8) }}
          />
        }
        todayContainerStyle={styles.todayContainerStyle}
        dayContainerStyle={styles.dayContainerStyle}
        selectedTextStyle={styles.selectedTextStyle}
        weekDaysContainerStyle={styles.weekDaysContainerStyle}
        weekDaysTextStyle={styles.weekDaysTextStyle}
        monthContainerStyle={styles.monthContainerStyle}
        yearContainerStyle={styles.monthContainerStyle}
      />
    </View>
  );
};

export default AppCalendar;

const styles = StyleSheet.create({
  calendarTextStyle: {
    ...TS.textSm,
    color: color.gray[50],
  },
  headerTextStyle: {
    ...TS.textMdSemibold,
    color: color.gray[50],
  },
  todayTextStyle: {
    color: color.gray[50],
  },
  todayContainerStyle: {
    borderRadius: ms(200),
    backgroundColor: color.primary[950],
    borderWidth: 0,
    height: ms(40),
    width: ms(40),
    alignSelf: 'center',
  },
  dayContainerStyle: {
    borderRadius: ms(200),
    borderWidth: 0,
    height: ms(40),
    width: ms(40),
    alignSelf: 'center',
  },
  selectedTextStyle: {
    color: '#080B0F',
  },
  weekDaysContainerStyle: {
    borderBottomWidth: 0,
  },
  weekDaysTextStyle: {
    ...TS.textSmMedium,
    color: color.gray[50],
  },
  monthContainerStyle: {
    backgroundColor: color.gray[800],
    borderColor: color.gray[700],
  },
});
