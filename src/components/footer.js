import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer-container">
            <a href='https://github.com/CSkicko' target='_blank' rel="noreferrer">
                <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/craig-skicko-153b9184/' target='_blank' rel="noreferrer">
                <FaLinkedin />
            </a>
            <a href='https://twitter.com/Craig_Skicko' target='_blank' rel="noreferrer">
                <FaTwitterSquare />
            </a>
        </div>
    );
}