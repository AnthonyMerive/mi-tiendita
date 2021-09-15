import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './components/Admin'
import NavBar from './components/NavBar'


ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <Admin/>
  </React.StrictMode>,
  document.getElementById('root')
);

