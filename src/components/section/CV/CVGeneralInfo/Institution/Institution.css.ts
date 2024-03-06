import { style } from '@vanilla-extract/css';

import { fontWeight } from '@/styles/vars/fontStyles.css';

export const sInstitution = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 10,
});

export const sYears = style({
	fontWeight: fontWeight.semiBold,
	fontSize: 16,
});

export const sDegree = style({
	fontWeight: fontWeight.regular,
	fontSize: 16,
});

export const sLocation = style({});
