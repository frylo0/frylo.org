import { createVar, style } from '@vanilla-extract/css';

import { colors } from '@/styles/bundle.css';

export const svPosition = createVar('position');

export const sIsDevelopment = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	inset: '0',
	background: '#22222210',
	position: svPosition,
	pointerEvents: 'none',
	fontSize: 32,
	textShadow: `1px 3px 5px ${colors.secondaryDarker}50`,

	backgroundImage:
		'linear-gradient(45deg, #fffbc470 25%, #ffffff30 25%, #ffffff30 50%, #fffbc470 50%, #fffbc470 75%, #ffffff30 75%, #ffffff30 100%)',
	backgroundSize: '56.57px 56.57px',

	textAlign: 'center',
	padding: '1em',

	zIndex: 10000,
});

export const sHidden = style({
	display: 'none',
});
