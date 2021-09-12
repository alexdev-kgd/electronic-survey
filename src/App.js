import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.sass';
import WelcomePage from './components/welcome-page/welcome-page';
import EnterData from './components/enter-data/enter-data';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <WelcomePage />
          </Route>
          <Route path="/enterData" exact>
            <EnterData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
