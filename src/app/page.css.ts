import { style } from '@vanilla-extract/css';

import { layout } from '@/styles/bundle.css';

export const sPage = style({
	display: 'flex',
	flexDirection: 'column',
	gap: layout.page.gap.desktop,
	paddingBlock: layout.page.paddingBlock.desktop,
});
