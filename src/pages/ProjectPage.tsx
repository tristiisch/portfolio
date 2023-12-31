import React from 'react';
import Page from '../components/Page';
import Experience from '../interfaces/Experience';
import { useParams } from 'react-router-dom';
import ProjectTimeline from '../components/ProjectTimeline';

interface PageProps {
	experiences: Experience[]
}

const ProjectPage: React.FC<PageProps> = ({ experiences }) => {

	function ExperienceTimeline() {
		const { experience } = useParams();

		if (experience) {
			const selectedExperience = experiences.find(
				(exp) => exp.company === experience
			);
			if (selectedExperience) {
				return <ProjectTimeline projects={selectedExperience.projects} />
			}
		}
		return <p>Experience not found</p>
	}

	return (
		<Page>
			<ExperienceTimeline />
		</Page>
	);
};

export default ProjectPage;
