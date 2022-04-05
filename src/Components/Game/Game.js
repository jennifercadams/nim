import { useState } from 'react';

import './Game.css';

function Game({ difficulty, backToStart }) {
  const [ coinsLeft, setCoinsLeft ] = useState(12);
  const [ winner, setWinner ] = useState(null);
  const [ lastPlayerMove, setLastPlayerMove ] = useState(null);
  const [ lastNimMove, setLastNimMove ] = useState(null);

  const coins = [];
  for (let i = 0; i < coinsLeft; i++) {
    coins.push(<div className="coin" key={i}>$</div>)
  }

  const nimTurn = (choice) => {
    const newCoinsLeft = coinsLeft - choice;
    const max = newCoinsLeft >= 3 ? 3 : newCoinsLeft;
    if (difficulty === 'easy') {
      return Math.ceil(Math.random() * max);
    }
    if (difficulty === 'normal') {
      if (coinsLeft >= 9 || (newCoinsLeft) % 4 === 0) {
        return Math.ceil(Math.random() * max);
      } else {
        return (newCoinsLeft) % 4;
      }
    }
    if (difficulty === 'impossible') {
      return (newCoinsLeft) % 4;
    }
  }

  const handleTurn = e => {
    const choice = Number(e.target.value);
    setLastPlayerMove(choice);
    if (coinsLeft - choice === 0) {
      setWinner('player');
      setCoinsLeft(0);
      return;
    }
    const nimChoice = nimTurn(choice);
    const coinsRemoved = choice + nimChoice;
    setLastNimMove(nimChoice);
    if (coinsLeft - coinsRemoved === 0) {
      setWinner('nim');
    }
    setCoinsLeft(coinsLeft - coinsRemoved);
  }

  return (
    <div id="game-container">
      <p>How many coins?</p>
      <div id="choice-buttons">
        <button className="choice" value={1} onClick={handleTurn} disabled={coinsLeft < 1}>1</button>
        <button className="choice" value={2} onClick={handleTurn} disabled={coinsLeft < 2}>2</button>
        <button className="choice" value={3} onClick={handleTurn} disabled={coinsLeft < 3}>3</button>
      </div>
      <div id="coins-container">{coins}</div>
      <div id="game-messages">
        {lastPlayerMove && <p>You removed {lastPlayerMove} coins.</p>}
        {lastNimMove && <p>Nim removed {lastNimMove} coins.</p>}
        {winner && <div id="game-over-msg">
          <p>{winner === 'player' ? 'You win! Play again?' : 'Nim wins! Better luck next time.'}</p>
          <button id="replay-button" onClick={backToStart}>Play Again</button>
        </div>}
      </div>
    </div>
  )
}

export default Game;