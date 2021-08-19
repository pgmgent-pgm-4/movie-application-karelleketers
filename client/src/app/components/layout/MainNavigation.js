import {
  Link
} from "react-router-dom";

import * as Routes from '../../routes';

import styles from './MainNavigation.module.scss';

const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={Routes.LANDING}>Home</Link>
        </li>
        <li>
          <Link to={Routes.PROJECTS}>Projects</Link>
        </li>
        <li>  
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;