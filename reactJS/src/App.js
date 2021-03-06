import React, {Component} from 'react';
import Routes from './routes'


import './styles.css'

import Header from './components/header'
import Main from './pages/main'

function App() {
  return (
    <div className="App">
    <Header />
    <Routes />
    </div>
  );
}

export default App;
