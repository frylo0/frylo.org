import { style } from '@vanilla-extract/css';

import { fontWeight } from '@/styles/vars/fontStyles.css';

export const sContact = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 10,
});

export const sContactName = style({
	fontWeight: fontWeight.semiBold,
	fontSize: 16,
});

export const sContactLink = style({});
