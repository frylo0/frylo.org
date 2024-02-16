import { style } from '@vanilla-extract/css';

import { layout, media } from '@/styles/bundle.css';
import { fontWeight } from '@/styles/vars/fontStyles.css';

export const sSection = style({
	height: `calc(100svh - ${layout.header.height.desktop}px - ${layout.page.paddingBlock.desktop}px * 2 - ${layout.page.gap.desktop}px * 2)`,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',

	'@media': {
		[media.device.phone]: {
			height: `calc(100svh - ${layout.header.height.phone}px - ${layout.page.paddingBlock.phone}px * 2 - ${layout.page.gap.phone}px * 2)`,
		},
	},
});

export const sWords = style({
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'center',
	pointerEvents: 'none',

	'@media': {
		[media.device.phone]: {
			flexDirection: 'row',
		},
	},
});

export const sWord = style({
	fontSize: 150,
	textTransform: 'uppercase',
	lineHeight: '115%',
	userSelect: 'none',

	'@media': {
		[media.device.phone]: {
			fontSize: 85,
			writingMode: 'vertical-lr',
			transform: 'rotate(-180deg)',
		},
	},
});

export const sWordSolid = style({
	letterSpacing: '1%',
	fontWeight: fontWeight.medium,
});

export const sWordTransparent = style({
	fontWeight: fontWeight.regular,
	mixBlendMode: 'overlay',
	position: 'relative',
	zIndex: 1,
});
