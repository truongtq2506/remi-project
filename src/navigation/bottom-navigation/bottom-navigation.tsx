import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '@/screens/home-screen';
import FavouriteScreen from '@/screens/favourite-screen';
import bookingScreen from '@/screens/booking-screen';
import { IRouteTabNavigator } from '../router/router-types';
import { AppRoutesName } from '../router';
import { ScreenOptionBottomTabNavigationOptions } from '../utils';
import {
  SvgHomeIconSelected,
  SvgBookingIconSelected,
  SvgBookingIconUnSelected,
  SvgFavouriteIconSelected,
  SvgFavouriteIconUnSelected,
  SvgHomeIconUnSelected,
} from '@/assets/svgs';
import { SvgIcon } from '@/components/svg-icon';
import { ColorValue } from 'react-native';
import TabLabel from './tab-label';
import TabBarIcon from './tab-icon';

const BottomTab = createBottomTabNavigator<typeof BottomTabRoutesStack>();

export const TabBarLabel = {
  Home: 'Home',
  Favourite: 'Favourite',
  Booking: 'Booking',
};

export const TabBarIconSvg = {
  Home: {
    selectedIcon: SvgHomeIconSelected,
    unSelectedIcon: SvgHomeIconUnSelected,
  },
  Favourite: {
    selectedIcon: SvgFavouriteIconSelected,
    unSelectedIcon: SvgFavouriteIconUnSelected,
  },

  Booking: {
    selectedIcon: SvgBookingIconSelected,
    unSelectedIcon: SvgBookingIconUnSelected,
  },
};

const renderTabBarIcon =
  ({
    selectedIcon,
    unSelectedIcon,
  }: {
    selectedIcon: SvgIcon;
    unSelectedIcon: SvgIcon;
  }) =>
  ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: ColorValue;
    size: number;
  }) =>
    (
      <TabBarIcon
        focused={focused}
        color={color}
        selectedIcon={selectedIcon}
        unSelectedIcon={unSelectedIcon}
        size={size}
      />
    );

const renderTabBarLabel =
  (title: string) =>
  ({ focused }: { focused: boolean }) =>
    <TabLabel title={title} focused={focused} />;

export const BottomTabRoutesStack: IRouteTabNavigator = {
  [AppRoutesName.TabHome]: {
    name: TabBarLabel.Home,
    screen: HomeScreen,
    options: {
      tabBarIcon: renderTabBarIcon(TabBarIconSvg.Home),
      tabBarLabel: renderTabBarLabel(TabBarLabel.Home),
      tabBarTestID: 'tab-home',
    },
  },
  [AppRoutesName.TabFavourite]: {
    name: TabBarLabel.Favourite,
    screen: FavouriteScreen,
    options: {
      tabBarIcon: renderTabBarIcon(TabBarIconSvg.Favourite),
      tabBarLabel: renderTabBarLabel(TabBarLabel.Favourite),
      tabBarTestID: 'tab-favourite',
    },
  },
  [AppRoutesName.TabBooking]: {
    name: TabBarLabel.Booking,
    screen: bookingScreen,
    options: {
      tabBarIcon: renderTabBarIcon(TabBarIconSvg.Booking),
      tabBarLabel: renderTabBarLabel(TabBarLabel.Booking),
      tabBarTestID: 'tab-booking',
    },
  },
};

const BottomTabNavigation = () => (
  <BottomTab.Navigator
    initialRouteName={AppRoutesName.TabHome}
    screenOptions={ScreenOptionBottomTabNavigationOptions}>
    {Object.values(BottomTabRoutesStack).map((route, index) => (
      <BottomTab.Screen
        key={index}
        name={route.name}
        component={route.screen}
        options={route.options}
      />
    ))}
  </BottomTab.Navigator>
);

export default BottomTabNavigation;
