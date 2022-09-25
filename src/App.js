import './App.css';
import Header from './components/Header';
import StarshipDetail from './components/StarshipDetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoPage from './components/Nopage';
import LoadMore from './components/LoadMore';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<LoadMore />} />
            <Route path='/starshipDetails' element={<StarshipDetail />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;
