import { useState, useEffect, useContext } from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Listing, Submission } from 'snoowrap';
import SubmissionCard from 'components/submission-card';
import SubmissionCardSkeleton from 'components/submission-card-skeleton';
import ApiContext from 'components/api-context';

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

const Success = (props: { submissions: Listing<Submission> }) => (
  <>
    {props.submissions.map((submission) => (
      <SubmissionCard key={submission.id} submission={submission} />
    ))}
  </>
);

enum State {
  Loading,
  Success,
  Failed,
}

export const SubmissionList = () => {
  const [submissions, setSubmissions] = useState<Listing<Submission>>([] as unknown as Listing<Submission>);
  const [state, setState] = useState<State>(State.Loading);
  const apiContext = useContext(ApiContext);

  useEffect(() => {
    setState(State.Loading);
    apiContext?.api
      .getHot()
      .then((submissions) => {
        setSubmissions(submissions);
        setState(State.Success);
      })
      .catch(() => {
        setState(State.Failed);
      });
  }, [apiContext]);

  return (
    <Stack spacing={3} sx={{ marginY: '20px' }} direction="column" justifyContent="flex-start" alignItems="center">
      {state === State.Loading ? <Loading /> : null}
      {state === State.Failed ? <Failed /> : null}
      {state === State.Success ? <Success submissions={submissions} /> : null}
    </Stack>
  );
};
