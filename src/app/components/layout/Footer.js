import { Link } from "react-router-dom";

import * as Routes from '../../routes';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to={Routes.PROJECTS}>Films/Series</Link>
    </footer>
  );
};

export default Footer;