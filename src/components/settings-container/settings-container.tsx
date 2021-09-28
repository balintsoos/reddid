import { Dispatch, ReactNode, useState } from 'react';
import SettingsDialog from 'components/settings-dialog';
import { ApiOptions } from 'api';

export type SettingsContainerProps = {
  apiOptions: ApiOptions;
  setApiOptions: Dispatch<ApiOptions>;
  children: (open: () => void) => ReactNode;
};

export const SettingsContainer = (props: SettingsContainerProps) => {
  const [isOpen, setOpen] = useState(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  const submit = (options: ApiOptions) => {
    props.setApiOptions(options);
    close();
  };
  return (
    <>
      <SettingsDialog open={isOpen} close={close} apiOptions={props.apiOptions} submit={submit} />
      {props.children(open)}
    </>
  );
};
