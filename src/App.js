import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/header';
import Project from './components/project';
import Footer from './components/footer';

function App() {
  const [activePage, setActivePage] = useState('About Me');

  return (
    <div className="App">
      <Header activePage={activePage} setActivePage={setActivePage}/>
      <Project />
      <Footer />
    </div>
  );
}

export default App;
