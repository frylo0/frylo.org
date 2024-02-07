export type TDevices = 'desktop' | 'tablet' | 'phone';
export type TBreakpoint = {
	minWidth: number;
	maxWidth: number;
	minHeight: number;
	maxHeight: number;
};

export const breakpoints: Record<TDevices, TBreakpoint> = {
	desktop: {
		maxWidth: Infinity,
		minWidth: 1140,
		maxHeight: 1000,
		minHeight: 500,
	},
	tablet: {
		maxWidth: 1140,
		minWidth: 500,
		maxHeight: 3000,
		minHeight: 800,
	},
	phone: {
		maxWidth: 500,
		minWidth: 0,
		maxHeight: 800,
		minHeight: 300,
	},
};
