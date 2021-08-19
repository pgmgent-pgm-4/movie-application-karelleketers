import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import * as Routes from './routes';
import { HomePage, ProjectsPage, NotFoundPage, ProjectPage, SignInPage } from './pages';
import { ThemedPanel, ThemeToggle } from './theme';
import { ThemeProvider, ThemeContext } from './context/theme';
/* import { appConfig } from './config'; */
import { AuthProvider, FirebaseProvider } from './context/firebase';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <FirebaseProvider>
        <AuthProvider>
            <ThemeProvider>
              <ThemedPanel>
                <ThemeToggle />
                <Router /* basename={appConfig.basicURL} */>
                  <Switch>
                      <Route exact path={Routes.LANDING} component={ HomePage }/>
                      <Redirect from={Routes.HOME} to={Routes.LANDING}/>
                      <Route exact path={Routes.PROJECTS} component={ ProjectsPage }/>
                      <Route exact path={Routes.PROJECT_DETAILS} component={ ProjectPage }/>
                      <Route exact path={Routes.AUTH_SIGN_IN} component={ SignInPage }/>
                      <Route component={ NotFoundPage }/>
                  </Switch>
                </Router>
                </ThemedPanel>
            </ThemeProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
