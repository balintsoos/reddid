import { useReducer } from 'react';
import Header from 'components/header';
import SubmissionList from 'components/submission-list';
import { ApiContext, apiReducer, getApiDefaultValue } from 'api';

export const App = () => {
  const [api, setApiOptions] = useReducer(apiReducer, getApiDefaultValue());
  return (
    <ApiContext.Provider value={{ api, setApiOptions }}>
      <Header />
      <SubmissionList />
    </ApiContext.Provider>
  );
};
