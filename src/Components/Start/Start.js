import './Start.css';

function Start() {
  return (
    <div id="start-container">
      <h2>How To Play</h2>
      <p>You and Nim take turns removing 1, 2, or 3 coins.</p>
      <p>Whoever removes the last coin wins.</p>
      <p>Choose your difficulty to start:</p>
      <button>Easy</button>
      <button>Hard</button>
      <button>Impossible</button>
    </div>
  )
}

export default Start;