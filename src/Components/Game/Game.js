import './Game.css';

function Game() {

  const coins = [];
  for (let i = 0; i < 12; i++) {
    coins.push(<div className="coin" key={i}>$</div>)
  }

  return (
    <div id="game-container">
      <p>How many coins?</p>
      <div id="choice-buttons">
        <button className="choice">1</button>
        <button className="choice">2</button>
        <button className="choice">3</button>
      </div>
      <div id="coins-container">{coins}</div>
      <div id="game-messages"></div>
    </div>
  )
}

export default Game;