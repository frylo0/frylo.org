import { style } from '@vanilla-extract/css';

import { colors, layout, media } from '@/styles/bundle.css';

export const sHeader = style({
	position: 'relative',
	paddingInlineStart: 20,

	'@media': {
		[media.device.phone]: {
			paddingInlineStart: 15,
		},
	},
});

export const sContent = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	height: layout.header.height.desktop,

	'@media': {
		[media.device.phone]: {
			height: layout.header.height.phone,
		},
	},
});

export const sDots = style({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: 10,

	'@media': {
		[media.device.phone]: {
			gap: 5,
		},
	},
});
export const sDot = style({
	width: 12,
	height: 12,
	borderRadius: '50%',
	background: 'var(--dot-color)',

	'@media': {
		[media.device.phone]: {
			width: 7,
			height: 7,
		},
	},
});

export const sLinks = style({
	background: colors.bodyLighter,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	gap: 5,
	padding: 10,
	borderRadius: 15,
	height: 69,

	'@media': {
		[media.device.phone]: {
			height: 50,
			padding: 7,
			gap: 0,
		},
	},
});
export const sPermalink = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 10,
	alignItems: 'center',

	'@media': {
		[media.device.phone]: {
			gap: 5,
		},
	},
});

export const sNickname = style({});
export const sIcon = style({
	width: 20,
	height: 20,

	'@media': {
		[media.device.phone]: {
			width: 15,
			height: 15,
		},
	},
});

export const sLogo = style({
	position: 'absolute',
	left: '50%',
	top: '50%',
	transform: 'translate(-50%, -50%)',
});
export const sLogoImg = style({
	width: 100,
	height: 'auto',

	'@media': {
		[media.device.phone]: {
			width: 61,
		},
	},
});
