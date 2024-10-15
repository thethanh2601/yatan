import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { useRef } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import CloseTag from '../../../assets/icons/close-tag';
import ChevronDown from '../../../assets/icons/chevron-down';
import CheckboxChecked from '../../../assets/icons/checkbox-checked';
import CheckboxUnchecked from '../../../assets/icons/checkbox-unchecked';
import { Control, FieldError, FieldValues } from 'react-hook-form';
import { S, TS, color, ms } from '../../themes';
import { ISelectItem } from '../select';
import { BottomSheetApp, BottomSheetAppRef } from '../bottom-sheet-app';

export interface IPropsAppMultiSelect {
  placeholder?: string;
  label?: string;
  containerStyle?: ViewStyle;
  selectedContainerStyle?: ViewStyle;
  placeholderStyle?: TextStyle;
  errorMessage?: string;
  disable?: boolean;
  title?: string;
  control: Control<FieldValues, any> | any;
  name: string;
  data: ISelectItem[];
  emptyData?: JSX.Element;
  enableHeader?: boolean;
  loading?: boolean;
  onEndReached?: () => void;
}

export interface IPropsMiddleAppMultiSelect
  extends Omit<IPropsAppMultiSelect, 'name' | 'control'> {
  value?: ISelectItem[];
  onchange: (...event: any[]) => void;
  error?: FieldError;
}

const { width, height } = Dimensions.get('window');
const MiddleAppMultiSelect = (props: IPropsMiddleAppMultiSelect) => {
  const refBottomSheet = useRef<BottomSheetAppRef>();
  const {
    data,
    value,
    error,
    title,
    loading,
    disable,
    onchange,
    emptyData,
    placeholder,
    containerStyle,
    placeholderStyle,
    selectedContainerStyle,
    onEndReached,
  } = props;

  const renderEmptyDefault = <Text>No Option</Text>;
  const removeItem = (item: ISelectItem) => {
    if (value?.length) {
      const _value = value.filter(element => element.key !== item.key);
      onchange(_value);
    }
  };

  const itemRender = (item: ISelectItem, index: number) => {
    const available = value?.length
      ? value.find(element => element.key === item.key)
      : undefined;
    return (
      <TouchableOpacity
        key={item.key}
        onPress={() => {
          if (value?.length) {
            if (available) return;
            onchange([...value, item]);
          } else {
            onchange([item]);
          }
        }}>
        <View style={[styles.item]}>
          <Text>{item.label}</Text>
          {available ? (
            <CheckboxChecked height={ms(20)} width={ms(20)} />
          ) : (
            <CheckboxUnchecked height={ms(20)} width={ms(20)} />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <TouchableOpacity
        disabled={disable}
        onPress={() => {
          refBottomSheet.current?.show();
        }}>
        <View style={[styles.inputContainer, containerStyle]}>
          <Text style={[styles.placeholder, placeholderStyle]}>
            {placeholder}
          </Text>
          <ChevronDown style={styles.arrowDown} />
        </View>
      </TouchableOpacity>
      {value?.length ? (
        <View style={[styles.itemSelectedContainer, selectedContainerStyle]}>
          {value.map((item, _) => {
            return (
              <View key={item.key} style={[styles.itemSelected]}>
                <Text style={[styles.itemText]}>{item.label}</Text>
                <TouchableOpacity onPress={() => removeItem(item)}>
                  <CloseTag />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      ) : null}
      <View>
        {error && (
          <View style={[S.row, { margin: ms(8) }]}>
            {/* <ErrorMessage height={ms(14)} width={ms(14)} /> */}
            <Text style={styles.textError}>{error.message}</Text>
          </View>
        )}
      </View>

      <BottomSheetApp
        enablePanDownToClose={false}
        enableHeader={props.enableHeader}
        title={props.title}
        ref={refBottomSheet}
        initialSnapPoints={['CONTENT_HEIGHT']}>
        <FlatList
          style={[styles.listView, styles.itemContainer]}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) => itemRender(item, index)}
          onEndReached={() => {
            if (onEndReached) onEndReached();
          }}
          onEndReachedThreshold={0.7}
          refreshing={loading}
          ListEmptyComponent={emptyData || renderEmptyDefault}
          ListFooterComponent={
            loading ? <ActivityIndicator color={color.primary[500]} /> : null
          }
        />
      </BottomSheetApp>
    </>
  );
};

export default MiddleAppMultiSelect;

const styles = StyleSheet.create({
  inputContainer: {
    minHeight: ms(44),
    borderRadius: ms(8),
    backgroundColor: color.white,
    paddingHorizontal: ms(12),
    ...S.rowCenter,
    borderColor: color.gray[300],
    borderWidth: ms(1),
  },
  input: {
    flex: 1,
    padding: 0,
    paddingTop: 0,
    ...TS.textMdMedium,
    color: color.gray[400],
  },
  placeholder: {
    flex: 1,
    padding: 0,
    paddingTop: 0,
    ...TS.textMdMedium,
    color: color.gray[400],
  },
  listView: {
    maxHeight: (height * 75) / 100,
  },
  itemContainer: {
    marginVertical: ms(14),
    marginHorizontal: ms(12),
    marginBottom: ms(30),
  },
  item: {
    ...S.rowCenterSpaceBetween,
    paddingHorizontal: ms(8),
    paddingVertical: ms(8),
    borderRadius: ms(8),
    marginVertical: ms(8),
  },
  arrowDown: {
    marginHorizontal: ms(4),
  },
  itemSelectedContainer: {
    minHeight: ms(72),
    flexWrap: 'wrap',
    ...S.rowCenter,
    marginTop: ms(8),
  },
  itemSelected: {
    margin: ms(4),
    paddingHorizontal: ms(6),
    paddingVertical: ms(4),
    borderRadius: ms(8),
    backgroundColor: color.white,
    ...S.rowCenterSpaceBetween,
    alignSelf: 'flex-start',
    borderColor: color.gray[300],
    borderWidth: ms(1),
  },
  itemText: {
    ...TS.textMdMedium,
    color: color.gray[900],
    marginRight: ms(8),
  },
  textError: {
    color: color.error[500],
    marginLeft: ms(4),
  },
  title: {
    ...TS.textSmMedium,
    marginBottom: ms(6),
    color: color.gray[700],
  },
});
