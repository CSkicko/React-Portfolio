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
                <a className="nav-link" href ='About Me' onClick={navigate}>About Me</a>
                <a className="nav-link" href ='Portfolio' onClick={navigate}>Portfolio</a>
                <a className="nav-link" href ='Contact' onClick={navigate}>Contact</a>
                <a className="nav-link" href ='Resume' onClick={navigate}>Resume</a>
                <p>Active page is {activePage}</p>
            </div>
        </div>
    );
}