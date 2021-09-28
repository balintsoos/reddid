import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import Logo from 'components/logo';

export type HeaderProps = {
  open: () => void;
};

export const Header = (props: HeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          reddid
        </Typography>
        <IconButton aria-label="Settings" onClick={props.open}>
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
