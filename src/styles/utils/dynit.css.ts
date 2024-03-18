/**
 * Dynamic Unit - returns calc expression, that represent unit, that change dynamic between screen width values.
 */
export function dynit(minScreenWidth: number, minValue: number, maxScreenWidth: number, maxValue: number): string {
	const valueDiff = maxValue - minValue;
	const screenDiff = maxScreenWidth - minScreenWidth;

	const value2screen = valueDiff / screenDiff;
	const vwFactor = `(100vw - ${minScreenWidth}px)`;

	return `calc(${minValue}px + ${value2screen} * ${vwFactor})`;
}
