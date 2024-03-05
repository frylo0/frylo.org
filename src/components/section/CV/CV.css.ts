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
	position: 'relative',
	overflow: 'hidden',
});

export const sContent = style({
	position: 'relative',
});

export const sRocky = style({
	position: 'absolute',
	height: 'auto',
});

export const sRocky1 = style({
	left: -570,
	top: 400,
	transform: 'rotate(22deg)',
	width: 977,
});
export const sRocky2 = style({
	width: 1000,
	transform: 'rotate(-10deg)',
	right: -32,
	top: 100,
});
export const sRocky3 = style({
	width: 1248,
	transform: 'rotate(22deg)',
	right: -150,
	bottom: -315,
});
