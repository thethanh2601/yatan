export type TParams = Record<string, any>;
export interface IParamsRequestList extends TParams {
  page: number;
  size?: number;
}
export type TRequestState =
  | 'idle'
  | 'loading'
  | 'error'
  | 'network_error'
  | 'success';
