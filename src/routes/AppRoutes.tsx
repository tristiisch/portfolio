import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ExperiencePage from '../pages/ExperiencePage';
import ProjectPage from '../pages/ProjectPage';
import Experience from '../interfaces/Experience';


interface PageProps {
	experiences: Experience[];
}

const AppRoutes: React.FC<PageProps> = ({ experiences }) => {

	var basename = undefined;
	const isGitHubPages = window.location.hostname.endsWith("github.io");
	if (isGitHubPages) {
		basename = process.env.PUBLIC_URL + "/"
	}

	return (
		<BrowserRouter basename={basename}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/experience" element={<ExperiencePage experiences={experiences} />} />
				<Route path="/experience/:experience" element={<ProjectPage experiences={experiences} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
