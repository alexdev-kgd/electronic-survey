import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.sass';
import WelcomePage from './components/welcome-page';

function App() {
  return (
    <Router>
      <div className="App">
          <WelcomePage></WelcomePage>
      </div>
    </Router>
  );
}

export default App;
