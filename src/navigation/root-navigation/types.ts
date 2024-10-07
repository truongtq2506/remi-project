import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamLists = {
  bottomTabNavigator:
    | {
        screen?: string;
      }
    | undefined;
  BookingDetail: { movieId?: string } | undefined;
};

export type HomeStackNavigationProps =
  NativeStackNavigationProp<RootStackParamLists>;

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';
