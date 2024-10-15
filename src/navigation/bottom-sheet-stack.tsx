import {
  BottomTabScreenProps,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Menu, MenuFill } from '../../assets/icons';
import DashboardScreen from '../screens/dashboard-screen';
import { color, ms, S, TS } from '../themes';
import { AppStackParamList, AppStackScreenProps } from './navigation';

export type TabParamList = {
  DashboardScreen: undefined;
  NotificationScreen: undefined;
  UserInfoScreen: undefined;
};

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>;

const Tab = createBottomTabNavigator<TabParamList>();

interface TabBarIconProps {
  focused: boolean;
  icon?: React.FC<SvgProps>;
  iconFocused?: React.FC<SvgProps>;
  iconUnfocused?: React.FC<SvgProps>;
  title?: string;
  titleStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

export const TabBarIcon = (props: TabBarIconProps) => {
  const styles = StyleSheet.create({
    tabBarIconContainer: {
      ...S.centerAll,
      ...props.containerStyle,
    },
    tabBarTitle: {
      ...TS.textXsMedium,
      color: props.focused ? color.primary[500] : color.gray[500],
      ...props.titleStyle,
    },
  });

  const IconFocused = props.iconFocused || props.icon || View;
  const IconUnfocused = props.iconUnfocused || props.icon || View;

  const icon = props.focused ? (
    <IconFocused color={color.primary[500]} style={{ marginVertical: ms(4) }} />
  ) : (
    <IconUnfocused color={color.gray[500]} style={{ marginVertical: ms(4) }} />
  );
  const title = props.title ? (
    <Text style={styles.tabBarTitle}>{props.title}</Text>
  ) : (
    <View />
  );

  return (
    <View style={styles.tabBarIconContainer}>
      {icon}
      {title}
    </View>
  );
};

export const BottomSheetStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          minHeight: ms(64),
          backgroundColor: color.white,
        },
        tabBarItemStyle: {
          height: ms(48),
          marginVertical: ms(8),
        },
        tabBarIconStyle: {
          flex: 1,
        },
      }}>
      <Tab.Screen
        component={DashboardScreen}
        name={'DashboardScreen'}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              iconFocused={MenuFill}
              iconUnfocused={Menu}
              title="Trang chủ"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
