import { useState, useEffect, useContext } from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
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

const Failed = () => (
  <Alert severity="error" variant="filled">
    <AlertTitle>Error</AlertTitle>
    Cannot establish connection with the API. Please provide valid configuration in <b>Settings</b>.
  </Alert>
);

const Finished = (props: { submissions: Listing<Submission> }) => (
  <>
    {props.submissions.map((submission) => (
      <SubmissionCard key={submission.id} submission={submission} />
    ))}
  </>
);

export const SubmissionList = () => {
  const [submissions, setSubmissions] = useState<Listing<Submission>>([] as unknown as Listing<Submission>);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isFinished, setFinished] = useState<boolean>(false);
  const [isFailed, setError] = useState<boolean>(false);
  const apiContext = useContext(ApiContext);

  useEffect(() => {
    apiContext?.api
      .getHot()
      .then((submissions) => {
        setSubmissions(submissions);
        setLoading(false);
        setFinished(true);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [apiContext]);

  return (
    <Stack spacing={3} sx={{ marginY: '20px' }} direction="column" justifyContent="flex-start" alignItems="center">
      {isLoading ? <Loading /> : null}
      {isFailed ? <Failed /> : null}
      {isFinished ? <Finished submissions={submissions} /> : null}
    </Stack>
  );
};
