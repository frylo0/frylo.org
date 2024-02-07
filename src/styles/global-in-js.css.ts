import { globalStyle } from '@vanilla-extract/css';

import { fonts } from './bundle.css';
import { colors } from './vars/colors.css';

globalStyle('html', {
	fontSize: '12px',
	background: colors.body,
	color: colors.secondary,
	fontFamily: fonts.gothamPro,
	fontWeight: 'normal',
});
