import './App.css';
import './components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createContext } from 'react';
import React, { useState } from 'react';
import ReactSwitch from 'react-switch';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import StarshipDetail from './components/StarshipDetail';
import NoPage from './components/Nopage';
import PrepareData from './components/PrepareData';
import Search from './components/Search';

export const Themecontext = createContext(null);

function App() {
  // dark-light mode
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <Themecontext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className='App' id={theme}>

          {/*dark theme light theme selection and the section with appropriate text and pictures*/}
          <div className='switch'>
            <label className='ms-2 mb-3'>
              {theme === "light" ?
                <img className="theme-img" src="../img/light.png" /> :
                <img className="theme-img" src="../img/dark.png" />
              }
            </label>
            <label>
              {theme === "light" ? "Light Side" : "Dark Side"}
            </label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
          </div>

          {/*The section where pages are called with route*/}
          <Header />
          <Search />
          <div className='content'>
            <Routes>
              <Route path='/' element={<PrepareData />} />
              <Route path='/starships/:shipId' element={<StarshipDetail />} />
              <Route path='*' element={<NoPage />} />
            </Routes>
          </div>

          {/*scroll to top on button click*/}
          <button className='topScroll' onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}>
            &#129153;
          </button>

        </div>
      </Router >
    </Themecontext.Provider>
  );
}

export default App;
