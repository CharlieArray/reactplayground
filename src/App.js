import './App.css';
import Time from './Components/Time'

function App() {
  let name = "Charlie"

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Sandbox</h1>
        <Time 
        name = {name}
        />
      </header>
    </div>
  );
}

export default App;
