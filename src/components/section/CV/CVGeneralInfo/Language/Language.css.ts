import { style } from '@vanilla-extract/css';

import { colors, media } from '@/styles/bundle.css';
import { fontWeight } from '@/styles/vars/fontStyles.css';

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

	'@media': {
		[media.device.phone]: {
			fontSize: 14,
		},
	},
});

export const sLanguageName = style({
	textTransform: 'uppercase',
	fontWeight: fontWeight.semiBold,
	fontSize: 16,
	marginBlockStart: 10,

	'@media': {
		[media.device.phone]: {
			fontSize: 14,
		},
	},
});

export const sLanguageLevel = style({
	whiteSpace: 'nowrap',
});
