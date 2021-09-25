import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { Listing, Submission } from 'snoowrap';
import SubmissionCard from 'components/submission-card';
import RedditService from 'services/reddit';

const fetchSubmissions = async (setSubmissions: Function): Promise<void> => {
  const r = new RedditService();
  const submissions = await r.getHot();
  setSubmissions(submissions);
};

export const SubmissionList = () => {
  const [submissions, setSubmissions] = useState<Listing<Submission>>([] as unknown as Listing<Submission>);

  useEffect(() => {
    fetchSubmissions(setSubmissions);
  }, []);

  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="center">
      {submissions.map((submission) => (
        <SubmissionCard key={submission.id} submission={submission} />
      ))}
    </Stack>
  );
};
