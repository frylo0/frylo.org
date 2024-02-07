import { style } from '@vanilla-extract/css';

import { colors, fontStyles } from './../src/styles/bundle.css';

const storybookDecorator = style({
	background: colors.body,
	color: colors.secondary,

	...fontStyles.body,
});

export const s = {
	storybookDecorator,
};
