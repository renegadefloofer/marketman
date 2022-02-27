import React from 'react';
import Board from './components/Layout/Board';
import MainNav from './components/Layout/MainNav';
import Assets from './components/Pages/Assets';
import './index.css';

function App() {
  const navItems = [
    {
      title: 'Assets',
      link: '',
    },
    {
      title: 'Markets',
      link: '',
    },
    {
      title: 'Prices',
      link: '',
    },
    {
      title: 'Trends',
      link: '',
    },
  ];
  return (
    <div className="main">
      <MainNav navItems={navItems} />
      <Board>
        <Assets />
      </Board>
    </div>
  );
}

export default App;
