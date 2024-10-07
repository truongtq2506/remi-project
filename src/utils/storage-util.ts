import { MMKV } from 'react-native-mmkv';

const Storage = new MMKV();

export const ReactotronMMKVConfig = {
  storage: Storage,
  ignore: ['secret'],
};

type StorageType = 'number' | 'boolean' | 'string';

type StorageReturnType<T extends StorageType | undefined> = T extends 'number'
  ? number
  : T extends 'boolean'
  ? boolean
  : T extends 'string'
  ? string
  : T extends undefined
  ? string
  : null;

export const getItem = <T extends StorageType | undefined>(
  key: string,
  type?: T,
): StorageReturnType<T> => {
  try {
    switch (type) {
      case 'number':
        return Storage.getNumber(key) as StorageReturnType<T>;
      case 'boolean':
        return Storage.getBoolean(key) as StorageReturnType<T>;
      default:
        return Storage.getString(key) as StorageReturnType<T>;
    }
  } catch (error) {}
  return null as StorageReturnType<T>;
};

export const setItem = (key: string, value: string | boolean | number) => {
  try {
    Storage.set(key, value);
    return true;
  } catch (error) {}
  return false;
};

export const removeItem = (key: string) => {
  try {
    Storage.delete(key);
    return true;
  } catch (error) {}
  return false;
};

export default {
  setItem,
  getItem,
  removeItem,
};
