import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// Import components
import Header from './components/header';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import AboutMe from './components/aboutMe';
import Contact from './components/contact';
import Resume from './components/resume';

// Import styles
import './styles/main.css';

function App() {
  // Set the active page and provide a default status for the About Me page
  const [activePage, setActivePage] = useState('About Me');

  const renderPage = () => {
    if (activePage === "About Me"){
      return <AboutMe />;
    };
    if (activePage === "Portfolio"){
      return <Portfolio />;
    };
    if (activePage === "Contact"){
      return <Contact />;
    };
    if (activePage === "Resume"){
      return <Resume />;
    };
  };

  return (
    <div className="App">
      <Header activePage={activePage} setActivePage={setActivePage}/>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
