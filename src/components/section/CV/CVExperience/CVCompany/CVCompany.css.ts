import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoints } from '@/constants/breakpoints';
import { colors, media } from '@/styles/bundle.css';
import { fontWeight } from '@/styles/vars/fontStyles.css';

export const laptop = media.widthBetween(breakpoints.desktop.minWidth, 1600);

export const sCVCompany = style({
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

export const sHidden = style({
	display: 'none',
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
