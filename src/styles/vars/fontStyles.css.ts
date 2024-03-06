import { StyleRule } from '@vanilla-extract/css';

import { fonts } from './fonts.css';

export const fontWeight = {
	thin: 100,
	extraLight: 200,
	light: 300,
	regular: 400,
	medium: 500,
	semiBold: 600,
	bold: 700,
	extraBold: 800,
	black: 900,
} satisfies Record<string, number>;

export const fontStyles = {
	body: {
		fontFamily: fonts.jost,
		fontSize: 16,
		fontWeight: fontWeight.light,
		lineHeight: '143.5%',
	},
	bodyMobile: {
		fontFamily: fonts.jost,
		fontSize: 14,
		fontWeight: fontWeight.light,
		lineHeight: '20px',
	},

	head: {
		fontFamily: fonts.jost,
		fontSize: 32,
		fontWeight: fontWeight.bold,
		lineHeight: '46px',
	},
	headMobile: {
		fontFamily: fonts.jost,
		fontSize: 24,
		fontWeight: fontWeight.bold,
		lineHeight: '35px',
	},
} satisfies Record<string, StyleRule>;
