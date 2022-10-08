import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import resume from '../files/cv.pdf'

export default function Resume() {

    const iconStyle = { color: "#41B3A3", height: "80px", width: "80px", margin: "20px" };

    return (
        <div className="container">
            <h2 className="mb-5">Resume</h2>
            <p>You can access my resume by clicking the document below:</p>
            <a href={resume} target='_blank' rel='noreferrer'>
                <FaFileAlt style={iconStyle}/>
            </a>
        </div>
    );
}