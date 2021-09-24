import { ReactComponent as Logo } from 'media/logo.svg';
import styles from './app.module.css';

export const App = () => (
  <div className={styles.App}>
    <Logo className={styles.AppLogo} />
    <p>Coming soon</p>
  </div>
);
