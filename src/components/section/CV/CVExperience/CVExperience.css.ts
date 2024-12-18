import { style } from '@vanilla-extract/css';

import { breakpoints } from '@/constants/breakpoints';
import { colors, media } from '@/styles/bundle.css';
import { fontStyles, fontWeight } from '@/styles/vars/fontStyles.css';

export const laptop = media.widthBetween(breakpoints.desktop.minWidth, 1600);

export const sCVExperience = style({});

export const sTitle = style({
	...fontStyles.head,
	marginBlockEnd: 40,

	'@media': {
		[media.device.phone]: {
			fontWeight: fontWeight.semiBold,
		},
	},
});

export const sGraph = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 7,
	paddingBlockEnd: 20 + 18,

	'@media': {
		[media.device.phone]: {
			flexDirection: 'column-reverse',
			height: `90vh`,
			paddingBlockEnd: 0,
		},
	},
});

// Graph

export const sLine = style({
	height: 33,
	position: 'relative',
	background: `${colors.primaryLighter}a0`,
	transition: 'background-color 0.5s ease',
	cursor: 'pointer',
	userSelect: 'none',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',

	':hover': {
		backgroundColor: `${colors.primaryDarker}a0`,
	},

	':first-child': {
		borderRadius: '100px 0 0 100px',
	},
	':last-child': {
		borderRadius: '0 100px 100px 0',
	},

	selectors: {
		[`&:first-child::before`]: {
			borderRadius: '100px 0 0 100px',
		},
		[`&:last-child::before`]: {
			borderRadius: '0 100px 100px 0',
		},
	},

	'@media': {
		[media.device.desktop]: {
			minWidth: 100,
		},
		[media.device.phone]: {
			width: 20,
			minHeight: 70,

			':first-child': {
				borderRadius: '0 0 100px 100px',
			},
			':last-child': {
				borderRadius: '100px 100px 0 0',
			},
		},
	},
});

export const sLineOutstaff = style({
	backgroundColor: 'transparent',

	'::before': {
		content: '',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundImage: `linear-gradient(to bottom, ${colors.primaryDarker}ff, ${colors.primaryDarker}00)`,
		transition: 'opacity 0.5s ease',
		opacity: 0.3,
	},

	':hover': {
		backgroundColor: 'transparent',
	},

	'@media': {
		[media.device.phone]: {
			'::before': {
				backgroundImage: `linear-gradient(266deg, ${colors.primaryDarker}ff, ${colors.primaryDarker}00)`,
			},
		},
	},

	selectors: {
		'&:hover::before': {
			opacity: 0.6,
		},
	},
});

export const sLineCurrent = style({
	backgroundColor: `${colors.primaryDarker}b0`,

	selectors: {
		[`${sLineOutstaff}&`]: {
			backgroundColor: `${colors.primaryDarker}b0`,
			opacity: 1,
		},
	},
});

export const sDate = style({
	display: 'flex',
	flexDirection: 'row',
	position: 'absolute',

	'@media': {
		[media.device.desktop]: {
			bottom: -20,
			transform: `translateY(100%)`,
			gap: 7,
		},
		[media.device.phone]: {
			transform: `translateX(100%)`,
			flexDirection: 'column',
			right: -10,
		},
	},
});

export const sDateStart = style({
	'@media': {
		[media.device.desktop]: {
			left: 0,
		},
		[media.device.phone]: {
			bottom: 0,
		},
	},
});

export const sDateStartMerged = style({});

export const sDateEnd = style({
	'@media': {
		[media.device.desktop]: {
			right: 0,
		},
		[media.device.phone]: {
			top: 0,
		},
	},
});

export const sNow = style({});

export const sDateEndMerged = style({
	display: 'none',
});

export const sYear = style({
	fontWeight: fontWeight.regular,
	fontSize: 'inherit',
});

export const sMonth = style({});

export const sDuration = style({
	color: colors.body,

	'@media': {
		[media.device.phone]: {
			writingMode: 'vertical-rl',
		},
	},
});

export const sLineLogo = style({
	position: 'absolute',
	width: 50,
	height: 50,
	right: `calc(-50vw + 20px)`,

	'::after': {
		content: '',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: colors.primary,
		mixBlendMode: 'hard-light',
	},
	'::before': {
		content: '',
		position: 'absolute',
		top: `calc(50% - 1px)`,
		left: `calc(-50vw + 20px + 20px + 10px + 20px + 10px)`,
		width: `calc(50vw - 110px)`,
		height: 2,
		backgroundColor: colors.body,
		borderRadius: 10,
	},
});

export const sLineImg = style({
	width: '100%',
	height: '100%',
});
