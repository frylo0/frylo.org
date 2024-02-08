import { Metadata } from 'next';

import '@/styles/global-in-css.css';
import '@/styles/global-in-js.css';

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
			<body>
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
