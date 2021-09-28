import { createContext, Dispatch } from 'react';
import { Api, ApiOptions } from 'api';

export const ApiContext = createContext<undefined | { api: Api; setApiOptions: Dispatch<ApiOptions> }>(undefined);
