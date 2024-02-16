import { style } from '@vanilla-extract/css';

import { media } from '@/styles/bundle.css';

export const sLayout = style({
	maxWidth: 2400,

	'@media': {
		[media.device.desktop]: {
			paddingInline: '20px',
		},
		[media.device.tablet]: {
			paddingInline: '15px',
		},
		[media.device.phone]: {
			paddingInline: '10px',
		},
	},
});
