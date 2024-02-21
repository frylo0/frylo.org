import { style } from '@vanilla-extract/css';

import { layout, media } from '@/styles/bundle.css';

export const sPage = style({
	display: 'flex',
	flexDirection: 'column',
	gap: layout.page.gap.desktop,
	paddingBlock: layout.page.paddingBlock.desktop,

	'@media': {
		[media.device.phone]: {
			gap: layout.page.gap.phone,
			paddingBlock: layout.page.paddingBlock.phone,
		},
	},
});
