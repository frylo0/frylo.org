import { style } from '@vanilla-extract/css';

import { colors } from '@/styles/bundle.css';
import { fontStyles, fontWeight } from '@/styles/vars/fontStyles.css';

export const sSection = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 70,
	padding: 80,
	backgroundColor: colors.bodyLighter,
	borderRadius: 100,
	boxShadow: '0 34px 100px #00000010',
});

export const sGeneralInfo = style({
	display: 'flex',
	flexDirection: 'row',
	gap: 74,
});

export const sCol1 = style({});

export const sCol2 = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 20,
});

export const sCol3 = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 80,
});

export const sCol4 = style({
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
});

export const sExperience = style({});

// Education

export const sInstitution = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 10,
});

export const sYears = style({
	fontWeight: fontWeight.semiBold,
	fontSize: 16,
});

export const sDegree = style({
	fontWeight: fontWeight.regular,
	fontSize: 16,
});

export const sLocation = style({});

// Languages

export const sLanguage = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
});

export const sLanguageChart = style({
	width: 90,
	height: 90,
});

export const sChartBody = style({
	strokeWidth: 3,
	fill: 'none',
	stroke: colors.primaryLighter,
});

export const sChartOutline = style({
	strokeWidth: 3,
	fill: 'none',
	stroke: colors.primaryDarker,
});

export const sChartPercent = style({
	fill: colors.secondary,
	fontSize: 16,
	fontWeight: fontWeight.semiBold,
});

export const sLanguageName = style({
	textTransform: 'uppercase',
	fontWeight: fontWeight.semiBold,
	fontSize: 16,
	marginBlockStart: 10,
});

export const sLanguageLevel = style({
	whiteSpace: 'nowrap',
});

// Interest

export const sInterest = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 10,
});

export const sInterestIcon = style({
	width: 70,
	height: 70,
	opacity: '0.7',
	fontWeight: fontWeight.regular,
});

export const sInterestName = style({});

// Contact

export const sContact = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 10,
});

export const sContactName = style({
	fontWeight: fontWeight.semiBold,
	fontSize: 16,
});

export const sContactLink = style({});
