import { ReactComponent as Logo } from 'media/logo.svg';
import SubmissionList from 'components/submission-list';
import styles from './app.module.css';

export const App = () => {
  return (
    <div className={styles.App}>
      <Logo className={styles.AppLogo} />
      <p>Coming soon</p>
      <SubmissionList />
    </div>
  );
};
