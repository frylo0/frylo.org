import { style } from '@vanilla-extract/css';

import { breakpoints } from '@/constants/breakpoints';
import { colors, media } from '@/styles/bundle.css';
import { fontStyles, fontWeight } from '@/styles/vars/fontStyles.css';

export const laptop = media.widthBetween(breakpoints.desktop.minWidth, 1900);

export const sCVGeneralInfo = style({
	'@media': {
		[laptop]: {
			display: 'flex',
			flexDirection: 'column',
		},
	},
});

export const sLayout = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 70,
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
});

export const sInfoGraphics = style({
	display: 'grid',
	gridTemplateColumns: 'auto auto',

	'@media': {
		[laptop]: {
			gap: `40px 60px`,
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
});

export const sNick = style({
	fontSize: 48,
	fontWeight: fontWeight.bold,
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
});

export const sTitle = style({
	...fontStyles.head,
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
});

export const sInterestItems = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 40,
});

export const sContactItems = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 40,

	'@media': {
		[laptop]: {
			flexDirection: 'row',
		},
	},
});

export const sExperience = style({});
