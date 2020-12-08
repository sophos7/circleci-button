import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [greeting, setGreeting] = useState('')

  const _onClick = () => {
    setGreeting('Build app with CircleCI')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={_onClick}>
            Press Here
          </button>
        </p>
        <div className="greeting">
          {greeting}
        </div>
      </header>
    </div>
  );
}

export default App;
