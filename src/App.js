import { useState } from 'react';

import './App.css';
import Start from './Components/Start/Start';
import Game from './Components/Game/Game';

function App() {
  const [ start, setStart ] = useState(true);
  const [ game, setGame ] = useState(false);
  const [ difficulty, setDifficulty ] = useState('Impossible');

  const startGame = () => {
    setStart(false);
    setGame(true);
  }

  return (
    <div className="App">
      <h1>Let's Play Nim!</h1>
      {start && <Start />}
      {game && <Game />}
    </div>
  );
}

export default App;
