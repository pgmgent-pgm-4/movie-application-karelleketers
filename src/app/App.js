import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import * as Routes from './routes';
import { HomePage, ProjectsPage, NotFoundPage, ProjectPage } from './pages';
import { ThemedPanel, ThemeToggle } from './theme';
import { ThemeContext, ThemeProvider } from './context';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
        <ThemeProvider>
          <ThemedPanel>
            <ThemeToggle />
            <Router>
              <Switch>
                  <Route exact path={Routes.LANDING} component={ HomePage }/>
                  <Redirect from={Routes.HOME} to={Routes.LANDING}/>
                  <Route exact path={Routes.PROJECTS} component={ ProjectsPage }/>
                  <Route exact path={Routes.PROJECT_DETAILS} component={ ProjectPage }/>
                  <Route component={ NotFoundPage }/>
              </Switch>
            </Router>
            </ThemedPanel>
        </ThemeProvider>
    </div>
  );
}

export default App;
