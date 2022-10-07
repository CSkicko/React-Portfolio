import React from 'react';
import Project from './project';
import projects from '../db/projects';

export default function Portfolio() {
    return (
        <div className="container">
            <h2 className="mb-5">Portfolio</h2>
            <div className="row justify-content-around mb-5">
                {projects.map((project) => (
                    <Project title={project.title} tech={project.tech} ghurl={project.githubUrl} depurl={project.deployedUrl}/>
                ))}
            </div>
        </div>
    );
}