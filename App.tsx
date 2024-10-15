import { PortalProvider } from '@gorhom/portal';
import { useNetInfo } from '@react-native-community/netinfo';
import React, { useEffect } from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { useCachedResources, useColorScheme } from './src/hooks';
import { Navigation } from './src/navigation';
import { toastConfig, ToastService } from './src/services/toast/toast-service';
import './ReactotronConfig';
import { ErrorBoundary } from './src/error/error-boundary';

export default function App() {
  const colorScheme = useColorScheme();
  const isLoadingComplete = useCachedResources();
  const { isConnected } = useNetInfo();
  useEffect(() => {
    if (!isConnected) {
      ToastService.showError('No network connection');
    }
  }, [isConnected]);
  if (!isLoadingComplete) return null;
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.AndroidSafeArea}>
        <ErrorBoundary>
          <PortalProvider>
            <Navigation colorScheme={colorScheme} />
          </PortalProvider>
        </ErrorBoundary>
        <Toast config={toastConfig} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
