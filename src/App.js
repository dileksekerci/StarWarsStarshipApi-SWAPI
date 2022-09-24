import './App.css';
import Header from './components/Header';
import Starships from './components/Starships';
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
      <Starships />
      <Starship />
    </div>
  );
}

export default App;
