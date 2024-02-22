import { style } from '@vanilla-extract/css';

import { colors } from '@/styles/bundle.css';

export const sSection = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 70,
	padding: 80,
	backgroundColor: colors.bodyLighter,
	borderRadius: 100,
	boxShadow: '0 34px 100px #00000010',
});
