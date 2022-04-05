import './App.css';
import Start from './Components/Start/Start';
import Game from './Components/Game/Game';

function App() {
  return (
    <div className="App">
      <h1>Let's Play Nim!</h1>
      <Start />
      <Game />
    </div>
  );
}

export default App;
