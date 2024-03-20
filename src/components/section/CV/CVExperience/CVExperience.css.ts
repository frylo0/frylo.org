import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoints } from '@/constants/breakpoints';
import { colors, media } from '@/styles/bundle.css';
import { fontStyles, fontWeight } from '@/styles/vars/fontStyles.css';

export const laptop = media.widthBetween(breakpoints.desktop.minWidth, 1600);

export const sCVExperience = style({});

export const sTitle = style({
	...fontStyles.head,
	marginBlockEnd: 40,
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

export const sCompany = style({
	marginBlockStart: 50,
	display: 'grid',
	gridTemplateRows: `auto`,
	gridTemplateColumns: `auto auto auto`,
	gap: 70,

	'@media': {
		[laptop]: {
			gridTemplateRows: `auto auto`,
			gridTemplateColumns: `auto auto`,
			gridTemplateAreas: `
				'logo description'
				'meta description'`,
			gap: `20px 40px`,
		},
		[media.device.phone]: {
			gridTemplateRows: `auto auto`,
			gridTemplateColumns: `81px auto`,
			gridTemplateAreas: `
				'logo        mainInfo'
				'secInfo     secInfo'
				'description description'`,
			gap: `30px 20px`,
		},
	},
});

export const sLogo = style({
	position: 'relative',
	width: 148,
	height: 148,

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

	'@media': {
		[laptop]: {
			gridArea: 'logo',
			alignSelf: 'start',
			width: 70,
			height: 70,
		},
		[media.device.phone]: {
			gridArea: 'logo',
			width: 81,
			height: 81,
		},
	},
});

export const sLogoImg = style({
	objectFit: 'fill',
	width: '100%',
	height: '100%',
});

export const sInfo = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 20,

	'@media': {
		[laptop]: {
			gridArea: 'meta',
		},
		[media.device.phone]: {
			gridArea: `secInfo`,
		},
	},
});

export const sMainFeatures = style({
	'@media': {
		[media.device.phone]: {
			gridArea: 'mainInfo',
			display: 'flex',
			flexDirection: 'column',
			gap: 5,
			justifyContent: 'center',
		},
	},
});

export const sDescription = style({
	'@media': {
		[laptop]: {
			gridArea: 'description',
		},
		[media.device.phone]: {
			gridArea: 'description',
		},
	},
});

globalStyle(`${sDescription} p`, {
	marginBlockEnd: 16,
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

	'@media': {
		[media.device.desktop]: {
			minWidth: 75,
		},
		[media.device.phone]: {
			width: 20,
			minHeight: 60,

			':first-child': {
				borderRadius: '0 0 100px 100px',
			},
			':last-child': {
				borderRadius: '100px 100px 0 0',
			},
		},
	},
});

export const sLineCurrent = style({
	backgroundColor: `${colors.primaryDarker}b0`,
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

// Company Info

export const sName = style({
	fontWeight: fontWeight.medium,
	fontSize: 24,
});

export const sFeatures = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 10,

	'@media': {
		[media.device.desktop]: {
			width: 345,
		},
	},
});

export const sWebsite = style({});

export const sJobTitle = style({});

export const sTiming = style({});

export const sTechStack = style({});

export const sTech = style({
	whiteSpace: 'nowrap',
});

export const sTechItems = style({});

// Company Feature

export const sFeature = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 14,
	alignItems: 'center',
	fontWeight: fontWeight.regular,
	fontSize: 14,

	'@media': {
		[media.device.phone]: {
			gap: 10,
		},
	},
});

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
