/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import RootNavigation from '@/navigation/root-navigation';
import { store } from '@/store/store';
import { setNetworkConfig } from '@/api';
import { toastConfig } from '@/components/toast-message';

setNetworkConfig({
  movieUrl: 'https://api.themoviedb.org/3',
  baseUrl: 'https://api.themoviedb.org/3',
  rootUrl: 'https://api.themoviedb.org/3',
  timeoutMs: 60000,
});

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigation />
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
