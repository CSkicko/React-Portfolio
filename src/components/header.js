import React from 'react';
import Navigation from './navigation';

export default function Header({ activePage, setActivePage }) {
    return (
        <div className="header-container">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Craig Skicko</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <Navigation activePage={activePage} setActivePage={setActivePage}/>
                    </div>
                </div>
            </nav>
        </div>
    );
}