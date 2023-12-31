
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Page from '../interfaces/Page';

const pages: Page[] = [
	{
		name: "Home",
		description: "Home page",
		url: "/",
	},
	{
		name: "Experience",
		description: "Experience page",
		url: "/experience",
	}
]

const Menu: React.FC = () => {
	const navigate = useNavigate();

	const handleMenuClick = (url: string) => {
		navigate(url);
	};

	return (
		<nav className="navbar">
			<ul>
				{pages.map((page, index) => (
					<li key={index} onClick={() => handleMenuClick(page.url)}>
						<span>{page.name}</span>
					</li>
				))}
			</ul>
		</nav>
	)
};

export default Menu;
