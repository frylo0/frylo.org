import { style } from '@vanilla-extract/css';

import { colors, media } from '@/styles/bundle.css';
import { laptop } from './CVGeneralInfo/CVGeneralInfo.css';

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

	'@media': {
		[media.device.phone]: {
			padding: 20,
			paddingBlockEnd: 51,
			gap: 70,
			borderRadius: 59,
		},
	},
});

export const sContent = style({
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	gap: 70,

	'@media': {
		[laptop]: {
			gap: 80,
		},
	},
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

	'@media': {
		[media.device.phone]: {
			left: -650,
			top: 364,
		},
	},
});
export const sRocky2 = style({
	width: 1000,
	transform: 'rotate(-10deg)',
	right: -32,
	top: 100,

	'@media': {
		[media.device.phone]: {
			right: -462,
			top: 1252,
		},
	},
});
export const sRocky3 = style({
	width: 1248,
	transform: 'rotate(22deg)',
	right: -150,
	bottom: -315,

	'@media': {
		[media.device.phone]: {
			bottom: -313,
			left: -612,
		},
	},
});
