import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomEventForm from './components/CustomEventForm';
import { Switch } from '@mui/material';
import store from './redux/store'
import { Provider } from 'react-redux'
import StartListenersForm from './components/StartListenersForm';
import StartNewSessionForm from './components/StartNewSessionForm';
import CurrentSessionView from './components/CurrentSessionView';
import SignIn from './components/SignIn';

export default function IndexApp() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={App} />
      <Route path="/form" Component={CustomEventForm} />
      <Route path="/startListeners" Component={StartListenersForm} />
      <Route path="/startNewSession" Component={StartNewSessionForm} />
      <Route path="/currentSessionView" Component={CurrentSessionView}/>
      <Route path="/signIn" Component={SignIn}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<IndexApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
