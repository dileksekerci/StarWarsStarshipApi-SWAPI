import './App.css';
import Header from './components/Header';
import Starships from './components/Starships';
import StarshipDetail from './components/StarshipDetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoPage from './components/Nopage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Starships />} />
            <Route path='/starshipDetails' element={<StarshipDetail />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;
