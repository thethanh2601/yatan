import { KeyStore } from '../../constants/keys-storage';
import { AppRequest, PATH, api } from '../../services/api';
import { setDataStorage } from '../../utils';

interface ILoginRequest {
  username: string;
  password: string;
  rememberMe: boolean;
}

export class AuthenticationClass {
  userToken: string | undefined;
  constructor() {
    this.userToken = undefined;
  }
  async login(params: ILoginRequest) {
    return await AppRequest.post<{ id_token: string }>(PATH.LOGIN, params);
  }

  async setAccessToken(userToken: string): Promise<boolean> {
    this.userToken = userToken;
    api.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
    const status = await setDataStorage(KeyStore.USER_TOKEN, userToken);
    return status;
  }
}

export const Authentication = new AuthenticationClass();
