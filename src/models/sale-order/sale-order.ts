export interface IOrder {
  id: number;
  customer: ICustomer;
  type: string;
  deposit: number;
  total: number;
  orderDetail: IOrderDetail[];
  printed: number;
  exportWarehouse: number;
  estimateTime: string;
  exportWarehouseDate: string;
  createTime: string;
  sum: number;
  discount: number;
  payByCash: number;
  status: string;
  payByTransfer: number;
  payByPos: number;
  cod: number;
  vat: number;
  note: string;
  revenue: number;
  codeOrder: string;
  user: any;
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  image: any;
  quotation: number;
}

export interface ICustomerGroupsRequestDTO {
  id: number;
  name: string;
}

export interface ICustomer {
  id: number;
  name: string;
  address: string;
  dob: string;
  phone: string;
  isCD: any;
  otherPhone: string;
  customerGroup: ICustomerGroup;
  ward: any;
  district: any;
  province: any;
  active: string;
  customerLevel: ICustomerLevel | undefined;
  customerGroupsRequestDTO?: ICustomerGroupsRequestDTO;
}

export interface ICustomerType {
  id: number;
  type: string;
  maxRevenue: number;
  minRevenue: number;
  customerGroups: ICustomerGroup;
  sustainedRevenue: number;
  customerBenefit?: string;
}

export interface ICustomerGroup {
  id: number;
  name: string;
  isShow: any;
}

export interface ICustomerLevel {
  id: number;
  type: string;
  maxRevenue: number;
  minRevenue: number;
  customerGroups: ICustomerGroup;
}

export interface IOrderDetail {
  id: number;
  product: IProduct;
  amount: number;
  cost: number;
  note: string;
  discount: number;
  store: IStoreTransfer;
  type: any;
  amountProductShop?: number;
  amountProductStore?: number;
  storeAmounts?: IStore[];
}

export interface IShape {
  id: number;
  name: string;
  description: string;
  active: string;
}

export interface IGallery {
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  name: string;
  description: string;
  image: string;
  status: string;
}

export interface IProduct {
  createdBy: string;
  createdDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  code: string;
  name: string;
  description: string;
  image: string;
  sizeProduct: string;
  radius: string;
  counterView: number;
  otherSize: string;
  shape: IShape;
  methodShape: string;
  galleries: IGallery[];
  prices: IPrice[];
  unit: string;
  embossed: number;
  isEmboss: number;
  active: string;
  sizeDemo: string;
  meaning: string;
  userDesign: IUserDesign;
  userResult: any;
  userRaw: any;
  isPhoi: any;
  trunkDiameter: string;
  bottomDiameter: string;
  avatar: any;
  productCategory: any;
  uploadWeb: number;
  amount: number;
}

export interface IUserDesign {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  email: string | null;
  activated: boolean;
  deleted: boolean;
  langKey: string;
  imageUrl: string | null;
  phone: string | null;
  dob: string | null;
  gender: string | null;
  province: string | null;
  ward: string | null;
  district: string | null;
  address: string | null;
  jobTitle: string | null;
  fcmToken: string | null;
  salary: number;
  bonusResponsibility: string | null;
  resetDate: string;
}

export interface IPrice {
  id: number;
  customerGroups: {
    id: number;
    name: string;
    isShow: any;
  };
  cost: number;
}

export interface IShop {
  id: number;
  name: string;
  address: string;
  status: string;
}

export interface IStore {
  store: {
    id: number;
    name: string;
    address: string;
    shop: IShop;
    status: string;
  };
  amount: number;
}

export interface IProductByStore {
  product: IProduct;
  shop: IShop;
  stores: IStore[];
  amount: number;
}

export interface IStoreTransfer {
  id: number;
  name: string;
  address: string;
  shop: IShop;
  status: string;
}
