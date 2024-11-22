import {
  createNavigationContainerRef,
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import LoginScreen from '../screens/auth/login-screen';

import DashboardScreen from '../screens/home/dashboard-screen';
import CameraScreen from '../screens/home/camera-screen';
import ForgotPasswordScreen from '../screens/auth/forgot-password-screen';
import NotificationScreen from '../screens/notification/notification-screen';
import TaskListScreen from '../screens/task-list-screen';
import FriendScreen from '../screens/friend/friend-screen';
import profileScreen from '../screens/profile/profile-screen';
import MessengerScreeen from '../screens/messenger/messenger-screeen';
import InboxScreen from '../screens/messenger/inbox-screen';

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>();

export type AppStackParamList = {
  LoginScreen: undefined;
  DashboardScreen: undefined;
  FriendScreen: undefined;
  CameraScreen: undefined;
  ForgotPasswordScreen: undefined;
  NotificationScreen: undefined;
  TaskListScreen: undefined;
  ProfileScreen: { profileId: string };
  MessengerScreeen: undefined;
  InboxScreen: { inboxId: string };
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export const Navigation = ({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) => {
  const navigationRef = createNavigationContainerRef();
  const routeNameRef = React.useRef<string>();
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      ref={navigationRef}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef?.getCurrentRoute()?.name;
        if (previousRouteName !== currentRouteName) {
          console.log('Current route: ', currentRouteName);
        }
      }}>
      <StatusBar style="light" />
      <AppStack />
    </NavigationContainer>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'LoginScreen'}>
      {/* Stack */}
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
      <Stack.Screen name={'DashboardScreen'} component={DashboardScreen} />
      <Stack.Screen name={'ProfileScreen'} component={profileScreen} />
      <Stack.Screen name={'FriendScreen'} component={FriendScreen} />
      <Stack.Screen name={'CameraScreen'} component={CameraScreen} />
      <Stack.Screen
        name={'ForgotPasswordScreen'}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={'NotificationScreen'}
        component={NotificationScreen}
      />
      <Stack.Screen name={'MessengerScreeen'} component={MessengerScreeen} />
      <Stack.Screen name={'InboxScreen'} component={InboxScreen} />
      <Stack.Screen name={'TaskListScreen'} component={TaskListScreen} />
    </Stack.Navigator>
  );
};
