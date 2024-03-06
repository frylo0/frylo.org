import cn from 'clsx';
import { Metadata } from 'next';

import { Layout } from '@/components/common/Layout/Layout';
import { CV } from '@/components/section/CV/CV';
import { Preview } from '@/components/section/Preview/Preview';
import { sPage } from './page.css';

export const metadata: Metadata = {
	title: `TypeScript starter for Next.js`,
	description: `TypeScript starter for Next.js that includes all you need to build amazing apps`,
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
