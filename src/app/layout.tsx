import { Metadata } from 'next';

import '@/styles/global-in-css.css';
import '@/styles/global-in-js.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import Head from 'next/head';

import { Footer } from '@/components/block/Footer/Footer';
import { Header } from '@/components/block/Header/Header';
import { IsDevelopment } from '@/components/common/IsDevelopment/IsDevelopment';
import { YandexMetrika } from '@/components/common/YandexMetrika/YandexMetrika';
import { breakpoints } from '@/constants/breakpoints';
import { APP_URL } from '@/constants/project';
import { totalYears } from '@/constants/work-experience';
import { WithClientAuth } from '@/lib/WithClientAuth';

export const metadata: Metadata = {
	metadataBase: new URL(APP_URL),

	title: `frylo — Frontend Developer`,
	description:
		`World is moving, you inhale fresh forest air...` +
		` You feel free, nothing can throw you off balance.` +
		` It is because you know, there is hard skilled Frontend Developer developing your website on another side of the Earth.` +
		` Welcome to my (frylo0) website and investigate all power of web technologies.`,

	openGraph: {
		title: `frylo — Frontend Developer`,
		description:
			`In the dynamic realm of web development,` +
			` I stand as a seasoned Senior Frontend Developer with a rich tapestry of ${totalYears} years of experience.` +
			` My journey has cultivated a vibrant and extensive tech stack, a versatile toolkit capable of` +
			` crafting any technical solution that the digital landscape demands.`,
		type: 'website',
		url: APP_URL,
		images: ['/og.png'],
	},

	alternates: {
		canonical: new URL(APP_URL),
	},
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
				<GoogleAnalytics gaId="G-THYZN6RKH9" />
				<YandexMetrika ymId={96785094} />

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
