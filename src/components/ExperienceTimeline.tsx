import React from 'react';
import Experience from '../interfaces/Experience';
import { useNavigate } from 'react-router-dom';

interface TimelineProps {
	experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
	const navigate = useNavigate();

	const handleCompanyClick = (companyName: string) => {
		// Use encodeURIComponent to handle potential special characters in company names
		const encodedCompanyName = encodeURIComponent(companyName);

		// Navigate to the company details page
		navigate(`/experience/${encodedCompanyName}`);
	};

	return (
		<section className="content timeline">
			<h2>Professional Timeline</h2>
			<ul>
				{experiences.map((experience, index) => (
					<li key={index} onClick={() => handleCompanyClick(experience.company)}>
						<span className='bold'>{experience.title}</span> {experience.date}
					</li>
				))}
			</ul>
		</section>
	);
};

export default Timeline;
