import { createContext, Dispatch } from 'react';
import Snoowrap, { Listing, Submission } from 'snoowrap';

export type ApiOptions = { userAgent: string; clientId: string; clientSecret: string; refreshToken: string };

export class Api {
  private _options: ApiOptions;
  private _r: Snoowrap;

  constructor(options: ApiOptions) {
    this._options = options;
    this._r = new Snoowrap({
      userAgent: options.userAgent,
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      refreshToken: options.refreshToken,
    });
  }

  getHot(): Promise<Listing<Submission>> {
    return this._r.getHot();
  }

  isNewOptions(options: ApiOptions): boolean {
    return (
      options.userAgent !== this._options.userAgent ||
      options.clientId !== this._options.clientId ||
      options.clientSecret !== this._options.clientSecret ||
      options.refreshToken !== this._options.refreshToken
    );
  }
}

export const createApi = (options: ApiOptions): Api => new Api(options);

export const getApiOptionsFromStorage = (): ApiOptions => {
  return {
    userAgent: window.localStorage.getItem('userAgent') ?? '',
    clientId: window.localStorage.getItem('clientId') ?? '',
    clientSecret: window.localStorage.getItem('clientSecret') ?? '',
    refreshToken: window.localStorage.getItem('refreshToken') ?? '',
  };
};

export const storeApiOptionsInStorage = (options: ApiOptions): void => {
  window.localStorage.setItem('userAgent', options.userAgent);
  window.localStorage.setItem('clientId', options.clientId);
  window.localStorage.setItem('clientSecret', options.clientSecret);
  window.localStorage.setItem('refreshToken', options.refreshToken);
};

export const apiReducer = (api: Api, options: ApiOptions): Api => {
  if (api.isNewOptions(options)) {
    storeApiOptionsInStorage(options);
    return createApi(options);
  }
  return api;
};

export const getApiDefaultValue = () => createApi(getApiOptionsFromStorage());

export const ApiContext = createContext<undefined | { api: Api; setApiOptions: Dispatch<ApiOptions> }>(undefined);
