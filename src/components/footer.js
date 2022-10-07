import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {

    const style = { color: "#41B3A3", height: "50px", width: "50px", margin: "20px" };

    return (
        <div className="footer-container">
            <a href='https://github.com/CSkicko' target='_blank' rel="noreferrer">
                <FaGithub style={style}/>
            </a>
            <a href='https://www.linkedin.com/in/craig-skicko-153b9184/' target='_blank' rel="noreferrer">
                <FaLinkedin style={style}/>
            </a>
            <a href='https://twitter.com/Craig_Skicko' target='_blank' rel="noreferrer">
                <FaTwitterSquare style={style}/>
            </a>
        </div>
    );
}