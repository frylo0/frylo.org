import cn from 'clsx';
import { Metadata } from 'next';

import { Layout } from '@/components/common/Layout/Layout';
import { CV } from '@/components/section/CV/CV';
import { Preview } from '@/components/section/Preview/Preview';
import { sPage } from './page.css';

export const metadata: Metadata = {
	metadataBase: new URL('https://frylo.org'),
	title: `frylo.d.ts — Frontend Developer`,
	description:
		`World is moving, you inhale fresh forest air...` +
		` You feel free, nothing can throw you off balance.` +
		` It is because you know, there is hard skilled Frontend Developer developing your website on another side of the Earth.` +
		` Welcome to my (frylo.d.ts) website and investigate all power of web technologies.`,
	openGraph: {
		title: `frylo.d.ts — Frontend Developer`,
		description:
			`In the dynamic realm of web development,` +
			` I stand as a seasoned Senior Frontend Developer with a rich tapestry of 6 years of experience.` +
			` My journey has cultivated a vibrant and extensive tech stack, a versatile toolkit capable of` +
			` crafting any technical solution that the digital landscape demands.`,
		type: 'website',
		url: 'https://frylo.org',
		images: ['/og.png'],
	},
	alternates: {
		canonical: new URL('https://frylo.org'),
	},
};

export default function Page() {
	return (
		<main className={cn(sPage)}>
			<Preview />

			<Layout>
				<CV />
			</Layout>
		</main>
	);
}
