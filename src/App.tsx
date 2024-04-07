import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/form");
  }

  function handleClickPythonListeners() {
    navigate("/startListeners");
  }

  function handleStartNewSession() {
    navigate("/startNewSession");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={handleClick}>Add custom event</Button>
        <Button onClick={handleClickPythonListeners}>Start listeners (with Kafka producers)</Button>
        <Button onClick={handleStartNewSession}>Start new session</Button>
      </header>
    </div>
  );
}

export default App;
