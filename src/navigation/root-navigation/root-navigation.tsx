import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BookingDetailScreen from '@/screens/booking-detail-screen/booking-detail-screen';
import BottomTabNavigation from '../bottom-navigation';
import RouteConfig from '../router/router-config';
import LocalStorage from '@/utils/storage-util';
import { IRouteNativeStack } from '../router/router-types';
import { NAVIGATION_PERSISTENCE_KEY, RootStackParamLists } from './types';
import { useNavigationPersitence, useBackButtonHandler } from '../utils';
import { AppRoutesName } from '../router';

export const AppRootNavigationStack: IRouteNativeStack = {
  [AppRoutesName.BookingDetail]: {
    name: AppRoutesName.BookingDetail,
    screen: BookingDetailScreen,
    options: {
      animation: 'fade',
    },
  },
};

const NativeStack = createNativeStackNavigator<
  RootStackParamLists & typeof AppRootNavigationStack
>();

const RootNavigation = () => {
  const {
    initialNavigationState,
    isRestored: isNavigationStateRestored,
    onNavigationStateChange,
  } = useNavigationPersitence(LocalStorage, NAVIGATION_PERSISTENCE_KEY);

  useBackButtonHandler(routeName => RouteConfig.exitRoutes.includes(routeName));
  if (!isNavigationStateRestored) {
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialNavigationState}
      onStateChange={onNavigationStateChange}>
      <NativeStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'bottomTabNavigator'}>
        {Object.values(AppRootNavigationStack).map((route, index) => (
          <NativeStack.Screen
            key={index}
            name={route.name}
            component={route.screen}
            options={route.options}
          />
        ))}
        <NativeStack.Screen
          name={'bottomTabNavigator'}
          component={BottomTabNavigation}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
