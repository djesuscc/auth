import Login from './pages/Login/Index'
import Home from './pages/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/success">
          <Home />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
