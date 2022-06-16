import React from 'react';
import logo from './images/logo.png'
import './App.css';
import Countdown from 'react-countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Loading Engineer's Thesis
        </p>
        <Countdown date={Date.now() + 10000000000} />
        <strong style={{marginTop: "2%"}}>It will be a greatest project</strong>
        <p style={{fontSize:"10px",marginTop: "2%"}}>I hope</p>
      </header>
    </div>
  );
}

export default App;
