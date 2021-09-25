import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Submission } from 'snoowrap';

export const SubmissionCard = (props: { submission: Submission }) => {
  const { submission } = props;
  console.log(submission);
  const hasImages = submission.preview?.images?.length > 0;
  const firstImage = submission.preview?.images[0];
  const lastResolution = firstImage?.resolutions[firstImage.resolutions.length - 1];
  return (
    <Card sx={{ margin: '20px', width: '60vw' }}>
      <CardActionArea>
        <CardHeader
          title={submission.title}
          subheader={`${submission.subreddit_name_prefixed} - ${submission.ups} ups ${submission.downs} downs`}
        />
        {hasImages ? (
          <CardMedia
            component="img"
            image={lastResolution.url}
            alt="Paella dish"
          />
        ) : (
          <CardContent>
            <Typography>{submission.selftext}</Typography>
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
};
