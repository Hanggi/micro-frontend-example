import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterAppOne from './components/CounterAppOne';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is remote app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CounterAppOne />
      </header>
    </div>
  );
}

export default App;
