import { globalStyle } from '@vanilla-extract/css';

import { colors, fontStyles, layout, media } from './bundle.css';
import { fontWeight } from './vars/fontStyles.css';

globalStyle('.html, .html body', {
	background: colors.body,
	color: colors.secondary,
	overflow: 'hidden visible',

	'@media': {
		[media.device.desktop]: fontStyles.body,
		[media.device.tablet]: fontStyles.body,
		[media.device.phone]: fontStyles.bodyMobile,
	},
});

globalStyle('.html body', {
	gap: layout.page.gap.desktop,
	paddingBlock: layout.page.paddingBlock.desktop,

	'@media': {
		[media.device.phone]: {
			gap: layout.page.gap.phone,
			paddingBlock: layout.page.paddingBlock.phone,
		},
	},
});

globalStyle('*', {
	boxSizing: 'border-box',
});

globalStyle('a', {
	color: 'inherit',
	textDecoration: 'none',
});

globalStyle('.html strong', {
	fontWeight: fontWeight.semiBold,
});
