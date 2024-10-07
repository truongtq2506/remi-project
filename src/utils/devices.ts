import { Platform, Dimensions } from 'react-native';

export const isIOS = () => Platform.OS === 'ios';

export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;
