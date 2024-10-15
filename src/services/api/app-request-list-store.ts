import { action, computed, makeObservable, observable } from 'mobx';
import { IParamsRequestList, TRequestState } from '../../constants/services';
import { pickBy } from 'lodash';
import { _AppRequest } from './app-request';

export class AppRequestListStore<T> extends _AppRequest {
  url: string;
  page: number;
  totalPage: number;
  listData: T[] | undefined;
  paramsCache: Omit<IParamsRequestList, 'page'>;
  loading: boolean;

  constructor(url: string) {
    super();
    this.listData = undefined;
    this.page = 0;
    this.totalPage = 1;
    this.url = url;
    this.loading = false;

    this.paramsCache = {};
    makeObservable(this, {
      listData: observable,
      paramsCache: observable,
      loading: observable,
      getListData: action,
      setListData: action,
      setParamsCache: action,
      setLoading: action,
    });
  }

  async getListData(
    isRefresh: boolean,
    params?: Omit<IParamsRequestList, 'page'>,
  ) {
    try {
      if (this.loading) return;
      this.setLoading(true);
      if (isRefresh) {
        this.listData = [];
        this.page = 0;
        this.totalPage = 1;
      }
      if (this.page > this.totalPage) return;
      const newParams: IParamsRequestList = {
        size: 10,
        ...(params ||
          this.paramsCache) /* if input without params, use paramsCache */,
        page: this.page++,
      }; // size!
      const dataResponse = await this.get<T[]>(
        this.url,
        /* The purpose of this code is to filter an object (newParams)
         by removing key-value pairs where the value is either 'undefined' or 'null'.*/
        pickBy(newParams, value => value !== undefined || null),
      );
      const items = dataResponse.data;
      const totalItem =
        dataResponse.headers['x-total-count']; /* get total from header*/
      this.totalPage = Math.ceil(
        totalItem / (newParams.size! - 1),
      ); /*minus 1 because page start form 0*/
      if (items.length) {
        // this.setState('success');
        this.setParamsCache(newParams);
        if (isRefresh) {
          this.setListData(items);
          return;
        }
        /* If it is not refreshed, it must have data */
        this.setListData([...this.listData!, ...items]);
      }
    } catch (error: any) {
      throw error;
    } finally {
      this.setLoading(false);
    }
  }

  setListData(data: T[]) {
    this.listData = data;
  }

  setLoading(status: boolean) {
    this.loading = status;
  }

  setParamsCache(params: Omit<IParamsRequestList, 'page'>) {
    this.paramsCache = params;
  }
}
