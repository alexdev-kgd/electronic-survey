import { Route, Switch } from 'react-router-dom'
import './App.sass'
import WelcomePage from './components/welcome-page/welcome-page'
import EnterData from './components/enter-data/enter-data'
import ProtectedRoute from './shared/protectedRoute'
import FinishPage from './components/finish-page/finish-page'
import isUserAuthenticated from './shared/isUserAuthenticated'
import { useHistory } from 'react-router';

function App() {
  const history = useHistory()
  if(isUserAuthenticated() && history) {
    history.push("/survey")
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/enterData">
          <EnterData />
        </Route>
        <ProtectedRoute path="/survey" />
        <Route path="/finish">
          <FinishPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
