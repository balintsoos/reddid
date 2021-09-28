import { useEffect, useReducer, useState } from 'react';
import Header from 'components/header';
import SubmissionList from 'components/submission-list';
import SettingsContainer from 'components/settings-container';
import ApiContext from 'components/api-context';
import { Api, ApiOptions, createApi, getApiOptionsFromStorage, storeApiOptionsInStorage } from 'api';

const apiReducer = (api: Api, options: ApiOptions): Api => {
  if (api.isNewOptions(options)) {
    storeApiOptionsInStorage(options);
    return createApi(options);
  }
  return api;
};

export const App = () => {
  const [apiOptions, setApiOptions] = useState(getApiOptionsFromStorage());
  const [api, setApi] = useReducer(apiReducer, createApi(apiOptions));

  useEffect(() => {
    setApi(apiOptions);
  }, [apiOptions])

  return (
    <ApiContext.Provider value={{ api, apiOptions, setApiOptions }}>
      <SettingsContainer>
        {(open: () => void) => (
          <Header open={open} />
        )}
      </SettingsContainer>
      <SubmissionList />
    </ApiContext.Provider>
  );
};
