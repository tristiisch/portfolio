
import Experience from './interfaces/Experience';
import AppRoutes from './routes/AppRoutes';

const experiences: Experience[] = [
	{
		company: 'Microsoft',
		title: 'Senior Software Engineer',
		date: 'January 2020 - Present',
		projects: [
			{
				name: 'Azure Cloud Integration',
				description: 'Developed a scalable solution for seamless integration with Azure services.',
			},
			{
				name: 'Microsoft 365 Enhancements',
				description: 'Contributed to the enhancement of Microsoft 365 productivity suite.',
			},
			{
				name: 'AI-driven Project Management',
				description: 'Led the development of an AI-powered project management tool for internal use.',
			},
		],
	},
	{
		company: 'Alstom',
		title: 'Full Stack Developer',
		date: 'June 2019 - August 2019',
		projects: [
			{
				name: 'Railway Management System',
				description: 'Developed a comprehensive web application for efficient railway management.',
			},
			{
				name: 'Energy Optimization Dashboard',
				description: 'Designed and implemented an energy optimization dashboard for monitoring and control.',
			},
		],
	},
	{
		company: 'Google',
		title: 'Machine Learning Engineer',
		date: 'May 2018 - December 2018',
		projects: [
			{
				name: 'Natural Language Processing Models',
				description: 'Built NLP models for improving language understanding in Google search.',
			},
			{
				name: 'Recommendation System Overhaul',
				description: 'Revamped the recommendation system for a major Google product.',
			},
		],
	},
	{
		company: 'SpaceX',
		title: 'Flight Software Engineer',
		date: 'January 2017 - April 2018',
		projects: [
			{
				name: 'Autonomous Spacecraft Navigation',
				description: 'Contributed to the development of autonomous navigation software for spacecraft.',
			},
			{
				name: 'Payload Integration Automation',
				description: 'Automated the payload integration process, reducing launch preparation time.',
			},
		],
	},
];

export default App;

function App() {
	return <AppRoutes experiences={experiences} />;
}
