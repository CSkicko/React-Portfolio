import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import Project from './components/project';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
