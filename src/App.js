import React from 'react';
import Board from './components/Layout/Board';
import Assets from './components/Pages/Assets';

function App() {
  return (
    <div>
      <Board>
        <Assets />
      </Board>
      <div>Hello1</div>
    </div>
  );
}

export default App;
