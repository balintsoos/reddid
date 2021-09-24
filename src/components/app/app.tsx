import logo from '../../media/logo.svg';
import styles from './app.module.css';

export const App = () => (
  <div className={styles.App}>
    <img src={logo} className={styles.AppLogo} alt="logo" />
    <p>Hello</p>
  </div>
);
