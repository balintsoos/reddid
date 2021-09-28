import { createContext, Dispatch } from 'react';
import { Api, ApiOptions } from 'api';

export type ApiContextPayload = {
  api: Api;
  apiOptions: ApiOptions;
  setApiOptions: Dispatch<ApiOptions>
}

export const ApiContext = createContext<ApiContextPayload | undefined>(undefined);
