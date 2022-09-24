import './App.css';
import Starships from './components/Starships';
import Header from './components/Header';
import Starship from './components/Starship';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Router>
        <Switch>
          <Route exact path="/"
            component={Starships} />
          <Route exact path="/Starship"
            component={Starship} />
        </Switch>
      </Router> */}
      <Starships />
      <Starship />
    </div>
  );
}

export default App;
