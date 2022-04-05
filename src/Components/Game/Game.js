import './Game.css';

function Game() {

  const coins = [];
  for (let i = 0; i < 12; i++) {
    coins.push(<div className="coin" key={i}>$</div>)
  }

  return (
    <div id="game-container">
      <p>How many coins?</p>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      {coins}
    </div>
  )
}

export default Game;