import { useState } from 'react';

import './Game.css';

function Game({ difficulty }) {
  const [ coinsLeft, setCoinsLeft ] = useState(12);
  const [ lastPlayerMove, setLastPlayerMove ] = useState(null);
  const [ lastNimMove, setLastNimMove ] = useState(null);

  const coins = [];
  for (let i = 0; i < coinsLeft; i++) {
    coins.push(<div className="coin" key={i}>$</div>)
  }

  const handleTurn = (e) => {
    const choice = e.target.value;
    setLastPlayerMove(choice);
    setCoinsLeft(coinsLeft - choice);
  }

  return (
    <div id="game-container">
      <p>How many coins?</p>
      <div id="choice-buttons">
        <button className="choice" value={1} onClick={handleTurn}>1</button>
        <button className="choice" value={2} onClick={handleTurn}>2</button>
        <button className="choice" value={3} onClick={handleTurn}>3</button>
      </div>
      <div id="coins-container">{coins}</div>
      <div id="game-messages">
        {lastPlayerMove && <p>You removed {lastPlayerMove} coins.</p>}
        {lastNimMove && <p>Nim removed {lastNimMove} coins.</p>}
      </div>
    </div>
  )
}

export default Game;