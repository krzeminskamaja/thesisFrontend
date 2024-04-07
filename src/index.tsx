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
import StartLSLListenersForm from './components/StartLSLListenersForm';

export default function IndexApp() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={App} />
      <Route path="/form" Component={CustomEventForm} />
      <Route path="/startLSLListeners" Component={StartLSLListenersForm} />
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
