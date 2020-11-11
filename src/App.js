import React from 'react';
import logo from './logo.svg';
import './App.css';
import Batman423cover from './Batman423cover.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Batman423cover} className="App-logo" alt="logo" />
        <p>
          My name is Jesus Celebrados.
        </p>
        <a
          // className="App-link"
          // href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"

          className="App-link"
          href="https:/github.com/JRCelebrados"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my website.
        </a>
      </header>
    </div>
  );
}

export default App;
