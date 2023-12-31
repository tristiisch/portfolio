import React from 'react';
import Page from '../components/Page';
import Timeline from '../components/ExperienceTimeline';
import Experience from '../interfaces/Experience';

interface PageProps {
	experiences: Experience[]
}

const ExperiencePage: React.FC<PageProps> = ({ experiences }) => {
	return (
		<Page>
			<Timeline experiences={experiences} />
		</Page>
	);
};

export default ExperiencePage;
