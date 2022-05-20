import { Route, Switch } from 'react-router-dom'
import './App.sass'
import WelcomePage from './components/welcome-page/welcome-page'
import EnterData from './components/enter-data/enter-data'
import ProtectedRoute from './shared/protectedRoute'
import FinishPage from './components/finish-page/finish-page'
import isUserAuthenticated from './shared/isUserAuthenticated'
import { useHistory } from 'react-router';
import { ROUTE_NAMES } from './shared/const/routeNames'
import Survey from './components/survey/survey'

function App() {
  const history = useHistory()
  if(isUserAuthenticated() && history) {
    history.push(ROUTE_NAMES.SURVEY)
  }

  return (
    <div className="App">
      <Switch>
        <Route path={ROUTE_NAMES.WELCOME_PAGE} exact>
          <WelcomePage />
        </Route>
        <Route path={ROUTE_NAMES.ENTER_DATA}>
          <EnterData />
        </Route>
        <ProtectedRoute path={ROUTE_NAMES.SURVEY} 
                        predicate={isUserAuthenticated()} 
                        fallbackRoute={ROUTE_NAMES.ENTER_DATA}>
                          <Survey />
        </ProtectedRoute>
        <ProtectedRoute path={ROUTE_NAMES.FINISH_PAGE} 
                        predicate={!isUserAuthenticated() && !!localStorage.getItem('finished')} 
                        fallbackRoute={ROUTE_NAMES.SURVEY}>
                          <FinishPage />
        </ProtectedRoute>
        <Route path={ROUTE_NAMES.FINISH_PAGE}>
          <FinishPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
