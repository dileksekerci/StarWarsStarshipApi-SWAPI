import './App.css';
import Starships from './components/Starships';
import Header from './components/Header';
import Search from './components/Search';
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
      <Search />
      <Starships />
    </div>
  );
}

export default App;
