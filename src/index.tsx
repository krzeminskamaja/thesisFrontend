import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomEventForm from './components/CustomEventForm';
import { Switch } from '@mui/material';
import store, { isUserLoggedIn } from './redux/store'
import { Provider, useSelector } from 'react-redux'
import StartListenersForm from './components/StartListenersForm';
import SaveConsentForm from './components/SaveConsentForm';
import CurrentSessionView from './components/CurrentSessionView';
import SignIn from './components/SignIn';
import FeedbackForm from './components/FeedbackForm';
import CreateAccount from './components/CreateAccount';

export default function IndexApp() {

  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={App} />
      <Route path="/form" Component={CustomEventForm} />
      <Route path="/startListeners" Component={StartListenersForm} />
      <Route path="/saveConsent" Component={SaveConsentForm} />
      <Route path="/currentSessionView" Component={CurrentSessionView}/>
      <Route path="/signIn" Component={SignIn}/>
      <Route path="/createAccount" Component={CreateAccount}/>
      <Route path="/feedback" Component={FeedbackForm}/>
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
