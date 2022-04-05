import './Start.css';

function Start({ startGame, difficulty, setDifficulty }) {
  return (
    <div id="start-container">
      <h2>How To Play</h2>
      <p>You and Nim take turns removing 1, 2, or 3 coins.</p>
      <p>Whoever removes the last coin wins.</p>
      <label htmlFor="difficulty">Choose difficulty: </label>
      <select 
        id="difficulty" 
        name="difficulty" 
        defaultValue={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="normal">Normal</option>
        <option value="impossible">Impossible</option>
      </select>
      <button id="start-button" onClick={startGame}>Start</button>
    </div>
  )
}

export default Start;