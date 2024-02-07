import { globalStyle } from '@vanilla-extract/css';

import { colors, fontStyles, media } from './bundle.css';

globalStyle('html', {
	background: colors.body,
	color: colors.secondary,

	'@media': {
		[media.device.desktop]: fontStyles.body,
		[media.device.tablet]: fontStyles.body,
		[media.device.phone]: fontStyles.bodyMobile,
	},
});
