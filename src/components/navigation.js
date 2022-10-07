import React from 'react';

export default function Navigation({ activePage, setActivePage }) {

    return (
        <div className="nav-container">
            <div className="navbar-nav">
                <a className="nav-link" href="#">About Me</a>
                <a className="nav-link" href="#">Portfolio</a>
                <a className="nav-link" href="#">Contact</a>
                <a className="nav-link" href="#">Resume</a>
                <p>Active page is {activePage}</p>
            </div>
        </div>
    );
}