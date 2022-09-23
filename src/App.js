import './App.css';
import Starships from './components/Starships';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Starships />
    </div>
  );
}

export default App;
