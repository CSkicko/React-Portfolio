import React from 'react';
import Navigation from './navigation';

export default function Header({ activePage, setActivePage }) {

    const navStyle = { background: "#2D3142" };

    return (
        <div className="header-container mb-5">
            <nav className="navbar navbar-expand-lg" style={navStyle}>
                <div className="container-fluid px-5">
                    <a className="navbar-brand" href="/">Craig Skicko</a>
                    <Navigation activePage={activePage} setActivePage={setActivePage}/>
                </div>
            </nav>
        </div>
    );
}