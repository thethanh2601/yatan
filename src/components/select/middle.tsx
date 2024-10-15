import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef } from 'react';

import { BottomSheetApp, BottomSheetAppRef } from '../bottom-sheet-app';
import RadioCheckboxUnchecked from '../../../assets/icons/radio-checkbox-unchecked';
import RadioCheckboxChecked from '../../../assets/icons/radio-checkbox-checked';
import { Portal } from '@gorhom/portal';
import { S, TS, color, ms } from '../../themes';
import { ChevronDown } from '../../../assets/icons';
import { IPropsMiddleAppSelect, ISelectItem } from '.';

const { width, height } = Dimensions.get('window');
const MiddleAppSelect = (props: IPropsMiddleAppSelect) => {
  const refBottomSheet = useRef<BottomSheetAppRef>();
  const {
    data,
    value,
    title,
    error,
    child,
    disable,
    iconLeft,
    loading,
    onchange,
    onSelect,
    emptyData,
    inputStyle,
    placeholder,
    onEndReached,
    containerStyle,
    placeholderStyle,
  } = props;

  const renderEmptyDefault = <Text>No Option</Text>;
  const leftIcon = props.iconLeft ? props.iconLeft : <View />;

  const itemRender = (item: ISelectItem, index: number) => {
    return (
      <TouchableOpacity
        key={item.key}
        onPress={() => {
          onchange(item);
          onSelect?.(item);
          refBottomSheet.current?.close();
        }}>
        <View style={[styles.item]}>
          <Text numberOfLines={1} style={[S.flex1, { marginRight: ms(16) }]}>
            {item.label}
          </Text>
          {item.key === value?.key ? (
            <RadioCheckboxChecked color={color.primary[500]} />
          ) : (
            <RadioCheckboxUnchecked />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <TouchableOpacity
        disabled={disable}
        onPress={() => {
          refBottomSheet.current?.show();
        }}>
        <View
          style={[
            styles.inputContainer,
            containerStyle,
            { backgroundColor: disable ? color.gray[900] : color.gray[800] },
          ]}>
          {leftIcon}
          {value ? (
            <Text numberOfLines={1} style={[styles.input, inputStyle]}>
              {value?.label}
            </Text>
          ) : (
            <Text style={[styles.placeholder, placeholderStyle]}>
              {placeholder}
            </Text>
          )}
          <ChevronDown style={styles.arrowDown} />
        </View>
      </TouchableOpacity>
      <View>
        {error && (
          <View style={[S.row, { margin: ms(8) }]}>
            <Text style={styles.textError}>{error.message}</Text>
          </View>
        )}
      </View>
      <Portal>
        <BottomSheetApp
          withoutPortal
          enableHeader={props.enableHeader}
          title={props.title}
          ref={refBottomSheet}
          initialSnapPoints={['CONTENT_HEIGHT']}>
          {child}
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
      </Portal>
    </View>
  );
};

export default MiddleAppSelect;

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: ms(8),
    backgroundColor: color.white,
    paddingHorizontal: ms(12),
    paddingVertical: ms(8),
    ...S.rowCenter,
    borderColor: color.gray[700],
    borderWidth: ms(1),
  },
  input: {
    flex: 1,
    padding: 0,
    paddingTop: 0,
    marginLeft: ms(8),
    ...TS.textSmMedium,
    color: color.gray[400],
  },
  placeholder: {
    flex: 1,
    padding: 0,
    paddingTop: 0,
    marginLeft: ms(8),
    ...TS.textSmMedium,
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
    borderRadius: ms(8),
    marginVertical: ms(8),
  },

  arrowDown: {
    marginHorizontal: ms(4),
  },
  textError: {
    color: color.error[500],
    marginLeft: ms(4),
  },
  title: {
    ...TS.textSmMedium,
    color: color.gray[100],
    marginBottom: ms(6),
  },
});
