import React from 'react';

// Import project images
import fm from '../images/fridge-magician.png';
import jate from '../images/jate.png';
import nt from '../images/note-taker.png';
import portfolio from '../images/portfolio.png';
import tb from '../images/tech-blog.png';
import wd from '../images/weather-dashboard.png';

export default function Project({ title, tech, ghurl, depurl }) {

    // Function for retrieving the correct image for each project
    const getImage = (projectTitle) => {
        if (projectTitle === 'Fridge Magician') {
            return fm;
        };
        if (projectTitle === 'Note Taker') {
            return nt;
        };
        if (projectTitle === 'The Tech Blog') {
            return tb;
        };
        if (projectTitle === 'Just Another Text Editor (JATE)') {
            return jate;
        };
        if (projectTitle === 'Weather Dashboard') {
            return wd;
        };
        if (projectTitle === 'Portfolio Example') {
            return portfolio;
        };
    };

    // Set the card styles
    const cardStyle = { 
        textAlign: "left", 
        backgroundImage: `url(${getImage(title)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top', 
    };

    return (
        <div className="card col-12 col-md-5 my-4 p-0" style={cardStyle}>
            <div className="card-cover">
                <div className="card-body">
                    <h5 className="card-title mb-4">{title}</h5>
                    <h6 className="card-subtitle mb-4">{tech}</h6>
                    <div className="row mt-auto">
                        <div className="col-6">
                            <a href={ghurl} target="_blank" rel="noreferrer" className="card-link project-link">Code</a>
                        </div>
                        <div className="col-6">
                            <a href={depurl} target="_blank" rel="noreferrer" className="card-link project-link">Application</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}