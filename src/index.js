import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar'
import AppRouter from './Routers/AppRouter';


ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <AppRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

