import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { useState } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { S, TS, color, ms } from '../../themes';
import Calendar from '../../../assets/icons/calendar';
import XVector from '../../../assets/icons/x-vector';

export interface IPropsDateTimePicker {
  control: Control<FieldValues, any> | any;
  name: string;
  mode?: 'date' | 'time' | 'datetime';
  disable?: boolean;
  containerStyle?: ViewStyle;
  placeholderStyle?: TextStyle;
  placeholder?: string;
  maximumDate?: Date;
  minimumDate?: Date;
  hideIcon?: boolean;
}

const AppDateTimePicker = (props: IPropsDateTimePicker) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const {
    name,
    mode,
    control,
    disable,
    hideIcon,
    maximumDate,
    placeholder,
    minimumDate,
    containerStyle,
    placeholderStyle,
  } = props;
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const formatRender = (value: any) => {
    switch (mode) {
      case 'date':
        return (
          <Text style={[styles.input]}>
            {moment(value).format('DD/MM/YYYY')}
          </Text>
        );
      case 'time':
        return (
          <Text style={[styles.input]}>{moment(value).format('HH:mm')}</Text>
        );
      case 'datetime':
        return (
          <Text style={[styles.input]}>
            {moment(value).format('DD/MM/YYYY HH:mm')}
          </Text>
        );
      default:
        return (
          <Text style={[styles.input]}>
            {moment(value).format('DD/MM/YYYY')}
          </Text>
        );
    }
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <>
            <TouchableOpacity
              disabled={disable}
              onPress={() => {
                setDatePickerVisibility(true);
              }}
              style={containerStyle}>
              <View
                style={[
                  styles.inputContainer,
                  error
                    ? { borderColor: color.error[500], borderWidth: ms(1) }
                    : null,
                  disable ? { backgroundColor: color.gray[25] } : null,
                ]}>
                {hideIcon ? null : (
                  <View style={{ marginRight: ms(4) }}>
                    <Calendar height={ms(24)} width={ms(24)} />
                  </View>
                )}
                {value ? (
                  <>
                    {formatRender(value)}
                    <TouchableOpacity
                      hitSlop={ms(8)}
                      style={{
                        padding: ms(8),
                        zIndex: 10,
                      }}
                      onPress={() => {
                        onChange(null);
                      }}>
                      <XVector height={ms(12)} width={ms(12)} />
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <Text style={[styles.placeholder, placeholderStyle]}>
                      {placeholder}
                    </Text>
                  </>
                )}
              </View>
              <View>
                {error && (
                  <View style={[S.rowCenter, { marginTop: ms(8) }]}>
                    <Text
                      style={{ color: color.error[500], marginLeft: ms(4) }}>
                      {error.message}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>

            <DateTimePickerModal
              mode={mode}
              isVisible={isDatePickerVisible}
              date={value || undefined}
              onConfirm={date => {
                hideDatePicker();
                onChange(date);
              }}
              locale={'vi'}
              onCancel={hideDatePicker}
              maximumDate={maximumDate}
              minimumDate={minimumDate}
            />
          </>
        );
      }}
    />
  );
};

export default AppDateTimePicker;

const styles = StyleSheet.create({
  inputContainer: {
    minHeight: ms(40),
    borderRadius: ms(8),
    backgroundColor: color.white,
    paddingHorizontal: ms(12),
    paddingVertical: ms(8),
    borderColor: color.gray[300],
    borderWidth: ms(1),
    ...S.rowCenter,
  },
  input: {
    flex: 1,
    padding: 0,
    paddingTop: 0,
    ...TS.textMdRegular,
  },
  dateTimeModal: {
    height: ms(300),
  },
  placeholder: {
    flex: 1,
    padding: 0,
    paddingTop: 0,
    ...TS.textMdRegular,
    color: color.gray[500],
  },
  textError: {
    color: color.error[500],
    marginLeft: ms(4),
  },
});
