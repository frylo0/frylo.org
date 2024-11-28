import cn from 'clsx';

import { Layout } from '@/components/common/Layout/Layout';
import { CV } from '@/components/section/CV/CV';
import { Preview } from '@/components/section/Preview/Preview';
import { sPage } from './page.css';

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
