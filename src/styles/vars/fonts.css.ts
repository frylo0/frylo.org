import { fontFace } from '@vanilla-extract/css';

const jostFace = fontFace([
	{
		src: 'url(/fonts/jost/Jost-VariableFont_wght.ttf) format(truetype)',
		fontStyle: 'normal',
		fontDisplay: 'swap',
	},
	{
		src: 'url(/fonts/jost/Jost-Italic-VariableFont_wght.ttf) format(truetype)',
		fontStyle: 'italic',
		fontDisplay: 'swap',
	},
]);

const jost = `${jostFace}, Ubuntu, Roboto, Open Sans, sans-serif`;

export const fonts = {
	jost,
};
