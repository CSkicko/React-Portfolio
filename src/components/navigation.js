import React from 'react';

export default function Navigation() {
    return (
        <div className="nav-container">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link" href="#">Pricing</a>
                <a className="nav-link disabled">Disabled</a>
            </div>
        </div>
    );
}