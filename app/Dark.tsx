'use client';

import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Dark: React.FC = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDarkMode);
	}, [isDarkMode]);
	return (
		<div
			className={`lg:w-2/6 xl:w-1/6 h-3/4 lg:h-screen md:pt-20 md:-mt-20 md:overflow-hidden relative rounded-lg `}>
			<div>
				<div
					className={` h-screen mt-5 md:mt-7  lg:mt-0 transition-all duration-300  fadeIn lg:flex  w-full relative`}>
					<div
						className={`flex-1 mb-20 pb-24	 lg:mb-0 overflow-scroll overflow-x-hidden overflow-y-auto
									scroll-hidden
										  bg-white dark:bg-gray-800 text-darksecoundry dark:text-primary`}>
						<div className='px-2 py-6 text-nowrap'>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dark;
