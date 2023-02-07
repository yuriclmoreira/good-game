import React from 'react';

import './App.scss';
import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <>
      <SideBar />
      <div className='body'>
        <div className='hero'>
          <Header />
        </div>
        <Banner />
        <div className='products'></div>
        <Card />
      </div>
    </>

  );
}

export default App;
