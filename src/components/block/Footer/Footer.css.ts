import { createVar, style } from '@vanilla-extract/css';

import { media } from '@/styles/bundle.css';

export const svDotColor = createVar('dot-color');

export const sFooter = style({
	paddingBlockStart: 100,
	paddingInline: 29,

	'@media': {
		[media.device.phone]: {
			paddingBlockStart: 30,
			paddingInline: 10,
		},
	},
});

export const sContent = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	paddingBlock: 14,
	opacity: 0.3,

	'@media': {
		[media.device.phone]: {
			paddingBlock: 0,
		},
	},
});

export const sMetaInfo = style({
	display: 'flex',
	gap: 55,
	alignItems: 'center',
	justifyContent: 'flex-start',

	'@media': {
		[media.device.phone]: {
			gap: 15,
		},
	},
});

export const sCopyright = style({
	display: 'flex',
	gap: 10,
	alignItems: 'center',

	'@media': {
		[media.device.phone]: {
			gap: 6,
		},
	},
});

export const sCopyrightSign = style({
	width: 20,
	height: 'auto',

	'@media': {
		[media.device.phone]: {
			width: 14,
		},
	},
});

export const sYears = style({});

export const sSources = style({
	display: 'flex',
	alignItems: 'center',
	gap: 70,
	justifyContent: 'flex-end',

	'@media': {
		[media.device.phone]: {
			gap: 15,
		},
	},
});

export const sSource = style({
	display: 'flex',
	gap: 10,
	alignItems: 'center',

	'@media': {
		[media.device.phone]: {
			gap: 5,
		},
	},
});

export const sSourceIcon = style({
	width: 20,
	height: 'auto',

	'@media': {
		[media.device.phone]: {
			width: 15,
		},
	},
});
