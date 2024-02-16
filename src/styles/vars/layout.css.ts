import { TDevices } from '@/constants/breakpoints';

const header: Record<'height', Record<TDevices, any>> = {
	height: {
		phone: 50,
		tablet: 109,
		desktop: 109,
	},
};

const page: Record<'paddingBlock' | 'gap', Record<TDevices, any>> = {
	paddingBlock: {
		phone: 10,
		tablet: 10,
		desktop: 10,
	},
	gap: {
		desktop: 10,
		tablet: 10,
		phone: 10,
	},
};

export const layout = {
	header,
	page,
};
