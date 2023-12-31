import React from 'react';

interface Project {
	name: string;
	description: string;
}

interface ProjectTimelineProps {
	projects: Project[];
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ projects }) => {
	return (
		<section className="content project-timeline">
			<h2>Projects</h2>
			<ul>
				{projects.map((project, index) => (
					<li key={index}>
						<h3>{project.name}</h3>
						<p>{project.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default ProjectTimeline;
