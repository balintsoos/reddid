import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Skeleton from '@mui/material/Skeleton';

export const SubmissionCardSkeleton = () => {
  return (
    <Card sx={{ width: { xs: '100%', md: '800px' } }}>
      <CardHeader
        title={<Skeleton animation="wave" height={32} width="85%" />}
        subheader={<Skeleton animation="wave" height={24} width="30%" />}
      />
      <Skeleton sx={{ height: { xs: 220, md: 450 } }} animation="wave" variant="rectangular" />
    </Card>
  );
};
