import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from 'components/logo';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Reddid
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
