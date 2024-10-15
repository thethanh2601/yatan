import axios, { InternalAxiosRequestConfig } from 'axios';
import { DEFAULT_API_CONFIG } from './api-config';
import NetInfo from '@react-native-community/netinfo';
import { KeyStore } from '../../constants/keys-storage';
import { getDataStorage } from '../../utils';

// Create a new instance of Axios
export const api: any = axios.create({
  baseURL: DEFAULT_API_CONFIG.url,
  timeout: DEFAULT_API_CONFIG.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiUploadFile = axios.create({
  baseURL: DEFAULT_API_CONFIG.url,
  timeout: DEFAULT_API_CONFIG.timeout,
  headers: {
    'content-type': 'multipart/form-data',
  },
});

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    const isConnected = await NetInfo.fetch().then(state => state.isConnected);
    if (!isConnected) {
      throw new Error('No internet connection');
    }
    // Add authorization header if token is available
    const token = await getDataStorage(KeyStore.USER_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
);

apiUploadFile.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    const isConnected = await NetInfo.fetch().then(state => state.isConnected);
    if (!isConnected) {
      throw new Error('No internet connection');
    }
    // Add authorization header if token is available
    const token = await getDataStorage(KeyStore.USER_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
);
