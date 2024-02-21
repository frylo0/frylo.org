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

export const sCol4 = style({});

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

export const sLanguageItems = style({});

export const sContactItems = style({});

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

export const sLanguage = style({});

// Interest

export const sInterest = style({});

// Contact

export const sContact = style({});
