import { style } from '@vanilla-extract/css';

import { colors } from '../src/styles/bundle.css';

const storybookDecorator = style({
	background: colors.body,
	color: colors.secondary,
});

export const s = {
	storybookDecorator,
};
