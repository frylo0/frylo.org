import { useCallback, useEffect, useRef } from 'react';

export function useAnimationFrameLoop(callback: () => void) {
	const requestRef = useRef<number>();
	const callbackRef = useRef<() => void>(callback);

	callbackRef.current = callback;

	const step = useCallback(() => {
		callbackRef.current();
		requestRef.current = window.requestAnimationFrame(step);
	}, []);

	useEffect(() => {
		step();
		return () => window.cancelAnimationFrame(requestRef.current || 0);
	}, [step]);
}
