export const PATH = {
  LOGIN: '/authenticate',
  USER_INFO: '/account',

  // đơn hàng
  LIST_SALE_ORDER: '/orderV2',
  CUSTOMER: '/customer',
  CUSTOMER_TYPE: 'customer-type',
  CUSTOMER_GROUPS: 'customer-groups',
  GET_LIST_PRODUCT_BY_STORE: '/warehouse-result/productByStore',
  GET_SHOP: '/shop',
  CREATE_NEW_ORDER: '/order',
  CREATE_NEW_REFUND_ORDER: '/order-exchange-return',
  PRODUCT: '/product',
  ADDRESS: '/address',

  // luân chuyển
  LIST_SHIPMENT_TRANSFER: '/shipping-record',
  UPDATE_SHIPMENT_TRANSFER: '/shipping-record/update',
  GET_LIST_PRODUCT_BY_SHOP: '/warehouse-result',
  GET_LIST_SHOP_BY_USER: '/get-list-shops-by-user-login',
  GET_LIST_STORE_BY_SHOP_USER_MANAGER: '/store/get-stores-by-user-manager',
  GET_LIST_PRODUCT_BY_USER_MANAGER: '/get-warehouse-result-by-user-manager',
  GET_LIST_STORE_BY_SHOP: '/store/list',
  GET_PRODUCT_AMOUNT: 'warehouse-result/amount',
  SHIPMENT_TRANSFER_APPROVER: 'shipping-record/accept',
  SHIPMENT_TRANSFER_UPDATE_IMAGE_STORE_RECEIPT:
    'shipping-record/update-image/store-receipt',

  //kho
  REQUEST_WAREHOUSE: '/request-warehouse',
  REQUEST_UPDATE_WAREHOUSE: '/request-warehouse/update',
  WAREHOUSE_APPROVER: '/request-warehouse/accept',
};
