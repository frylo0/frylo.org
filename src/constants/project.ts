import { TClientAuthUsers } from '@/lib/WithClientAuth';

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || '';

export const clientAuthUsers: TClientAuthUsers = [
	{
		username: 'admin',
		password: '1234',
	},
];

export const figmaUrl =
	'https://www.figma.com/file/4PxEoUwT1SLLI0gCA2OLmf/Frylo.d.ts-Portfolio?type=design&node-id=8%3A196&mode=design&t=K1tnHiYcQFkfpwkg-1';
export const repoUrl = 'https://github.com/frylo0/frylo.org';

export const yearStart = 2001;
