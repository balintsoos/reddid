import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SubmissionList from 'components/submission-list';
import Logo from 'components/logo';

export const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Logo />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Reddid
          </Typography>
        </Toolbar>
      </AppBar>
      <SubmissionList />
    </Box>
  );
};
