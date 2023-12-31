import React from 'react';
import { Link } from 'react-router-dom';
import Experience from '../interfaces/Experience';

interface ButtonListProps {
	items: Experience[];
}

const ButtonList: React.FC<ButtonListProps> = ({ items }) => {
	return (
		<div>
			<h2>Experience List</h2>
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						{/* Use the Link component to create buttons that redirect to /<string> */}
						<Link to={`/experience/${item.company}`}>{item.company}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ButtonList;
