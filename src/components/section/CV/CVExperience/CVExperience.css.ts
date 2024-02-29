import { globalStyle, style } from '@vanilla-extract/css';

import { colors } from '@/styles/bundle.css';
import { fontStyles, fontWeight } from '@/styles/vars/fontStyles.css';

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
});

export const sCompany = style({
	marginBlockStart: 50,
	display: 'flex',
	flexDirection: 'row',
	gap: 70,
});

export const sLogo = style({
	position: 'relative',

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
});

export const sInfo = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 20,
});

export const sDescription = style({});

globalStyle(`${sDescription} p`, {
	marginBlockEnd: 16,
});

// Graph

export const sLine = style({
	height: 33,
	position: 'relative',
	width: 200,
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
});

export const sLineCurrent = style({
	backgroundColor: `${colors.primaryDarker}b0`,
});

export const sDate = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 7,
	position: 'absolute',
	bottom: -20,
	transform: `translateY(100%)`,
});

export const sDateStart = style({
	left: 0,
});

export const sDateStartMerged = style({});

export const sDateEnd = style({
	right: 0,
});

export const sNow = style({});

export const sDateEndMerged = style({
	display: 'none',
});

export const sYear = style({
	fontWeight: fontWeight.regular,
	fontSize: 16,
});

export const sMonth = style({});

export const sDuration = style({
	color: colors.body,
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
	width: 345,
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
});

export const sIcon = style({
	width: 20,
	height: 20,
});
