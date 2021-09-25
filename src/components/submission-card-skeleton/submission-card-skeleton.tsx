import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Skeleton from '@mui/material/Skeleton';

export const SubmissionCardSkeleton = () => {
  return (
    <Card sx={{ margin: '20px', width: '800px' }}>
      <CardHeader
        title={<Skeleton animation="pulse" height={32} width="85%" />}
        subheader={<Skeleton animation="pulse" height={24} width="30%" />}
      />
      <Skeleton sx={{ height: 450 }} animation="pulse" variant="rectangular" />
    </Card>
  );
};
