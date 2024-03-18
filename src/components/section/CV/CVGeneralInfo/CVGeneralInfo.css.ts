import { style } from '@vanilla-extract/css';

import { breakpoints } from '@/constants/breakpoints';
import { colors, media } from '@/styles/bundle.css';
import { dynit } from '@/styles/utils/dynit.css';
import { fontStyles, fontWeight } from '@/styles/vars/fontStyles.css';

export const laptop = media.widthBetween(breakpoints.desktop.minWidth, 1900);

export const sCVGeneralInfo = style({
	'@media': {
		[laptop]: {
			display: 'flex',
			flexDirection: 'column',
		},
		[media.device.phone]: {
			gap: 40,
		},
	},
});

export const sLayout = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 70,

	'@media': {
		[media.device.phone]: {
			flexDirection: 'column',
		},
	},
});

export const sHeader = style({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
});

export const sCol1 = style({});

export const sCol2 = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 20,
});

export const sTextPart = style({
	display: 'flex',
	flexDirection: 'row',

	'@media': {
		[media.device.phone]: {
			flexDirection: 'column',
			gap: 20,
		},
	},
});

export const sInfoGraphics = style({
	display: 'grid',
	gridTemplateColumns: 'auto auto',

	'@media': {
		[laptop]: {
			gap: `40px 60px`,
		},
		[media.device.phone]: {
			gridTemplateColumns: 'auto',
			gap: 40,
		},
	},
});

export const sPcCol = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 80,
});

export const sPhoto = style({
	width: 296,
	height: 296,
	position: 'relative',

	'::after': {
		content: '',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background: '#70B6FF',
		mixBlendMode: 'soft-light',
	},

	'@media': {
		[media.device.phone]: {
			width: 85,
			height: 85,
		},
	},
});

export const sImg = style({
	width: '100%',
	height: '100%',
});

export const sNick = style({
	fontSize: 48,
	fontWeight: fontWeight.bold,

	'@media': {
		[media.device.phone]: {
			fontSize: dynit(375, 36, breakpoints.phone.maxWidth, 46),
		},
	},
});

export const sTextAccent = style({
	color: colors.primaryDarker,
});

export const sMessage = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 16,
});

export const sPart = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 40,

	'@media': {
		[media.device.phone]: {
			gap: 20,
		},
	},
});

export const sTitle = style({
	...fontStyles.head,

	'@media': {
		[media.device.phone]: {
			...fontStyles.headMobile,
		},
	},
});

export const sSubtitle = style({});

export const sEducationItems = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 40,

	'@media': {
		[laptop]: {
			flexDirection: 'row',
		},
	},
});

export const sLanguageItems = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 40,

	'@media': {
		[media.device.phone]: {
			flexWrap: `wrap`,
			justifyContent: 'space-between',
			gap: 30,
		},
	},
});

export const sInterestItems = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 40,

	'@media': {
		[media.device.phone]: {
			flexWrap: `wrap`,
			justifyContent: 'space-between',
			gap: 20,
		},
	},
});

export const sContactItems = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 40,

	'@media': {
		[laptop]: {
			flexDirection: 'row',
		},
		[media.device.phone]: {
			flexDirection: 'row',
			flexWrap: `wrap`,
			gap: 20,
			justifyContent: 'space-between',
		},
	},
});

export const sExperience = style({});
