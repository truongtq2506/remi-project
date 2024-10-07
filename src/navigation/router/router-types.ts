import { ComponentType } from 'react';

import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { AppRoutesName } from './router-names';

export type IRouteNativeStack = {
  [key: string]: {
    name: keyof typeof AppRoutesName;
    screen: ComponentType<unknown>;
    options?: NativeStackNavigationOptions;
  };
};

export type IRouteTabNavigator = {
  [key: string]: {
    name: string;
    screen: ComponentType<unknown>;
    options?:
      | BottomTabNavigationOptions
      | ((props: {
          route: RouteProp<IRouteTabNavigator, string>;
          navigation: any;
        }) => BottomTabNavigationOptions);
  };
};
