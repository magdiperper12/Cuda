'use client';

import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Dark: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDarkMode);
	}, [isDarkMode]);
	return (
		<div className='px-2 py-6 text-nowrap md:w-2/6 lg:w-1/6'>
			<div
				className={`mt-4 mb-1 ${
					isDarkMode ? 'bg-darkprimary' : 'bg-primary'
				} dark:text-secoundry text-darksecoundry p-2 md:w-1/3 m-auto lg:w-auto  rounded-full  hover:shadow-sm dark:shadow-sm flex items-center justify-around cursor-pointer`}
				onClick={() => setIsDarkMode(!isDarkMode)}>
				<span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
				<div
					className={`w-8 h-8 rounded-full flex justify-center items-center ${
						isDarkMode ? 'bg-white' : 'bg-darkforth'
					}`}>
					{isDarkMode ? (
						<FaSun className='text-yellow-600' />
					) : (
						<FaMoon className='text-darksecoundry' />
					)}
				</div>
			</div>
		</div>
	);
};

export default Dark;
