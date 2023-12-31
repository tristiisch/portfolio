
import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';
import '../App.css';
import '../css/structure.css';
import '../css/design.css';

interface PageProps {
	children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
	return (
		<>
			<Header />
			<div className='page'>
				{children}
				<Menu />
			</div>
			<Footer />
		</>
	);
};


export default Page;
