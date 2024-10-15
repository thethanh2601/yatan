import { extend } from 'lodash';
import { AppRequestListStore } from '../../services/api/app-request-list-store';
import { IOrder } from './sale-order';
import { PATH } from '../../services/api';

export class SaleOderClass extends AppRequestListStore<IOrder> {
  constructor(url: string) {
    super(url);
  }
}

export const SaleOder = new SaleOderClass(PATH.LIST_SALE_ORDER);
