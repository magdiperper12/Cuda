// components/ThemeToggle.tsx
'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			onClick={toggleTheme}
			className='p-2 text-sm border rounded-lg dark:bg-gray-700 dark:text-white'>
			{theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
		</button>
	);
}
