import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLoggedIn } from './redux/store';
import SignIn from './components/SignIn';

function App() {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/form");
  }

  function handleClickPythonListeners() {
    navigate("/saveConsent");
  }

  function handleStartNewSession() {
    navigate("/startNewSession");
  }

  const isAynoneLoggedIn = useSelector(isUserLoggedIn)
  console.log(isAynoneLoggedIn.isLoggedIn)

  return (
    <div className="App">{isAynoneLoggedIn.isLoggedIn ? <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Button onClick={handleClickPythonListeners}>Start new session and LSL listeners</Button>
  </header> : <SignIn/>}
      
    </div>
  );
}

export default App;
