import React, { forwardRef, Ref, useState } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { AlertCircle, Eye, EyeOff } from '../../../assets/icons';
import { S } from '../../themes/app-style';
import { color } from '../../themes/colors';
import { ms } from '../../themes/platform';
import { TS } from '../../themes/text-style';
import { insertCommas, unInsertCommas } from '../../utils';

export interface IAppInputProps extends TextInputProps {
  label?: string;
  name: string;
  type?: string;
  unit?: string;
  title?: string;
  disable?: boolean;
  showError?: boolean;
  placeholder?: string;
  errorMessage?: string;
  inputContainerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  containerStyle?: ViewStyle;
  control: Control<FieldValues, any> | any;
  helpText?: string;
  showCommas?: boolean;
  require?: boolean;
  titleStyle?: TextStyle;
  size?: 40 | number;
}

export const AppInput = forwardRef(
  (props: IAppInputProps, ref: Ref<TextInput>) => {
    const [focus, setFocus] = useState<boolean>(false);
    const {
      unit,
      name,
      type,
      title,
      control,
      disable,
      helpText,
      leftIcon,
      rightIcon,
      inputContainerStyle,
      inputStyle,
      placeholder,
      containerStyle,
      showError = true,
      showCommas = false,
      require = false,
      titleStyle,
      multiline,
      size = 40,
    } = props;
    const isPassword = type === 'password';
    const [showPassword, setShowPassword] = useState(false);

    const renderRightIcon = () => {
      if (isPassword) {
        return (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(pre => !pre);
            }}
            style={{ marginLeft: ms(4) }}>
            {showPassword ? (
              <EyeOff color={color.gray[300]} height={ms(20)} width={ms(20)} />
            ) : (
              <Eye color={color.gray[300]} height={ms(20)} width={ms(20)} />
            )}
          </TouchableOpacity>
        );
      }
      return null;
    };

    return (
      <Controller
        control={control}
        name={name}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <View style={containerStyle}>
            {title ? (
              <View style={[S.rowCenter, { gap: ms(4) }]}>
                <Text style={[styles.title, titleStyle]}>{title}</Text>
                {require && <Text style={styles.require}>*</Text>}
              </View>
            ) : null}
            <View
              style={[
                styles.inputContainer,
                {
                  height: ms(size),
                  borderRadius: ms(8),
                },
                focus
                  ? {
                      borderColor: color.gray[100],
                      backgroundColor: color.gray[700],
                    }
                  : null,
                error ? { borderColor: color.error[500] } : null,
                // disable ? { backgroundColor: color.gray[50] } : null,
                // unit ? { paddingHorizontal: 0, paddingVertical: 0 } : null,
                disable
                  ? {
                      borderColor: color.gray[800],
                      backgroundColor: color.gray[900],
                    }
                  : null,
                inputContainerStyle,
              ]}>
              {leftIcon}
              <TextInput
                {...props}
                style={[
                  styles.input,
                  { height: ms(size) },
                  // unit
                  //   ? { paddingHorizontal: ms(8), paddingVertical: ms(12) }
                  //   : null,
                  inputStyle,
                  multiline
                    ? { textAlignVertical: 'top', paddingTop: ms(12) }
                    : null,
                  disable ? { color: color.gray[500] } : null,
                ]}
                onChangeText={e => {
                  onChange(showCommas ? unInsertCommas(e) : e);
                }}
                value={
                  showCommas
                    ? insertCommas(value?.toString())
                    : value?.toString()
                }
                editable={!disable}
                secureTextEntry={isPassword && !showPassword}
                placeholder={placeholder || ''}
                onBlur={() => {
                  onBlur();
                  setFocus(false);
                }}
                onFocus={() => {
                  setFocus(true);
                }}
                placeholderTextColor={
                  disable ? color.gray[500] : color.gray[400]
                }
                ref={ref}
                cursorColor={color.primary[600]}
              />
              {rightIcon}
              {/* {showError && error && (
                <AlertCircle
                  height={ms(20)}
                  width={ms(20)}
                  color={color.error[500]}
                />
              )} */}
              {renderRightIcon()}

              {unit ? (
                <View style={[styles.unitContainer]}>
                  <Text style={[TS.textSmSemibold, { color: color.gray[100] }]}>
                    {unit}
                  </Text>
                </View>
              ) : null}
            </View>
            {helpText ? <Text style={styles.helpText}>{helpText}</Text> : null}
            <View>
              {showError && error && (
                <View style={[S.rowCenter, { marginTop: ms(8) }]}>
                  <Text style={{ color: color.error[500] }}>
                    {error.message}
                  </Text>
                </View>
              )}
            </View>
          </View>
        )}
      />
    );
  },
);

const styles = StyleSheet.create({
  inputContainer: {
    ...S.rowCenter,
    borderRadius: ms(16),
    backgroundColor: color.gray[800],
    paddingHorizontal: ms(16),
    borderColor: color.gray[700],
    borderWidth: ms(1),
  },
  input: {
    ...S.flex1,
    ...TS.textMdMedium,
    color: color.gray[50],
  },
  title: {
    ...TS.textSmMedium,
    color: color.gray[100],
    marginBottom: ms(8),
  },
  unitContainer: {
    ...S.rowCenter,
    height: '100%',
    marginLeft: ms(8),
  },
  helpText: {
    ...TS.textXs,
    color: color.gray[600],
    marginTop: ms(6),
  },
  require: {
    ...TS.textMdMedium,
    color: color.error[500],
    marginBottom: ms(8),
  },
});
