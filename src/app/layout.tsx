import { Metadata } from 'next';

import '@/styles/global-in-js.css';
import '@/styles/global-in-css.css';

import { IsDevelopment } from '@/components/common/IsDevelopment/IsDevelopment';
import { breakpoints } from '@/constants/breakpoints';
import { WithClientAuth } from '@/lib/WithClientAuth';

export const metadata: Metadata = {
	title: `TypeScript starter for Next.js`,
	description: `TypeScript starter for Next.js that includes all you need to build amazing apps`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<WithClientAuth>
					<IsDevelopment {...breakpoints.tablet} />
					{children}
				</WithClientAuth>
			</body>
		</html>
	);
}
