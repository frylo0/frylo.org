import { style } from '@vanilla-extract/css';

import { fontWeight } from '@/styles/vars/fontStyles.css';

export const sInterest = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 10,
});

export const sInterestIcon = style({
	width: 70,
	height: 70,
	opacity: '0.7',
	fontWeight: fontWeight.regular,
});

export const sInterestName = style({});
