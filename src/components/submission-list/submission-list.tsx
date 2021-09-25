import { useState, useEffect } from 'react';
import { Listing, Submission } from 'snoowrap';
import RedditService from 'services/reddit';

const fetchSubmissions = async (setSubmissions: Function): Promise<void> => {
  const r = new RedditService();
  const submissions = await r.getHot();
  setSubmissions(submissions);
}

export const SubmissionList = () => {
  const [submissions, setSubmissions] = useState<Listing<Submission>>([] as unknown as Listing<Submission>);

  useEffect(() => {
    fetchSubmissions(setSubmissions);
  }, []);

  return (
    <ul>
      {submissions.map((submission, index) => (
        <li key={submission.id}>{submission.title}</li>
      ))}
    </ul>
  );
};
