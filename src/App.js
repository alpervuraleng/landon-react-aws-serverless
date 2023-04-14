import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import HotelInfo from './components/HotelInfo';
import Footer from './components/Footer';
import menuLinksData from './components/data/menu_links.json';

function App() {
  return (
    <div className="App">
      <Header linksData={menuLinksData}/>
      <main id="wrapper">
        <Welcome/>
        <HotelInfo/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
