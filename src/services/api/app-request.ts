import { AxiosInstance, AxiosResponse } from 'axios';
import { TParams } from '../../constants/services';
import { api, apiUploadFile } from './api-service';

export class _AppRequest {
  api: AxiosInstance;
  apiUploadFile: AxiosInstance;
  abortController: AbortController;
  constructor() {
    this.api = api;
    this.apiUploadFile = apiUploadFile;
    this.abortController = new AbortController();
  }

  async post<R>(url: string, params: TParams): Promise<AxiosResponse<R, any>> {
    try {
      const signal = this.abortController.signal;
      const response: AxiosResponse<R> = await this.api.post(url, params, {
        signal,
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async put<R>(url: string, params: TParams): Promise<AxiosResponse<R, any>> {
    try {
      const signal = this.abortController.signal;
      const response: AxiosResponse<R> = await this.api.put(url, params, {
        signal,
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async get<R>(url: string, params: TParams): Promise<AxiosResponse<R, any>> {
    try {
      const signal = this.abortController.signal;
      const response: AxiosResponse<R> = await this.api.get(url, {
        params,
        signal,
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async uploadFile<R>(
    url: string,
    params: any,
  ): Promise<AxiosResponse<R, any>> {
    try {
      const signal = this.abortController.signal;
      const response: AxiosResponse<R> = await this.api.post(url, params, {
        signal,
      });
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  abortRequest() {
    this.abortController.abort();
  }
}

export const AppRequest = new _AppRequest();
