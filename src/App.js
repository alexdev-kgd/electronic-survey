import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.sass';
import WelcomePage from './components/welcome-page/welcome-page';
import EnterData from './components/enter-data/enter-data';
import Survey from './components/survey/survey';

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
          <Route path="/survey">
            <Survey />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
