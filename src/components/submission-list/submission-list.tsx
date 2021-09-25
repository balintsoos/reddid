import { Fragment, useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { Listing, Submission } from 'snoowrap';
import SubmissionCard from 'components/submission-card';
import SubmissionCardSkeleton from 'components/submission-card-skeleton';
import RedditService from 'services/reddit';

const Loading = () => (
  <Fragment>
    {Array.from(Array(10)).map((_, index) => (
      <SubmissionCardSkeleton key={index} />
    ))}
  </Fragment>
);

const Loaded = (props: { submissions: Listing<Submission> }) => (
  <Fragment>
    {props.submissions.map((submission) => (
      <SubmissionCard key={submission.id} submission={submission} />
    ))}
  </Fragment>
);

export const SubmissionList = () => {
  const [submissions, setSubmissions] = useState<Listing<Submission>>([] as unknown as Listing<Submission>);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const r = new RedditService();
    r.getHot().then((submissions) => {
      setSubmissions(submissions);
      setLoading(false);
    });
  }, []);

  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="center">
      {isLoading ? <Loading /> : <Loaded submissions={submissions} />}
    </Stack>
  );
};
