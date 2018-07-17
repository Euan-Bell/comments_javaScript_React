import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <h1>Hello World:</h1>,
  <App/>,
  document.getElementById('root')
);


registerServiceWorker();
