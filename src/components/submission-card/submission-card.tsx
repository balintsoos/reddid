import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import SubmissionCardContent from 'components/submission-card-content';
import { Submission } from 'snoowrap';

const SubmissionCardSubheader = (props: { submission: Submission }) => {
  const subreddit = props.submission.subreddit_name_prefixed;
  return <>{`${subreddit} - ${props.submission.ups} ups ${props.submission.downs} downs`}</>;
};

export const SubmissionCard = (props: { submission: Submission }) => {
  return (
    <Card sx={{ width: { xs: '100%', md: '800px' } }}>
      <CardActionArea>
        <CardHeader
          title={props.submission.title}
          subheader={<SubmissionCardSubheader submission={props.submission} />}
        />
        <SubmissionCardContent submission={props.submission} />
      </CardActionArea>
    </Card>
  );
};
