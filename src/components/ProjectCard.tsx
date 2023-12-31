import React from 'react';
import Project from '../interfaces/Project';

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<div className="content project-card">
			<h3>{project.name}</h3>
			<p>{project.description}</p>
		</div>
	);
};

export default ProjectCard;
