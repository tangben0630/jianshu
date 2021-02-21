import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cont, { dataContext } from './components/Context'


ReactDOM.render(
  <Cont>
    <App />
  </Cont>,
  document.getElementById('root')
);

