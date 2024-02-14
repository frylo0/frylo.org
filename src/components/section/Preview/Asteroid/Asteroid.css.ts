import { style } from '@vanilla-extract/css';

export const sAsteroid = style({
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
});

export const sBall = style({
	position: 'absolute',
	width: 727,
	height: 624,
	transform: 'translate(-50%, -50%)',
	filter: 'drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.1))',
	pointerEvents: 'none',
});
