import React from 'react';
import { Control, Controller, FieldError, FieldValues } from 'react-hook-form';
import MiddleAppSelect from './middle';
import { ViewStyle, TextStyle } from 'react-native';

export interface IPropsAppSelect {
  placeholder?: string;
  label?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  placeholderStyle?: TextStyle;
  errorMessage?: string;
  disable?: boolean;
  control: Control<FieldValues, any> | any;
  name: string;
  data: ISelectItem[];
  emptyData?: JSX.Element;
  title?: string;
  onSelect?: (item: ISelectItem) => void;
  enableHeader?: boolean;
  loading?: boolean;
  onEndReached?: () => void;
  child?: JSX.Element;
  iconLeft?: JSX.Element;
}

export interface IPropsMiddleAppSelect
  extends Omit<IPropsAppSelect, 'name' | 'control'> {
  value?: ISelectItem;
  onchange: (...event: any[]) => void;
  error?: FieldError;
}

export interface ISelectItem {
  key: string | number;
  value: any;
  label: string;
}

export const AppSelect = (props: IPropsAppSelect) => {
  const { control, name, ...PROPS } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <MiddleAppSelect
            {...PROPS}
            onchange={onChange}
            value={value}
            error={error}
          />
        );
      }}
    />
  );
};
