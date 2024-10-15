export const API_URL = ''; // DEV

export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string;
  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number;
}
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URL,
  timeout: 60000,
};
export type IMethod =
  | 'request'
  | 'get'
  | 'delete'
  | 'head'
  | 'options'
  | 'post'
  | 'put'
  | 'patch'
  | 'postForm'
  | 'putForm'
  | 'patchForm';
