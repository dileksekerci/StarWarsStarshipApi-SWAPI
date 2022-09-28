import './App.css';
import './components/style.css';
import { createContext } from 'react';
import React, { useEffect, useState } from 'react';
import ReactSwitch from 'react-switch';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import StarshipDetail from './components/StarshipDetail';
import NoPage from './components/Nopage';
import PrepareData from './components/PrepareData';
import Search from './components/Search';

export const Themecontext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <Themecontext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className='App' id={theme}>
          <Header />
          <div className='switch'>
            <label>{theme === "light" ? " Light Side" : "Dark Side"} </label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
          </div>
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
    </Themecontext.Provider>
  );
}

export default App;
