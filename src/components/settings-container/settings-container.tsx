import { ReactNode, useState } from 'react';
import SettingsDialog from 'components/settings-dialog';

export type SettingsContainerProps = {
  children: (open: () => void) => ReactNode;
};

export const SettingsContainer = (props: SettingsContainerProps) => {
  const [isOpen, setOpen] = useState(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <>
      <SettingsDialog open={isOpen} close={close} />
      {props.children(open)}
    </>
  );
};
