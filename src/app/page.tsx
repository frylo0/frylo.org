import cn from 'clsx';
import { Metadata } from 'next';

import { Header } from '@/components/block/Header/Header';
import { Layout } from '@/components/common/Layout/Layout';
import { sPage } from './page.css';

export const metadata: Metadata = {
	title: `TypeScript starter for Next.js`,
	description: `TypeScript starter for Next.js that includes all you need to build amazing apps`,
};

export default function Page() {
	return (
		<main className={cn(sPage)}>
			<Header />
			<Layout>Hello, World!</Layout>
		</main>
	);
}
