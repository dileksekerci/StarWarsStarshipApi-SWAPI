import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import StarshipDetail from './components/StarshipDetail';
import NoPage from './components/Nopage';
import PrepareData from './components/PrepareData';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Search />
        <div className='content'>
          <Routes>
            <Route path='/' element={<PrepareData />} />
            <Route path='/starships/:shipId' element={<StarshipDetail />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;
