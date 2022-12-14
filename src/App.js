import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import MainPage from './pages/mainPage';
import SearchPage from './pages/searchPage';
import FavoritesPage from './pages/favoritesPage';
import Navlink from './Components/navLink';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Navlink/>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  </Router>
  );
}

export default App;
