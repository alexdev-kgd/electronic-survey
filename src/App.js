import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.sass';
import WelcomePage from './components/welcome-page/welcome-page';
import EnterData from './components/enter-data/enter-data';
import ProtectedRoute from './shared/protectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          <Route path="/enterData">
            <EnterData />
          </Route>
          <ProtectedRoute path="/survey" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
