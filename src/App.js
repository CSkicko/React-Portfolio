import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import Project from './components/project';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
