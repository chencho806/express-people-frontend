import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Install and config react router
import { BrowserRouter as Router } from 'react-router-dom';

//HOC pattern
//HOF is a function that 
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
