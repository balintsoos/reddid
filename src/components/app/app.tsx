import Box from '@mui/material/Box';
import Header from 'components/header';
import SubmissionList from 'components/submission-list';

export const App = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <SubmissionList />
    </Box>
  );
};
