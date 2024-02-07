import { breakpoints } from '@/constants/breakpoints';

function and(...mediaStrings: string[]): string {
	return mediaStrings.join(' and ');
}

const device = {
	desktop: `(min-width: ${breakpoints.desktop.minWidth}px)`,
	tablet: and(`(min-width: ${breakpoints.tablet.minWidth}px)`, `(max-width: ${breakpoints.tablet.maxWidth}px)`),
	phone: `(max-width: ${breakpoints.phone.maxWidth}px)`,
};

const colorMode = {
	dark: '(prefers-color-scheme: dark)',
	light: '(prefers-color-scheme: light)',
};

export const media = {
	device,
	colorMode,
	and,
};
