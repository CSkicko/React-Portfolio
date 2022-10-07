import React from 'react';

export default function Project({ title, tech, ghurl, depurl }) {

    const cardStyle = { textAlign: "left", height: "150px"}

    return (
        <div class="card col-5 my-4" style={cardStyle}>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{tech}</h6>
                <a href={ghurl} target="_blank" rel="noreferrer" class="card-link">Code</a>
                <a href={depurl} target="_blank" rel="noreferrer" class="card-link">Application</a>
            </div>
        </div>
    );
}