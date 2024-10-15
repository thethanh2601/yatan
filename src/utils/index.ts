import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/vi';
import { Platform } from 'react-native';
import { KeyStore } from '../constants/keys-storage';

export const Utils = {
  isNumber: (n: any) => {
    return _.isNumber(n);
  },
  isString: (n: any) => {
    return _.isString(n);
  },
  isArray: (n: any) => {
    return _.isArray(n);
  },
  isBoolean: (n: any) => {
    return _.isBoolean(n);
  },
  isInteger: (n: any) => {
    return _.isInteger(n);
  },
  isNull: (n: any) => {
    return _.isNull(n);
  },
  isObject: (n: any) => {
    return _.isObject(n);
  },
  isDate: (n: any) => {
    return _.isDate(n);
  },
  isIOS: () => {
    return Platform.OS === 'ios';
  },
  isAndroid: () => {
    return Platform.OS === 'android';
  },
};

export const setDataStorage = async (
  Key: KeyStore,
  value?: any,
): Promise<boolean> => {
  try {
    if (value) {
      await AsyncStorage.setItem(Key, JSON.stringify(value));
    } else {
      await AsyncStorage.removeItem(Key);
    }
    return true;
  } catch (error) {
    console.error('Error saving data storage');
    return false;
  }
};

export const getDataStorage = async (Key: KeyStore) => {
  try {
    const data = await AsyncStorage.getItem(Key);
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data storage');
  }
};

export const clearAllStorageExceptFCMToken = async () => {
  try {
    const fcmToken = await getDataStorage(KeyStore.FCM_TOKEN);
    await AsyncStorage.clear();
    if (fcmToken !== null) {
      await setDataStorage(KeyStore.FCM_TOKEN, fcmToken);
    }
    return true;
  } catch (error) {
    console.error('Error clearing storage except FCM_TOKEN:', error);
    return false;
  }
};

// export const phoneRegex = /^0((9|8|7|3|5|4)[0-9]{8})$/
export const phoneRegex = /^0([0-9]{9})$/;

const noMoreThanOneCommas = (input: number | string) => {
  const str = input.toString();
  let commasCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.') commasCount++;
    if (commasCount > 1) break;
  }
  return commasCount <= 1;
};

export const insertCommas = (
  input: number | undefined | string,
  decimals: number = 4,
) => {
  if (typeof input === 'undefined') return '';
  if (!noMoreThanOneCommas(input)) return '';
  const parts = input.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (parts[1]) parts[1] = parts[1].substring(0, decimals); // Only take the first 4 decimals
  return parts.join('.');
};

export const unInsertCommas = (input: string) => {
  const parts = input.split('.');
  parts[0] = parts[0].split(',').join('');
  if (parts[1]) parts[1] = parts[1].substring(0, 4); // Only take the first 4 decimals
  return parts.join('.');
};

export const calEffectiveTime = (dateEnd: Date) => {
  const currentDate = moment();
  const difference = moment(dateEnd).unix() - currentDate.unix();

  const seconds = Math.floor(difference % 60);
  const minutes = Math.floor((difference / 60) % 60);
  const hours = Math.floor((difference / (60 * 60)) % 24);
  const days = Math.floor(difference / (60 * 60 * 24));
  return { days, hours, minutes, seconds, difference };
};

export const timeFromNow = (time: string | Date, locale = 'vi') => {
  if (locale === 'vi') {
    return moment(time).locale(locale).fromNow().replace('một', '1');
  }
  return moment(time).locale(locale).fromNow();
};

export const formatBytes = (bytes: number, decimals = 2) => {
  if (!bytes) return '0 B';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

const mimeTypes = Object.freeze({
  allFiles: '*/*',
  audio: 'audio/*',
  csv: 'text/csv',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  images: 'image/*',
  pdf: 'application/pdf',
  plainText: 'text/plain',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  video: 'video/*',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  zip: 'application/zip',
} as const);

const utis = Object.freeze({
  allFiles: 'public.item',
  audio: 'public.audio',
  csv: 'public.comma-separated-values-text',
  doc: 'com.microsoft.word.doc',
  docx: 'org.openxmlformats.wordprocessingml.document',
  images: 'public.image',
  pdf: 'com.adobe.pdf',
  plainText: 'public.plain-text',
  ppt: 'com.microsoft.powerpoint.ppt',
  pptx: 'org.openxmlformats.presentationml.presentation',
  video: 'public.movie',
  xls: 'com.microsoft.excel.xls',
  xlsx: 'org.openxmlformats.spreadsheetml.sheet',
  zip: 'public.zip-archive',
} as const);

export const perPlatformTypes = {
  android: mimeTypes,
  ios: utis,
};
