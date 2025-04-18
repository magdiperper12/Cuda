import type { Metadata } from 'next';
import './globals.css';
import { Roboto } from 'next/font/google';

const inter = Roboto({ subsets: ['latin'], weight: '700' });
export const metadata: Metadata = {
	title: 'Football Historic',
	icons: {
		icon: '/salah.png',
	},
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`bg-gradient-to-r ${inter.className} h-screen overflow-hidden from-secoundry via-white to-secoundry dark:from-darksecoundry dark:via-black dark:to-darksecoundry  `}>
				{children}
			</body>
		</html>
	);
}
