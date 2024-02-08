import { style } from '@vanilla-extract/css';

import { layout } from '@/styles/bundle.css';
import { fontWeight } from '@/styles/vars/fontStyles.css';

export const sSection = style({
	height: `calc(100svh - ${layout.header.height.desktop}px - ${layout.page.paddingBlock.desktop}px * 2 - ${layout.page.gap.desktop}px * 2)`,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
});

export const sWords = style({
	display: 'flex',
	flexDirection: 'column',
	textAlign: 'center',
});

export const sWord = style({
	fontSize: 150,
	textTransform: 'uppercase',
	lineHeight: '115%',
});

export const sWordSolid = style({
	letterSpacing: '1%',
	fontWeight: fontWeight.medium,
});

export const sWordTransparent = style({
	fontWeight: fontWeight.regular,
	mixBlendMode: 'overlay',
});
