import { useState, useEffect, useContext } from 'react';
import Stack from '@mui/material/Stack';
import { Listing, Submission } from 'snoowrap';
import SubmissionCard from 'components/submission-card';
import SubmissionCardSkeleton from 'components/submission-card-skeleton';
import { ApiContext } from 'api';

const Loading = () => (
  <>
    {Array.from(Array(10)).map((_, index) => (
      <SubmissionCardSkeleton key={index} />
    ))}
  </>
);

const Loaded = (props: { submissions: Listing<Submission> }) => (
  <>
    {props.submissions.map((submission) => (
      <SubmissionCard key={submission.id} submission={submission} />
    ))}
  </>
);

export const SubmissionList = () => {
  const [submissions, setSubmissions] = useState<Listing<Submission>>([] as unknown as Listing<Submission>);
  const [isLoading, setLoading] = useState<boolean>(true);
  const apiContext = useContext(ApiContext);

  useEffect(() => {
    apiContext?.api.getHot().then((submissions) => {
      setSubmissions(submissions);
      setLoading(false);
    });
  }, [apiContext]);

  return (
    <Stack spacing={3} sx={{ marginY: '20px' }} direction="column" justifyContent="flex-start" alignItems="center">
      {isLoading ? <Loading /> : <Loaded submissions={submissions} />}
    </Stack>
  );
};
