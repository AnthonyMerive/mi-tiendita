import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './components/Cards';
import NavBar from './components/NavBar'
import AppRouter from './Routers/AppRouter';


ReactDOM.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

