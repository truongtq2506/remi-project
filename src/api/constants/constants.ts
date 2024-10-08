import Device from 'react-native-device-info';

export const UNIQUE_ID = Device.getUniqueIdSync();
export const API_VERSION = Device.getVersion();
