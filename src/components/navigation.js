import React from 'react';

export default function Navigation({ activePage, setActivePage }) {
    // Handle navigation based on clicked navigation button
    const navigate = (e) => {
        e.preventDefault();
        setActivePage(e.target.innerHTML);
    }

    return (
        <div className="nav-container">
            <div className="navbar-nav">
                <a className={activePage === "About Me" ? "nav-link active" : "nav-link"} href ='About Me' onClick={navigate}>About Me</a>
                <a className={activePage === "Portfolio" ? "nav-link active" : "nav-link"} href ='Portfolio' onClick={navigate}>Portfolio</a>
                <a className={activePage === "Contact" ? "nav-link active" : "nav-link"} href ='Contact' onClick={navigate}>Contact</a>
                <a className={activePage === "Resume" ? "nav-link active" : "nav-link"} href ='Resume' onClick={navigate}>Resume</a>
            </div>
        </div>
    );
}