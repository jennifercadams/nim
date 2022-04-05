import { useState } from 'react';

import './App.css';
import Start from './Components/Start/Start';
import Game from './Components/Game/Game';

function App() {
  const [ start, setStart ] = useState(true);
  const [ game, setGame ] = useState(false);
  const [ difficulty, setDifficulty ] = useState('normal');

  const startGame = () => {
    setStart(false);
    setGame(true);
  }

  const backToStart = () => {
    setStart(true);
    setGame(false);
  }

  return (
    <div id="App">
      <header>
        <h1>Nim Game</h1>
      </header>
      <main>
        {start && <Start startGame={startGame} setDifficulty={setDifficulty} />}
        {game && <Game difficulty={difficulty} backToStart={backToStart} />}
      </main>
    </div>
  );
}

export default App;
