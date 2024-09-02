import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Body from './body.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;