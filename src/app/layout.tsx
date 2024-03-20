import { Metadata } from 'next';

import '@/styles/global-in-css.css';
import '@/styles/global-in-js.css';

import { GoogleTagManager } from '@next/third-parties/google';
import Head from 'next/head';

import { Footer } from '@/components/block/Footer/Footer';
import { Header } from '@/components/block/Header/Header';
import { IsDevelopment } from '@/components/common/IsDevelopment/IsDevelopment';
import { breakpoints } from '@/constants/breakpoints';
import { WithClientAuth } from '@/lib/WithClientAuth';

export const metadata: Metadata = {
	title: `TypeScript starter for Next.js`,
	description: `TypeScript starter for Next.js that includes all you need to build amazing apps`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className="html" lang="en" suppressHydrationWarning>
			<Head>
				{/* Common meta tags */}
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				{/* Favicon */}
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=1" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=1" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=1" />
				<link rel="manifest" href="/site.webmanifest?v=1" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg?v=1" color="#0d79c2" />
				<link rel="shortcut icon" href="/favicon.ico?v=1" />
				<meta name="msapplication-TileColor" content="#fefefe" />
				<meta name="theme-color" content="#ffffff" />
			</Head>

			<body>
				<GoogleTagManager gtmId="GTM-WWGV4J5C" />

				<WithClientAuth>
					<IsDevelopment {...breakpoints.tablet} />
					<Header />
					{children}
					<Footer />
				</WithClientAuth>
			</body>
		</html>
	);
}
