import { ChangeEventHandler, useContext, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ApiContext from 'components/api-context';

export type SettingsDialogProps = {
  open: boolean;
  close: () => void;
};

export const SettingsDialog = (props: SettingsDialogProps) => {
  const apiContext = useContext(ApiContext);
  const [userAgent, setUserAgent] = useState(apiContext?.apiOptions.userAgent);
  const onChangeUserAgent: ChangeEventHandler<HTMLInputElement> = (event) => setUserAgent(event.target.value);
  const [clientId, setClientId] = useState(apiContext?.apiOptions.clientId);
  const onChangeClientId: ChangeEventHandler<HTMLInputElement> = (event) => setClientId(event.target.value);
  const [clientSecret, setClientSecret] = useState(apiContext?.apiOptions.clientSecret);
  const onChangeClientSecret: ChangeEventHandler<HTMLInputElement> = (event) => setClientSecret(event.target.value);
  const [refreshToken, setRefreshToken] = useState(apiContext?.apiOptions.refreshToken);
  const onChangeRefreshToken: ChangeEventHandler<HTMLInputElement> = (event) => setRefreshToken(event.target.value);
  const onSubmit = () => {
    if (userAgent && clientId && clientSecret && refreshToken) {
      apiContext?.setApiOptions({
        userAgent,
        clientId,
        clientSecret,
        refreshToken,
      });
    }
    props.close();
  };
  return (
    <Dialog open={props.open} onClose={props.close}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="user-agent"
          label="User Agent"
          type="email"
          fullWidth
          variant="standard"
          value={userAgent}
          onChange={onChangeUserAgent}
        />
        <TextField
          margin="dense"
          id="client-id"
          label="Client ID"
          type="email"
          fullWidth
          variant="standard"
          value={clientId}
          onChange={onChangeClientId}
        />
        <TextField
          margin="dense"
          id="client-secret"
          label="Client Secret"
          type="email"
          fullWidth
          variant="standard"
          value={clientSecret}
          onChange={onChangeClientSecret}
        />
        <TextField
          margin="dense"
          id="refresh-token"
          label="Refresh Token"
          type="email"
          fullWidth
          variant="standard"
          value={refreshToken}
          onChange={onChangeRefreshToken}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close}>Cancel</Button>
        <Button onClick={onSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
